import Image from 'next/image';
import Link from 'next/link';
import projImg1 from '@/src/components/assets/img/logo-canoe.png';

export const metadata = {
  title: 'Projet 1 - Mon Portfolio',
  description: 'Présentation détaillée du projet 1',
};

export default function AlisonStageProjectPage() {
  return (
    <main className="project-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/#projects" className="breadcrumb-link">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux projets
        </Link>
      </div>

      {/* Section Hero */}
      <section className="hero">
        <h1>Projet de stage – Alison</h1>
        <p>
          Développement d'un back-office et d'un espace client pour une entreprise
          spécialisée dans les logiciels liés à la collecte de données et à
          l'assainissement des cours d'eau.
        </p>
      </section>

      {/* Image principale */}
      <div className="project-image">
        <Image
          src={projImg1}
          alt="Logo Alison - Canoë"
          width={640}
          height={360}
          priority
        />
      </div>

      {/* Sections de contenu */}
      <section className="project-section">
        <h2>Contexte / Problème</h2>
        <p>
          Ce projet a été réalisé dans le cadre de mon stage chez Alison. L'entreprise
          développe des logiciels liés à la collecte de données et à l'assainissement
          des cours d'eau.
        </p>
        <p>
          Ma mission consistait à participer au développement d'un back-office ainsi
          que d'un espace client afin d'améliorer la gestion interne et l'accès aux
          informations pour les utilisateurs.
        </p>
      </section>

      <section className="project-section">
        <h2>Objectifs</h2>
        <ul>
          <li>Développer une interface d'administration</li>
          <li>Concevoir un espace client fonctionnel</li>
          <li>Améliorer l'organisation et la consultation des données</li>
          <li>Répondre à des besoins concrets en entreprise</li>
          <li>Mettre en pratique mes compétences en développement web</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies utilisées</h2>
        <div className="tech-stack">
          <span className="tech-tag">HTML</span>
          <span className="tech-tag">CSS</span>
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">PHP / Laravel</span>
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">Outils de développement web</span>
        </div>
      </section>

      <section className="project-section">
        <h2>Fonctionnalités principales</h2>
        <ul>
          <li>Back-office pour la gestion interne</li>
          <li>Espace client dédié</li>
          <li>Navigation structurée entre plusieurs sections</li>
          <li>Consultation et gestion des informations</li>
          <li>Interface adaptée à un usage professionnel</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Aperçu visuel</h2>
        <p>
          Cette section pourra accueillir des captures d'écran du back-office, de
          l'espace client et des différentes interfaces développées pendant le stage.
        </p>
      </section>

      <section className="project-section">
        <h2>Challenges rencontrés</h2>
        <ul>
          <li>Comprendre les besoins métier d'une entreprise réelle</li>
          <li>Concevoir deux espaces distincts : administration et client</li>
          <li>Structurer les pages de manière claire et maintenable</li>
          <li>Travailler avec une logique professionnelle et non uniquement scolaire</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Solutions apportées</h2>
        <ul>
          <li>Séparation claire entre back-office et espace client</li>
          <li>Organisation logique des pages et des fonctionnalités</li>
          <li>Développement orienté besoins concrets de l'entreprise</li>
          <li>Amélioration de ma rigueur dans la conception et le développement</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Résultats / Améliorations</h2>
        <p>
          Ce stage m'a permis de travailler sur un projet concret en entreprise et
          de renforcer mes compétences en développement web, en structuration
          d'interface et en compréhension des besoins métier.
        </p>
        <ul>
          <li>Approfondir la sécurité et la gestion des accès</li>
          <li>Améliorer encore l'expérience utilisateur</li>
          <li>Faire évoluer les fonctionnalités selon les besoins futurs</li>
        </ul>
      </section>

      {/* Boutons d'action */}
      <div className="action-buttons">
        <a href="#" className="btn-primary">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Voir le projet
        </a>
        <a href="#" className="btn-secondary">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Code source
        </a>
      </div>

      {/* Navigation entre projets */}
      <nav className="project-navigation">
        <div className="nav-links">
          <Link href="/#projects" className="nav-link">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux projets
          </Link>
          <Link href="/projects/project-2" className="nav-link">
            Projet suivant
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </nav>
    </main>
  );
}
