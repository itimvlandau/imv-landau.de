<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EditorController extends AbstractController
{
    #[Route('/api/editor', methods:['GET'], name: 'editor_show')]
    public function show(): Response
    {
        return new Response(
            'api',
            Response::HTTP_OK,
            ['content-type' => 'text/html']
        );
    }
}
