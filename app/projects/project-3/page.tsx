import Image from 'next/image';
import Link from 'next/link';
import projImg3 from '@/src/components/assets/img/banner-bg.png';

export const metadata = {
  title: 'Projet 3 - Mon Portfolio',
  description: 'Présentation détaillée du projet 3',
};

export default function Project3() {
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
        <h1>Application Mobile de Productivité</h1>
        <p>
          Une application mobile cross-platform pour la gestion de productivité personnelle.
        </p>
      </section>

      {/* Image principale */}
      <div className="project-image">
        <Image
          src={projImg3}
          alt="Application Mobile de Productivité"
          width={800}
          height={500}
          priority
        />
      </div>

      {/* Sections de contenu */}
      <section className="project-section">
        <h2>À propos du projet</h2>
        <p>
          Cette application mobile aide les utilisateurs à organiser leurs tâches, gérer leurs projets
          et suivre leur productivité en temps réel. L'application fonctionne sur iOS et Android avec
          une synchronisation cloud automatique.
        </p>
        <p>
          Les utilisateurs peuvent créer des projets, assigner des tâches à leurs collègues, définir
          des délais et recevoir des notifications intelligentes pour rester productifs.
        </p>
      </section>

      <section className="project-section">
        <h2>Informations du projet</h2>
        <div className="project-info">
          <div className="info-item">
            <strong>Date de projet:</strong> Octobre 2024 - Février 2025
          </div>
          <div className="info-item">
            <strong>Rôle:</strong> Full Stack Mobile Developer
          </div>
          <div className="info-item">
            <strong>Client:</strong> Productivity Plus
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Technologies utilisées</h2>
        <div className="tech-stack">
          <span className="tech-tag">React Native</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">Firebase</span>
          <span className="tech-tag">Expo</span>
          <span className="tech-tag">Redux</span>
          <span className="tech-tag">Node.js</span>
        </div>
      </section>

      <section className="project-section">
        <h2>Défis rencontrés</h2>
        <ul>
          <li>Synchronisation en temps réel sur plusieurs appareils</li>
          <li>Gestion de la batterie et de l'utilisation des données</li>
          <li>Test cross-platform pour assurer la compatibilité</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Solutions apportées</h2>
        <ul>
          <li>Utilisation de Firebase pour la synchronisation et les notifications</li>
          <li>Optimisation des performances avec React Native et code partagé</li>
          <li>Mode hors ligne avec synchronisation automatique une fois en ligne</li>
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
          <Link href="/projects/project-2" className="nav-link">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Projet précédent
          </Link>
          <Link href="/projects/project-4" className="nav-link">
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
