<?php

namespace App\Service;

use Symfony\Component\Filesystem\Path;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use App\Api\ApiProblem;
use App\Api\ApiProblemException;
use Symfony\Component\Filesystem\Exception\IOException;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\JsonResponse;

class PmbFilesystemService
{
    public function __construct(
        private string $projectRootDir,
        private ?int $maxDepth,
        private array $exclude,
    ) {
    }

    public function scandir($pathname = ""): array
    {
        $finder = new Finder();
        $finder
            ->depth('== 0')
            ->ignoreUnreadableDirs()
            ->ignoreVCSIgnored(true)
            ->ignoreDotFiles(false)
            ->in(Path::canonicalize($this->projectRootDir));

        $dirFlattened = $this->scandirFlattened(Path::canonicalize($this->projectRootDir . "/" . $pathname));
        $dirFlattened['root'] = [
            "index" => 'root',
            "children" => array_map(fn ($item) => $item->getPathname(), array_values(iterator_to_array($finder))),
            "data" => 'root',
            "isFolder" => true,
            "canMove" => false,
            "canRename" => false,
        ];
        return $dirFlattened;
    }

    public function getContent($pathname = ""): BinaryFileResponse | JsonResponse
    {
        $filesystem = new Filesystem();

        if (!$filesystem->exists($pathname)) {
            throw new ApiProblemException(new ApiProblem(400, "File \"$pathname\" does not exist"));
        }
        return new BinaryFileResponse($pathname);
    }

    public function setContent($pathname = null, $content = ""): void
    {
        $filesystem = new Filesystem();

        if (!$filesystem->exists($pathname)) {
            throw new ApiProblemException(new ApiProblem(400, "File \"$pathname\" does not exist"));
        }
        try {
            $filesystem->dumpFile($pathname, $content);
        } catch (IOException $ex) {
            throw new ApiProblemException(new ApiProblem(400, "File \"$pathname\" can not be written to."));
        }
    }

    private function scandirFlattened($pathname = "", $parent = null, &$filedata = [], $level = 0): array
    {
        $finder = new Finder();
        $finder
            ->depth('== 0')
            ->ignoreUnreadableDirs()
            ->ignoreVCSIgnored(true)
            ->ignoreDotFiles(false)
            ->in($pathname);

        foreach ($finder as $node) {
            $name = $node->getFilename();
            if ($node->isDir()) {
                $pathname = $node->getPathname();
                if (
                    (!isset($this->maxDepth) || $level < $this->maxDepth) &&
                    !in_array($parent, $this->exclude)
                ) {
                    $finderChild = new Finder();
                    $finderChild
                        ->depth('== 0')
                        ->ignoreUnreadableDirs()
                        ->ignoreVCSIgnored(true)
                        ->ignoreDotFiles(false)
                        ->in($pathname);
                    $filedata[$pathname] = [
                        "index" => $pathname,
                        "children" => array_map(fn ($item) => $item->getPathname(), array_values(iterator_to_array($finderChild))),
                        "data" => $name,
                        "path" => $node->getPath(),
                        "type" => $node->getType(),
                        "isFolder" => $node->getType() === "dir" ? true : false,
                        "canMove" => true,
                        "canRename" => true,
                    ];
                    $this->scandirFlattened($pathname, $name, $filedata, $level + 1);
                }
            } elseif ($node->isFile()) {
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
