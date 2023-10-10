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
        private array $exclude,
    ) {
    }

    public function  scandir($pathname = ".")
    {
        chdir(Path::canonicalize($this->projectDir . "/.."));
        $iterator = new FilesystemIterator($pathname, FilesystemIterator::SKIP_DOTS);
        $dirFlattened = $this->scandirFlattened($pathname);
        $dirFlattened['root'] = [
            "index" => 'root',
            "children" => array_keys(iterator_to_array($iterator)),
            "data" => 'root',
            "isFolder" => true,
            "canMove" => false,
            "canRename" => false,
        ];
        return $dirFlattened;
    }

    private function scandirFlattened($dir, $parent = null, &$filedata = [], $level = 0)
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
                if (!isset($this->maxDepth) || $level < $this->maxDepth) {
                    if (!in_array($parent, $this->exclude)) {
                        $iterator = new FilesystemIterator($pathname, FilesystemIterator::SKIP_DOTS);
                        $filedata[$pathname] = [
                            "index" => $pathname,
                            "children" => !in_array($name, $this->exclude) ? array_keys(iterator_to_array($iterator)) : null,
                            "data" => $name,
                            "path" => $node->getPath(),
                            "type" => $node->getType(),
                            "isFolder" => $node->getType() === "dir" ? true : false,
                            "canMove" => true,
                            "canRename" => true,
                        ];
                        $this->scandirFlattened($pathname, $name, $filedata, $level + 1);
                    }
                }
            } elseif ($node->isFile() && !in_array($parent, $this->exclude)) {
                $pathname = $node->getPathname();
                $filedata[$pathname] = [
                    "index" => $pathname,
                    "children" => null,
                    "data" => $name,
                    "path" => $node->getPath(),
                    "type" => $node->getType(),
                    "isFolder" => false,
                    "canMove" => true,
                    "canRename" => true,
                ];
            }
        }
        return $filedata;
    }
};
