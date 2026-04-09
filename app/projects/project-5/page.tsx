import Image from 'next/image';
import Link from 'next/link';
import projImg2 from '@/src/components/assets/img/color-sharp2.png';

export const metadata = {
  title: 'Projet 5 - Mon Portfolio',
  description: 'Présentation détaillée du projet 5',
};

export default function Project5() {
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
        <h1>Plateforme SaaS</h1>
        <p>
          Une solution SaaS multi-tenant pour la gestion de ressources humaines et la paie.
        </p>
      </section>

      {/* Image principale */}
      <div className="project-image">
        <Image
          src={projImg2}
          alt="Plateforme SaaS"
          width={800}
          height={500}
          priority
        />
      </div>

      {/* Sections de contenu */}
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>
          Une plateforme SaaS complète pour la gestion des ressources humaines, incluant la gestion
          des employés, les feuilles de paie, les congés et les performances. La plateforme est basée
          sur une architecture multi-tenant sécurisée et scalable.
        </p>
        <p>
          Chaque client a son propre espace de travail isolé avec ses données sécurisées et peut
          customiser la plateforme selon ses besoins spécifiques. Le système respecte les normes
          de conformité et de sécurité les plus strictes.
        </p>
      </section>

      <section className="project-section">
        <h2>Informations du projet</h2>
        <div className="project-info">
          <div className="info-item">
            <strong>Date de projet:</strong> Juin 2025 - Décembre 2025
          </div>
          <div className="info-item">
            <strong>Rôle:</strong> Full Stack Developer & Architect
          </div>
          <div className="info-item">
            <strong>Client:</strong> HRTech Global
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Technologies utilisées</h2>
        <div className="tech-stack">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Next.js</span>
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">PostgreSQL</span>
          <span className="tech-tag">Docker</span>
          <span className="tech-tag">AWS</span>
        </div>
      </section>

      <section className="project-section">
        <h2>Défis rencontrés</h2>
        <ul>
          <li>Architecture multi-tenant avec isolation des données</li>
          <li>Respect de la conformité légale et des normes de sécurité</li>
          <li>Scalabilité pour supporter des milliers d'utilisateurs</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Solutions apportées</h2>
        <ul>
          <li>Architecture multi-tenant robuste avec isolation au niveau DB</li>
          <li>Chiffrement des données sensibles et audit trails complets</li>
          <li>Infrastructure scalable avec load balancing et auto-scaling</li>
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
          <Link href="/projects/project-4" className="nav-link">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Projet précédent
          </Link>
          <Link href="/#projects" className="nav-link">
            Tous les projets
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </nav>
    </main>
  );
}
