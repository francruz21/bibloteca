import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom text-white mt-auto py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">

       
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xl font-semibold">Universidad Nacional de Salta</span>
          </div>

         
          <img
            src="/assets/icons/image.png"
            alt="Logo Biblioteca Electrónica UNSa"
            className="h-16 w-14"
          />

          
          <div className="text-center mt-2">
            <p>Copyright &copy; 2024 Universidad Nacional de Salta.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
