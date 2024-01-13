<?php

namespace App\DataFixtures;

use App\Entity\PmbEditor;
use App\Factory\PmbEditorFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        PmbEditorFactory::createOne();
    }
}
