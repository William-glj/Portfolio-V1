import React, { useState, useRef } from "react"; 

function Plus() {
  const [value, setValue] = useState(false);
  
  
  const contentRef = useRef(null);

  const handleClick = () => {
   
    const nextValue = !value;
    setValue(nextValue);

   
    if (nextValue) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({
          behavior: "smooth", 
          block: "start",    
        });
      }, 100); 
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