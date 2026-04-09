'use client';

import { Col } from "react-bootstrap";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: StaticImageData | string;
  projectId?: number;
};

export const ProjectCard = ({ title, description, imgUrl, projectId }: ProjectCardProps) => {
  const projectLink = projectId ? `/projects/project-${projectId}` : "#";

  return (
    <Col xs={12} sm={6} md={4}>
      <Link href={projectLink} className="block group">
        <div className="proj-imgbx cursor-pointer transition-transform duration-300 group-hover:scale-105">
          <Image src={imgUrl} alt={title} className="proj-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="mt-3 text-sm text-purple-400">En savoir plus →</div>
          </div>
        </div>
      </Link>
    </Col>
  );
};