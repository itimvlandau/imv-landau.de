<?php

namespace App\Controller;

use App\Service\PmbFilesystemService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class EditorController extends AbstractController
{
    #[Route('/api/editor', methods:['GET'], name: 'editor_show')]
    public function show(PmbFilesystemService $pmbFilesystemService): JsonResponse
    {
        return new JsonResponse($pmbFilesystemService->scandir());
    }
}
