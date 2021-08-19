import OfertCard from "../../molecules/ofert-card";
import CardColumns from "../../../hocs/card-columns";
import useAction from "./use-action";
import Loading from "react-loader-spinner";
import MUIDataTable from "mui-datatables";

import { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineInsertRowAbove } from "react-icons/ai";
import { useHistory } from "react-router";

const columns = [
  "id",
  "Insitucion",
  "Carrera",
  "Sede",
  "Nivel",
  "Area",
  "Idioma",
  "Modalidad",
];

export default function OfertList(id) {
  const [table, setTable] = useState(false);
  const history = useHistory();

  const [
    { screens, items, active, status, statusBySearch, countResult },
    actions,
  ] = useAction(id);

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "vertical",
    tableBodyHeight: "800px",
    selectableRows: false,
    onRowClick: (rowData) => {
      history.push("/query-result/detail/" + rowData[0]);
    },
  };

  const data =
    table &&
    items.map((itm) => {
      const {
        id,
        schedule: { modality },
        oferta: {
          academic_offer_name,
          development_area_name,
          education_level_name,
          campus_province,
          institution_name,
          language,
        },
      } = itm;

      return [
        id,
        institution_name,
        development_area_name,
        campus_province,
        education_level_name,
        academic_offer_name,
        language,
        modality,
      ];
    });

  if (status === "loading" || statusBySearch === "loading")
    return (
      <div className="flex justify-center items-center h-1/2">
        <Loading type="Puff" color="gray" width={350} height={100} />
      </div>
    );
  if (
    (status !== "loading" &&
      status === "completed" &&
      statusBySearch === "completed" &&
      !items.length) ||
    !id
  ) {
    return (
      <div className="text-center text-xl mt-20">
        <h3>No hay resultados!</h3>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between mt-5 mb-3 mx-1">
        <h3>{countResult.toLocaleString()} resultados encontrados</h3>
        <div className="flex">
          <BsFillGrid3X3GapFill
            className={`${
              table ? "text-gray-500" : "azul "
            } self-center cursor-pointer `}
            size={20}
            onClick={() => setTable(false)}
          />
          <AiOutlineInsertRowAbove
            className={`${
              !table ? "text-gray-500" : "azul "
            }  ml-2  self-center cursor-pointer `}
            size={25}
            onClick={() => setTable(true)}
          />
        </div>
      </div>
      <div className="flex justify-between flex-col h-full">
        {table ? (
          <div className="fadeIn">
            <MUIDataTable
              title={"Ofertas"}
              className="shadow-sm"
              data={data}
              columns={columns}
              options={options}
            />
          </div>
        ) : (
          <CardColumns>
            {items.map((item, i) => (
              <OfertCard item={item} key={i + 1} />
            ))}
          </CardColumns>
        )}
        {!table && (
          <div className="flex  justify-end mt-10 ">
            <p className=" self-center mr-4">
              Pagina {active.toLocaleString()} de {screens.length}{" "}
            </p>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l transition duration-300 ease-in-out mr-4"
              onClick={() => active !== 1 && actions.onSelectScreen(active - 1)}
            >
              Atras{" "}
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l transition duration-300 ease-in-out"
              onClick={() =>
                !(screens.length <= active) &&
                actions.onSelectScreen(active + 1)
              }
            >
              Seguiente{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
