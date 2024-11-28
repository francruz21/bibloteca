import React from 'react';
import NoticiasCarousel from './NoticiasCarousel';

const Body: React.FC = () => {
  return (
    <main className="flex-1 bg-gradient-to-r from-gray-100 to-blue-100 flex items-center justify-center">
     <NoticiasCarousel/>
    </main>
  );
};

export default Body;
