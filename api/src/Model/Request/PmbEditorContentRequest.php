<?php

namespace App\Model\Request;

use Symfony\Component\Validator\Constraints as Assert;

class PmbEditorContentRequest {
    public function __construct(
        public string $pathname,
        public string $content = "",
    ) {
    }
}
