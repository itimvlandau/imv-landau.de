<?php

namespace App\Controller;

use App\Service\PmbFilesystemService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class EditorController extends AbstractController
{
    #[Route('/api/editor', methods: ['GET'], name: 'editor_show')]
    public function show(PmbFilesystemService $pmbFilesystemService): JsonResponse
    {
        return new JsonResponse($pmbFilesystemService->scandir());
    }

    #[Route('/api/content', methods: ['GET'], name: 'get_content')]
    public function getContent(PmbFilesystemService $pmbFilesystemService, Request $request): BinaryFileResponse
    {
        $pathname = $request->query->get('pathname');
        return $pmbFilesystemService->getContent($pathname);
    }
}
