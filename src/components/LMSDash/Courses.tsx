// Course.tsx
import React from 'react';
import PageHeader from 'src/library/heading/pageHeader';
import Layout from './LMSLayout';

const Courses: React.FC = () => {
  return (
    <div>
      <PageHeader heading='Courses page'/>
      <Layout/>
    </div>
  );
};

export default Courses;
