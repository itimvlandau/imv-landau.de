<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EditorController extends AbstractController
{
    #[Route('/admin/api', name: 'editor_show')]
    public function show()
    {
        $response = new Response(
            'Editor',
            Response::HTTP_OK,
            ['content-type' => 'text/html']
        );
        $response->send();
    }
}
