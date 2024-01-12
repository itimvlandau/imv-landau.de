<?php

namespace App\Repository;

use App\Entity\PmbEditor;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PmbEditor>
 *
 * @method PmbEditor|null find($id, $lockMode = null, $lockVersion = null)
 * @method PmbEditor|null findOneBy(array $criteria, array $orderBy = null)
 * @method PmbEditor[]    findAll()
 * @method PmbEditor[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PmbEditorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PmbEditor::class);
    }

//    /**
//     * @return PmbEditor[] Returns an array of PmbEditor objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PmbEditor
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
