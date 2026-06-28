import React, { useState, useRef } from "react"; // Importamos useRef

function Plus() {
  const [value, setValue] = useState(false);
  
  // Creamos una referencia que apuntará a nuestro div oculto
  const contentRef = useRef(null);

  const handleClick = () => {
    // 1. Cambiamos el estado (si estaba oculto, ahora se mostrará)
    const nextValue = !value;
    setValue(nextValue);

    // 2. Si se va a mostrar, esperamos un milisegundo a que React renderice el HTML
    // y luego hacemos el scroll suave hacia él.
    if (nextValue) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({
          behavior: "smooth", // Hace que el movimiento sea fluido y no de golpe
          block: "start",    // Alinea el principio del div con la parte superior de la pantalla
        });
      }, 100); // Pequeño delay para asegurar que el elemento ya existe en el DOM
    }
  };

  return (
    <>
      <button onClick={handleClick} className="btn-toggle">
        <span id="Myself" className="project-arrow-wrapper">
          <svg
            className={`project-arrow ${value ? "rotated" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            style={{ width: "24px", height: "24px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5l6 6m0 0l-6 6M19.5 10.5h-15"
            />
          </svg>
        </span>
      </button>

      {/* Le asignamos la id "hide" que querías y la ref al contenedor.
        Nota: Usamos una técnica para que el div exista siempre pero juegue con la opacidad/display,
        o mantenemos tu renderizado condicional. Al usar el setTimeout de 100ms, nos aseguramos 
        de que el div ya se ha montado en el DOM antes de buscarlo para el scroll.
      */}
      {value && (
        <div id="hide" ref={contentRef} className="content-area">
          <h1>Hola sobre mi real</h1>
          <h1>Este soy yo</h1>
          <p>Este es un párrafo de ejemplo para mostrar cómo funciona el scroll suave hacia este contenido cuando se hace clic en el botón.
          Este es un párrafo de ejemplo para mostrar cómo funciona el scroll suave hacia este contenido cuando se hace clic en el botón.
          Este es un párrafo de ejemplo para mostrar cómo funciona el scroll suave hacia este contenido cuando se hace clic en el botón.
          Este es un párrafo de ejemplo para mostrar cómo funciona el scroll suave hacia este contenido cuando se hace clic en el botón.
          Este es un párrafo de ejemplo para mostrar cómo funciona el scroll suave hacia este contenido cuando se hace clic en el botón.
          Este es un párrafo de ejemplo para mostrar cómo funciona el scroll suave hacia este contenido cuando se hace clic en el botón.
          Este es un párrafo de ejemplo para mostrar cómo funciona el scroll suave hacia este contenido cuando se hace clic en el botón.</p>
        </div>
      )}
    </>
  );
}

export default Plus;