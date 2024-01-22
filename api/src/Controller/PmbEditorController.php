<?php

namespace App\Controller;

use App\Service\PmbFilesystemService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class PmbEditorController extends AbstractController
{
    #[Route('/api/pmbEditor', methods: ['GET'], name: 'get_pmb_editor')]
    public function getPmbEditor(PmbFilesystemService $pmbFilesystemService): JsonResponse
    {
        return new JsonResponse($pmbFilesystemService->scandir());
    }

    #[Route('/api/pmbEditorContent', methods: ['GET'], name: 'get_pmb_editor_content')]
    public function getPmbEditorContent(PmbFilesystemService $pmbFilesystemService, Request $request): BinaryFileResponse | JsonResponse
    {
        $pathname = $request->query->get('pathname') ?? '.';
        return $pmbFilesystemService->getContent($pathname);
    }
}
