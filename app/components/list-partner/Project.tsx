'use client';

import Link from 'next/link';
import { use } from 'react';

type Project = {
  project_id: number;
  commenttitle: string;
  proficiency: string;
  technology: string;
  work_type: string;
  project_duration: string;
  location: string;
  recruitment_status: string;
  deadline: string;
  likes: number;
  monthly_price: string;
  current_members: number;
  registration_date: string;
  expected_start_date: string;
};

export default function Project({ data }: { data: Promise<Project[]> }) {
  const projects = use(data);
  return (
    <div>
      <ul className="flex">
        {projects.map((project) => (
          <li key={project.project_id}>{project.project_id}</li>
        ))}
      </ul>
    </div>
  );
}
