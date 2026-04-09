import Image from 'next/image';
import Link from 'next/link';
import projImg2 from '@/src/components/assets/img/kine.jpeg';

export const metadata = {
  title: 'Projet 2 - Mon Portfolio',
  description: 'Présentation détaillée du projet 2',
};

export default function CabinetKineProjectPage() {
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
        <h1>CabinetKine</h1>
        <p>Site de prise de rendez-vous pour cabinet de kinésithérapie.</p>
      </section>

      {/* Image principale */}
      <div className="project-image">
        <Image
          src={projImg2}
          alt="Cabinet de Kinésithérapie"
          width={640}
          height={360}
          priority
        />
      </div>

      {/* Sections de contenu */}
      <section className="project-section">
        <h2>Contexte / Problème</h2>
        <p>
          De nombreux cabinets de kinésithérapie ne disposent pas d'une solution
          simple pour présenter leurs services, permettre la prise de rendez-vous
          en ligne et centraliser la gestion des disponibilités.
        </p>
        <p>
          L'objectif de ce projet est de proposer une solution claire, moderne et
          adaptée à un cabinet indépendant.
        </p>
      </section>

      <section className="project-section">
        <h2>Objectifs</h2>
        <ul>
          <li>Présenter les prestations du cabinet</li>
          <li>Permettre la prise de rendez-vous en ligne</li>
          <li>Prévoir l'envoi de confirmations par SMS</li>
          <li>Mettre en place un espace administrateur</li>
          <li>Préparer une future évolution vers une application mobile</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Technologies utilisées</h2>
        <div className="tech-stack">
          <span className="tech-tag">Next.js</span>
          <span className="tech-tag">React</span>
          <span className="tech-tag">Prisma</span>
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">HTML / CSS</span>
          <span className="tech-tag">JavaScript / TypeScript</span>
        </div>
      </section>

      <section className="project-section">
        <h2>Fonctionnalités principales</h2>
        <ul>
          <li>Navigation avec Header et Footer</li>
          <li>Page d'accueil</li>
          <li>Page des prestations</li>
          <li>Page de contact</li>
          <li>Page de réservation</li>
          <li>Base de données pour patients, rendez-vous, prestations et disponibilités</li>
          <li>Espace administrateur en cours de développement</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Aperçu visuel</h2>
        <p>
          Cette section pourra accueillir plus tard des captures d'écran du site,
          de la page de réservation et du tableau de bord administrateur.
        </p>
      </section>

      <section className="project-section">
        <h2>Challenges rencontrés</h2>
        <ul>
          <li>Comprendre le fonctionnement du App Router de Next.js</li>
          <li>Structurer correctement le projet entre pages, layout et composants</li>
          <li>Mettre en place Prisma et la base de données</li>
          <li>Corriger certaines erreurs d'hydratation</li>
          <li>Maintenir une architecture claire et évolutive</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Solutions apportées</h2>
        <ul>
          <li>Utilisation du système de routing basé sur les dossiers de Next.js</li>
          <li>Mise en place d'un layout global avec Header et Footer</li>
          <li>Organisation du projet par composants et sections</li>
          <li>Utilisation de Prisma comme intermédiaire avec la base de données</li>
          <li>Préparation d'une architecture évolutive pour l'espace admin</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Résultats / Améliorations</h2>
        <p>
          Le projet dispose déjà d'une base frontend fonctionnelle et d'une
          architecture exploitable pour le développement du backend.
        </p>
        <ul>
          <li>Ajouter l'envoi de SMS</li>
          <li>Finaliser le dashboard administrateur</li>
          <li>Ajouter l'authentification</li>
          <li>Améliorer la gestion dynamique des créneaux</li>
          <li>Développer une future version mobile</li>
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
          <Link href="/projects/project-1" className="nav-link">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Projet précédent
          </Link>
          <Link href="/projects/project-3" className="nav-link">
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
