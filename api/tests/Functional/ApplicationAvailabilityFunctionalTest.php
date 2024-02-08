<?php

namespace App\Tests\Functional;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApplicationAvailabilityFunctionalTest extends WebTestCase
{
    /**
     * @dataProvider urlProvider
     */
    public function testPageIsSuccessful($url): void
    {
        $client = self::createClient();
        $client->request('GET', $url);

        $this->assertResponseIsSuccessful();
    }

    public function urlProvider(): \Generator
    {
        yield ['/api/pmbEditor'];
        yield ['/api/pmbEditorContent?pathname=%2Fvar%2Fwww%2Fimv-landau.de%2FVagrantfile'];
    }
}