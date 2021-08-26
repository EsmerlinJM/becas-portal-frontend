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
  "Insitución",
  "Carrera",
  "Sede",
  "Nivel",
  "Área",
  "Idioma",
  "Modalidad",
];

export default function OfertList(id) {
  const [table, setTable] = useState(false);
  const history = useHistory();

  const [{ stateR, status, countResult, oferts, statusFav, color }, actions] =
    useAction(id);

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "vertical",
    tableBodyHeight: "650px",
    selectableRows: false,
    onRowClick: (rowData) => {
      history.push("/query-result/detail/" + rowData[0]);
    },
  };

  const data =
    table &&
    oferts.map((itm) => {
      const {
        id,
        oferta: {
          schedule: { modality },
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

  if (status === "loading" || stateR.loading)
    return (
      <div className="flex justify-center items-center h-1/2">
        <Loading type="MutatingDots" color="red" size={90} />
      </div>
    );

  if (
    (status !== "loading" &&
      status === "completed" &&
      !stateR.loading &&
      !countResult) ||
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
      <div
        className="flex justify-between flex-col h-full"
        disabled={statusFav === "loading"}
      >
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
            {stateR.items.map((item, i) => (
              <OfertCard
                item={item}
                key={i + 1}
                color={color}
                saveFavorite={actions.saveFavorite}
                isFavorite={stateR.objFavs[item.id]}
              />
            ))}
          </CardColumns>
        )}
        {!table && (
          <div className="flex  justify-end mt-10 ">
            <p className=" self-center mr-4">
              Página {stateR.active.toLocaleString()} de {stateR.screens.length}{" "}
            </p>
            <button
              className="outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out mr-2"
              onClick={() =>
                stateR.active !== 1 && actions.onSelectScreen(stateR.active - 1)
              }
            >
              Atras{" "}
            </button>
            <button
              className="outline-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
              onClick={() =>
                !(stateR.screens.length <= stateR.active) &&
                actions.onSelectScreen(stateR.active + 1)
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
