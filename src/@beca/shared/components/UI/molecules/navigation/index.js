import React from "react";

export default function Navigation() {
  return (
    <div className="bg-gray-50 w-full flex justify-end p-4 shadow-md">
      <div className="w-3/4 flex justify-between mr-6">
        <p className="text-md ">Resultados</p>

        <span className="flex items-center">
          <p className="font-bold text-xs mr-2">Está aquí: </p>
          <p className="text-sm cursor-pointer mr-2"> Inicio / </p>
          <p className="text-sm cursor-pointer"> Resultados / </p>
        </span>
      </div>
    </div>
  );
}