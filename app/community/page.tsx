import { type Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Community | Qraft Academy",
  description: "Join the Qraft Academy community of learners, professionals, entrepreneurs, and changemakers building the future of Work and Leadership in Africa.",
};

const CommunityPage = () => {
  return (
    <div>
      <h1>Community Page</h1>
      <p>Welcome to the community page.</p>
    </div>
  );
};

export default CommunityPage;
