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
            'imv-landau.de' => [
                'api' => [
                    'composer.json' => "",
                ],
                'client' => [
                    'package.json' => "",
                ],
                'README' => "{}"
            ],
        ];
        vfsStream::create($structure, $this->root);
        $this->fs = vfsStream::url('root'); // vfs://root (BASE_PATH)
    }

    public function testItCanGetAFlatProjectStructure(): void
    {
        $pmbFilesystemService = new PmbFilesystemService('imv-landau.de', $this->fs, null, []);
        self::assertEquals(
            [
                "vfs://root/imv-landau.de" => [
                    "index" => "vfs://root/imv-landau.de",
                    "children" => [
                        "vfs://root/imv-landau.de/api",
                        "vfs://root/imv-landau.de/client",
                        "vfs://root/imv-landau.de/README"
                    ],
                    "data" => "imv-landau.de",
                    "path" => "vfs://root",
                    "type" => "dir",
                    "isFolder" => true,
                    "canMove" => true,
                    "canRename" => true,
                ],
                "vfs://root/imv-landau.de/api" => [
                    "index" => "vfs://root/imv-landau.de/api",
                    "children" => [
                        "vfs://root/imv-landau.de/api/composer.json"
                    ],
                    "data" => "api",
                    "path" => "vfs://root/imv-landau.de",
                    "type" => "dir",
                    "isFolder" => true,
                    "canMove" => true,
                    "canRename" => true,
                ],
                "vfs://root/imv-landau.de/api/composer.json" => [
                    "index" => "vfs://root/imv-landau.de/api/composer.json",
                    "children" => null,
                    "data" => "composer.json",
                    "path" => "vfs://root/imv-landau.de/api",
                    "type" => "file",
                    "isFolder" => false,
                    "canMove" => true,
                    "canRename" => true,
                ],
                "vfs://root/imv-landau.de/client" => [
                    "index" => "vfs://root/imv-landau.de/client",
                    "children" => [
                        "vfs://root/imv-landau.de/client/package.json"
                    ],
                    "data" => "client",
                    "path" => "vfs://root/imv-landau.de",
                    "type" => "dir",
                    "isFolder" => true,
                    "canMove" => true,
                    "canRename" => true,
                ],
                "vfs://root/imv-landau.de/client/package.json" => [
                    "index" => "vfs://root/imv-landau.de/client/package.json",
                    "children" => null,
                    "data" => "package.json",
                    "path" => "vfs://root/imv-landau.de/client",
                    "type" => "file",
                    "isFolder" => false,
                    "canMove" => true,
                    "canRename" => true,
                ],
                'vfs://root/imv-landau.de/README' => [
                    "index" => "vfs://root/imv-landau.de/README",
                    "children" => null,
                    "data" => "README",
                    "path" => "vfs://root/imv-landau.de",
                    "type" => "file",
                    "isFolder" => false,
                    "canMove" => true,
                    "canRename" => true
                ],
                "root" => [
                    "index" => "root",
                    "children" => [
                        "vfs://root/imv-landau.de"
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
