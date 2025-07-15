'use client';

import Category from '@/app/components/list-partner/Category';
import ProjectBox from '@/app/components/list-partner/ProjectBox';
import { useState } from 'react';

export default function ProjectWrap() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    1
  );

  return (
    <div>
      <Category
        onSelectCategory={setSelectedCategoryId}
        selectedCategoryId={selectedCategoryId}
      />
      <ProjectBox selectedCategoryId={selectedCategoryId} />
    </div>
  );
}
