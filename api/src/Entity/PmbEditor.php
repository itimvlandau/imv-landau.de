<?php

namespace App\Entity;

use App\Repository\PmbEditorRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PmbEditorRepository::class)]
class PmbEditor
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $rtl = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isRtl(): ?bool
    {
        return $this->rtl;
    }

    public function setRtl(bool $rtl): static
    {
        $this->rtl = $rtl;

        return $this;
    }
}
