import Image from 'next/image';
import Link from 'next/link';
import projImg1 from '@/src/components/assets/img/color-sharp.png';

export const metadata = {
  title: 'Projet 4 - Mon Portfolio',
  description: 'Présentation détaillée du projet 4',
};

export default function Project4() {
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
        <h1>Dashboard Analytics</h1>
        <p>
          Un tableau de bord analytique avancé pour visualiser et analyser les données en temps réel.
        </p>
      </section>

      {/* Image principale */}
      <div className="project-image">
        <Image
          src={projImg1}
          alt="Dashboard Analytics"
          width={800}
          height={500}
          priority
        />
      </div>

      {/* Sections de contenu */}
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>
          Un dashboard analytique complet permettant aux entreprises de visualiser leurs données,
          les analyser et en extraire des insights précieux. Le système intègre plusieurs sources
          de données et offre des visualisations interactives et customisables.
        </p>
        <p>
          Les utilisateurs peuvent créer des rapports personnalisés, définir des alertes et exporter
          les données dans différents formats pour une présentation ou une analyse approfondie.
        </p>
      </section>

      <section className="project-section">
        <h2>Informations du projet</h2>
        <div className="project-info">
          <div className="info-item">
            <strong>Date de projet:</strong> Mars 2025 - Mai 2025
          </div>
          <div className="info-item">
            <strong>Rôle:</strong> Frontend Developer
          </div>
          <div className="info-item">
            <strong>Client:</strong> DataViz Solutions
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Technologies utilisées</h2>
        <div className="tech-stack">
          <span className="tech-tag">React</span>
          <span className="tech-tag">D3.js</span>
          <span className="tech-tag">Recharts</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">PostgreSQL</span>
        </div>
      </section>

      <section className="project-section">
        <h2>Défis rencontrés</h2>
        <ul>
          <li>Traitement et visualisation de millions de points de données</li>
          <li>Performance des requêtes sur des datasets volumineux</li>
          <li>Création de visualisations interactives et réactives</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Solutions apportées</h2>
        <ul>
          <li>Utilisation de D3.js et Recharts pour les visualisations avancées</li>
          <li>Cache et indexation intelligente pour les requêtes rapides</li>
          <li>Virtualization pour gérer de grandes listes de données</li>
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
          <Link href="/projects/project-3" className="nav-link">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Projet précédent
          </Link>
          <Link href="/projects/project-5" className="nav-link">
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
