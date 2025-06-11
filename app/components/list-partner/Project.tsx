'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

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

export default function Project() {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3001/list-partner');
        if (!res.ok) throw new Error('Failed to fetch data');

        const projectData = await res.json();
        setData(projectData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => <p key={item.project_id}>{item.project_id}</p>) // ✅ key 값 수정
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
