<?php

namespace App\Tests\Unit\Service;

use PHPUnit\Framework\TestCase;
use org\bovigo\vfs\vfsStream;
use App\Service\PmbFilesystemService;

class PmbFilesystemServiceTest extends TestCase
{
    private $fs;
    private $root;

    /**
     * set up test environmemt
     */
    public function setUp(): void
    {
        $this->root = vfsStream::setup('root');
        $structure = [
            'api' => [
                'composer.json' => "",
            ],
            'client' => [
                'package.json' => "",
            ],
            'README' => "{}"
        ];
        vfsStream::create($structure, $this->root);
        $this->fs = vfsStream::url('root'); // vfs://root (BASE_PATH)
    }

    public function testItCanGetAFlatProjectStructure(): void
    {
        $pmbFilesystemService = new PmbFilesystemService($this->fs, null, []);
        self::assertEquals(
            [
                "vfs://root/api" => [
                    "index" => "vfs://root/api",
                    "children" => [
                        "vfs://root/api/composer.json"
                    ],
                    "data" => "api",
                    "path" => "vfs://root",
                    "type" => "dir",
                    "isFolder" => true,
                    "canMove" => true,
                    "canRename" => true,
                ],
                "vfs://root/api/composer.json" => [
                    "index" => "vfs://root/api/composer.json",
                    "children" => null,
                    "data" => "composer.json",
                    "path" => "vfs://root/api",
                    "type" => "file",
                    "isFolder" => false,
                    "canMove" => true,
                    "canRename" => true,
                ],
                "vfs://root/client" => [
                    "index" => "vfs://root/client",
                    "children" => [
                        "vfs://root/client/package.json"
                    ],
                    "data" => "client",
                    "path" => "vfs://root",
                    "type" => "dir",
                    "isFolder" => true,
                    "canMove" => true,
                    "canRename" => true,
                ],
                "vfs://root/client/package.json" => [
                    "index" => "vfs://root/client/package.json",
                    "children" => null,
                    "data" => "package.json",
                    "path" => "vfs://root/client",
                    "type" => "file",
                    "isFolder" => false,
                    "canMove" => true,
                    "canRename" => true,
                ],
                'vfs://root/README' => [
                    "index" => "vfs://root/README",
                    "children" => null,
                    "data" => "README",
                    "path" => "vfs://root",
                    "type" => "file",
                    "isFolder" => false,
                    "canMove" => true,
                    "canRename" => true
                ],
                "root" => [
                    "index" => "root",
                    "children" => [
                        "vfs://root/api",
                        "vfs://root/client",
                        "vfs://root/README"
                    ],
                    "data" => "root",
                    "isFolder" => true,
                    "canMove" => false,
                    "canRename" => false
                ]
            ],
            $pmbFilesystemService->scandir()
        );
    }
}
