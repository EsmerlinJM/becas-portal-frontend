import React from "react";
import BlockCheck from "../../molecules/block-filter";
import BlockSelect from "../../molecules/block-filter-select";
import { BsFilterRight } from "react-icons/bs";

export default function Sidebar() {
  const onSelect = (payload) => {
    console.log(payload);
  };
  return (
    <div className="w-1/4 p-6 shadow-md">
      <p className="text-md flex ">
        <BsFilterRight size={20} className="mr-2" /> FILTRA TU BÚSQUEDA
      </p>
      <div className="my-7">
        <BlockCheck
          onSelect={onSelect}
          titleBlock="Tipo"
          arrCheckBox={[
            { id: 1, name: "internacional", text: "Internacional" },
            { id: 1, name: "internacional", text: "Investigación" },
            { id: 1, name: "internacional", text: "Lenguas" },
          ]}
        />
      </div>

      <div className="my-7">
        <BlockCheck
          onSelect={onSelect}
          titleBlock="Nivel"
          arrCheckBox={[
            { id: 1, name: "internacional", text: "Técnico" },
            { id: 1, name: "internacional", text: "Grado" },
            { id: 1, name: "internacional", text: "Especialidad" },
            { id: 1, name: "internacional", text: "Maestría" },
            { id: 1, name: "internacional", text: "Doctorado" },
            { id: 1, name: "internacional", text: "Postdoctorado" },
          ]}
        />
      </div>

      <div className="my-7">
        <BlockSelect titleBlock="Àrea" placeholder="Seleccionar àrea" />
      </div>

      <div className="my-7">
        <BlockSelect titleBlock="Institución" placeholder="Seleccionar" />
      </div>

      <div className="my-7">
        <BlockCheck
          titleBlock="Idioma"
          onSelect={onSelect}
          arrCheckBox={[
            { id: 1, name: "internacional", text: "Espańol" },
            { id: 1, name: "internacional", text: "Ingles" },
            { id: 1, name: "internacional", text: "Frances" },
            { id: 1, name: "internacional", text: "Otros" },
          ]}
        />
      </div>

      <div className="my-7">
        <BlockSelect titleBlock="Ubicación" placeholder="Seleccionar" />
      </div>

      <div className="my-7">
        <BlockCheck
          onSelect={onSelect}
          titleBlock="Idioma"
          arrCheckBox={[
            { id: 1, name: "internacional", text: "Virtual" },
            { id: 1, name: "internacional", text: "Presencial" },
            { id: 1, name: "internacional", text: "Semi-presencial" },
          ]}
        />
      </div>
    </div>
  );
}
