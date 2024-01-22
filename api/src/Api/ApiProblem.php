<?php

namespace App\Api;

use Symfony\Component\HttpFoundation\Response;

class ApiProblem
{
    private $extraData = array();

    public function __construct(private $statusCode, private $message = null, private $type = null)
    {
        $this->statusCode = $statusCode;
        $this->message ??= (array_key_exists($statusCode, Response::$statusTexts) ? Response::$statusTexts[$statusCode] : Response::$statusTexts[500]);
        $this->type ??= (array_key_exists($statusCode, Response::$statusTexts) ? Response::$statusTexts[$statusCode] : Response::$statusTexts[500]);
    }

    public function getStatusCode(): int
    {
        return $this->statusCode;
    }

    public function setMessage(string $message): void
    {
        $this->message = $message;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function set($name, $value): void
    {
        $this->extraData[$name] = $value;
    }

    public function toArray(): array
    {
        return array_merge(
            $this->extraData,
            [
                'status' => $this->statusCode,
                'type' => $this->type,
                'message' => $this->message,
            ]
        );
    }
}
