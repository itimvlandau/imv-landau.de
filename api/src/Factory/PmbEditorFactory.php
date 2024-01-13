<?php

namespace App\Factory;

use App\Entity\PmbEditor;
use App\Repository\PmbEditorRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<PmbEditor>
 *
 * @method        PmbEditor|Proxy                     create(array|callable $attributes = [])
 * @method static PmbEditor|Proxy                     createOne(array $attributes = [])
 * @method static PmbEditor|Proxy                     find(object|array|mixed $criteria)
 * @method static PmbEditor|Proxy                     findOrCreate(array $attributes)
 * @method static PmbEditor|Proxy                     first(string $sortedField = 'id')
 * @method static PmbEditor|Proxy                     last(string $sortedField = 'id')
 * @method static PmbEditor|Proxy                     random(array $attributes = [])
 * @method static PmbEditor|Proxy                     randomOrCreate(array $attributes = [])
 * @method static PmbEditorRepository|RepositoryProxy repository()
 * @method static PmbEditor[]|Proxy[]                 all()
 * @method static PmbEditor[]|Proxy[]                 createMany(int $number, array|callable $attributes = [])
 * @method static PmbEditor[]|Proxy[]                 createSequence(iterable|callable $sequence)
 * @method static PmbEditor[]|Proxy[]                 findBy(array $attributes)
 * @method static PmbEditor[]|Proxy[]                 randomRange(int $min, int $max, array $attributes = [])
 * @method static PmbEditor[]|Proxy[]                 randomSet(int $number, array $attributes = [])
 */
final class PmbEditorFactory extends ModelFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function getDefaults(): array
    {
        return [
            'rtl' => self::faker()->boolean(0),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(PmbEditor $pmbEditor): void {})
        ;
    }

    protected static function getClass(): string
    {
        return PmbEditor::class;
    }
}
