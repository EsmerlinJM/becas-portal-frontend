import OfertCard from "../../molecules/ofert-card";
import CardColumns from "../../../hocs/card-columns";
import useAction from "./use-action";
import Loading from "react-loader-spinner";
import MUIDataTable from "mui-datatables";
import Pagination from "../../molecules/pagination";

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

export default function OfertList({ justFavorites }) {
  const [table, setTable] = useState(false);
  const history = useHistory();

  const [
    { stateR, status, countResult, oferts, statusFav, favorites },
    actions,
  ] = useAction(justFavorites);

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "horizontal",
    tableBodyHeight: "650px",
    selectableRows: false,
    onRowClick: (rowData) => {
      history.push(`/query-result/detail/${rowData[0]}`);
    },
  };

  const data =
    table &&
    (justFavorites
      ? favorites.map((it) => it.convocatoria_detail)
      : oferts
    ).map((itm) => {
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
    status !== "loading" &&
    status === "completed" &&
    !stateR.loading &&
    !countResult
  ) {
    return (
      <div className="text-center text-xl mt-20">
        <h3>No hay resultados!</h3>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex justify-between mt-5 mb-3 mx-1 p-4">
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
          <div className="fadeIn p-4">
            <MUIDataTable
              title="Ofertas"
              className="shadow-sm"
              data={data}
              columns={columns}
              options={options}
            />
          </div>
        ) : (
          <div className="fadeIn p-4">
            <CardColumns>
              {stateR.items.map((item, i) => (
                <OfertCard
                  item={item}
                  key={i + 1}
                  saveFavorite={actions.saveFavorite}
                  isFavorite={stateR.objFavs[item.id]}
                  justFavorites={justFavorites}
                />
              ))}
            </CardColumns>
          </div>
        )}
        {!table && stateR.screens.length > 1 && (
          <div className=" mt-10 ">
            <Pagination
              active={stateR.active}
              screens={stateR.screens.length}
              onSelectScreen={actions.onSelectScreen}
            />
          </div>
        )}
      </div>
    </div>
  );
}
