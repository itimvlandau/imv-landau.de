<?php

namespace App\Api;

use Symfony\Component\HttpKernel\Exception\HttpException;
use App\Api\ApiProblemExceptionInterface;

class ApiProblemException extends HttpException implements ApiProblemExceptionInterface
{
    private $apiProblem;

    public function __construct(ApiProblem $apiProblem, \Exception $previous = null, array $headers = array(), $code = 0)
    {
        $this->apiProblem = $apiProblem;

        parent::__construct(
            $apiProblem->getStatusCode(),
            $apiProblem->getMessage(),
            $previous,
            $headers,
            $code
        );
    }

    public function getApiProblem()
    {
        return $this->apiProblem;
    }
}
