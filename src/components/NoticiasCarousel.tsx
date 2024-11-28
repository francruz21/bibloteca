import React, { useState, useEffect } from 'react';
import noticias from '../data/noticias.json';

const NoticiasCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para cambiar de diapositiva
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? noticias.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === noticias.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Configuración del desplazamiento automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === noticias.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="carousel w-full overflow-hidden relative">
      {/* Contenedor de noticias */}
      <div
        className="flex w-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Mueve el carrusel
        }}
      >
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="carousel-item w-full flex-shrink-0 relative snap-center"
            style={{ minWidth: '100%' }}
          >
            {/* Imagen de fondo */}
            <img
              src={noticia.imagen}
              alt={noticia.titulo}
              className="h-[500px] w-full object-cover rounded-md"
            />

            {/* Contenido superpuesto */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center space-y-4 p-4">
              <h2 className="text-3xl font-bold text-white">{noticia.titulo}</h2>
              <p className="text-gray-300 text-lg">{noticia.descripcion}</p>
              <a
                href={noticia.enlace}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer más
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          ❮
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10">
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default NoticiasCarousel;
