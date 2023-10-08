<?php

namespace App\Service;

use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Path;

class PmbFilesystemService
{

    public function __construct(
        private string $projectDir
    ) {
    }

    public function  scandir(
        $pathname = ".",
        $maxDepth = null,
        $regexExclude = "/node_modules|vendor|cache|ansible|dist|\.git/"
    ) {
        chdir(Path::canonicalize($this->projectDir . "/.."));
        return $this->scandirFlattened($pathname, $maxDepth, $regexExclude);
    }

    private function scandirFlattened($dir, $maxDepth = null, $regexExclude = "//", &$filedata = [], $level = 0)
    {
        if (!$dir instanceof \FilesystemIterator) {
            $dir = new \FilesystemIterator(
                (string) $dir,
                \FilesystemIterator::KEY_AS_PATHNAME |
                    \FilesystemIterator::CURRENT_AS_FILEINFO |
                    \FilesystemIterator::SKIP_DOTS |
                    \FilesystemIterator::UNIX_PATHS
            );
        }
        foreach ($dir as $node) {
            $name = $node->getFilename();
            if ($node->isDir()) {
                $pathname = $node->getPathname();
                if ($regexExclude === "//" || !preg_match($regexExclude, $name)) {
                    $filedata[] = [
                        "children" => [],
                        "name" => $name,
                        "path" => $node->getPath(),
                        "pathname" => $pathname,
                        'type' => $node->getType(),
                    ];
                    if (!isset($maxDepth) || $level < $maxDepth) {
                        $this->scandirFlattened($pathname, $maxDepth, $regexExclude, $filedata, $level + 1);
                    }
                }
            } elseif (
                $node->isFile() && ($regexExclude === "//" || !preg_match($regexExclude, $name))
            ) {
                $pathname = $node->getPathname();
                $filedata[] = [
                    "children" => [],
                    "name" => $name,
                    "path" => $node->getPath(),
                    "pathname" => $pathname,
                    'type' => $node->getType(),
                ];
            }
        }
        return $filedata;
    }
};
