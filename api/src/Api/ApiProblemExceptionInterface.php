<?php

namespace App\Api;

interface ApiProblemExceptionInterface
{
    /**
     * Returns an api problem object.
     *
     * @return object api problem
     */
    public function getApiProblem();
}
