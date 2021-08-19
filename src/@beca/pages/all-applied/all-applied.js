import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import Header2Natigation from "../../shared/components/hocs/header2-natigation";
import useAction from "./use-action";
import Loading from "react-loader-spinner";
import MUIDataTable from "mui-datatables";

const options = {
  filter: true,
  filterType: "dropdown",
  responsive: "vertical",
  tableBodyHeight: "650px",
  selectableRows: false,
};

const columns = [
  "Nombre",
  "Apellido",
  "Institución",
  "Programa",
  "Nivel",
  "Locación",
  "Cobertura",
];

export default function AllApplied() {
  const { id } = useParams();
  const [{ data, status }] = useAction(id);
  const dataTable = data.map((it) => [
    it.becado_name,
    it.becado_lastname,
    it.institution.name,
    it.institution_offer.academic_offer_name,
    it.institution_offer.academic_offer_type,
    it.institution_offer.campus_country,
    it.coverage + "%",
  ]);

  return (
    <Header2Natigation>
      <Helmet>
        <title>Becados | Beca tu vida </title>
      </Helmet>
      {status === "loading" && (
        <div className="flex justify-center  mt-20  h-screen">
          <Loading type="MutatingDots" color="red" />
        </div>
      )}
      {status !== "loading" && (
        <div className=" container mx-auto p-4 fadeIn">
          <div className="bg-white m-auto flex flex-col">
            {/* <div className="input grid grid-cols-6 text-xs my-3 flex items-center">
              <div className="nombre">
                <h5 className="mb-2 font-semibold">Nombre</h5>
                <input
                  className="border rounded outline-none py-2"
                  type="text"
                  name
                  id
                />
              </div>
              <div className="apellido">
                <h5 className="mb-2 font-semibold">Apellido</h5>
                <input
                  className="border rounded outline-none py-2"
                  type="text"
                  name
                  id
                />
              </div>
              <div className="institucion">
                <h5 className="mb-2 font-semibold">Institución</h5>
                <input
                  className="border rounded outline-none py-2"
                  type="text"
                  name
                  id
                />
              </div>
              <div className="programa">
                <h5 className="mb-2 font-semibold">Programa de estudio</h5>
                <input
                  className="border rounded outline-none py-2"
                  type="text"
                  name
                  id
                />
              </div>
              <div className="nivel">
                <h5 className="mb-2 font-semibold">Nivel</h5>
                <input
                  className="border rounded outline-none py-2"
                  type="text"
                  name
                  id
                />
              </div>
              <div className="buscar">
                <input
                  className="w-10 mt-6"
                  type="image"
                  src="img/Component 28 – 5.svg"
                  alt=""
                />
              </div>
            </div> */}
            <div className="tabla">
              <MUIDataTable
                title={"Becados"}
                // className="shadow-sm"
                data={dataTable}
                columns={columns}
                options={options}
              />
            </div>
          </div>
        </div>
      )}{" "}
    </Header2Natigation>
  );
}
