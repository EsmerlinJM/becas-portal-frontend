import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import Header2Natigation from "../../shared/components/hocs/header2-natigation";
import useAction from "./use-action";
import Loading from "react-loader-spinner";
import MUIDataTable from "mui-datatables";
import OpenCallsBlock from "../../shared/components/UI/organisms/open-calls-block";
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
      <div className="container mx-auto">
        <OpenCallsBlock />
      </div>
      {status === "loading" && (
        <div className="flex justify-center  mt-20  h-screen">
          <Loading type="MutatingDots" color="red" />
        </div>
      )}
      {status !== "loading" && (
        <div className=" container mx-auto p-4 fadeIn">
          <div className="bg-white m-auto flex flex-col">
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