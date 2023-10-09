<?php

namespace App\Service;

use FilesystemIterator;
use IteratorIterator;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Path;

class PmbFilesystemService
{

    public function __construct(
        private string $projectDir,
        private ?int $maxDepth,
        private string $exclude,
    ) {
    }

    public function  scandir($pathname = ".")
    {
        chdir(Path::canonicalize($this->projectDir . "/.."));
        return $this->scandirFlattened($pathname);
    }

    private function scandirFlattened($dir, &$filedata = [], $level = 0)
    {
        if (!$dir instanceof FilesystemIterator) {
            $dir = new FilesystemIterator(
                (string) $dir,
                FilesystemIterator::KEY_AS_PATHNAME |
                    FilesystemIterator::CURRENT_AS_FILEINFO |
                    FilesystemIterator::SKIP_DOTS |
                    FilesystemIterator::UNIX_PATHS
            );
        }
        foreach ($dir as $node) {
            $name = $node->getFilename();
            if ($node->isDir()) {
                $pathname = $node->getPathname();
                if ($this->exclude === "//" || !preg_match($this->exclude, $name)) {
                    $iterator = new FilesystemIterator($pathname, FilesystemIterator::SKIP_DOTS);
                    $filedata[] = [
                        "index" => $pathname,
                        "children" => array_keys(iterator_to_array($iterator)),
                        "name" => $name,
                        "path" => $node->getPath(),
                        "type" => $node->getType(),
                        "isFolder" => $node->getType() === "dir" ? true : false,
                        "canMove" => true,
                        "canRename" => true,
                    ];
                    if (!isset($this->maxDepth) || $level < $this->maxDepth) {
                        $this->scandirFlattened($pathname, $filedata, $level + 1);
                    }
                }
            } elseif ($node->isFile() && ($this->exclude === "//" || !preg_match($this->exclude, $name))) {
                $pathname = $node->getPathname();
                $filedata[] = [
                    "index" => $pathname,
                    "children" => [],
                    "name" => $name,
                    "path" => $node->getPath(),
                    "type" => $node->getType(),
                    "isFolder" => $node->getType() === "dir" ? true : false,
                    "canMove" => true,
                    "canRename" => true,
                ];
            }
        }
        return $filedata;
    }
};
