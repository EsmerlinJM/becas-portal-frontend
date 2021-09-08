import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { statuColors } from "../../../shared/utils/status-request";

import Header2Natigation from "../../../shared/components/hocs/header2-natigation";
import useAction from "./use-action";
import CardRequest from "../../../shared/components/UI/molecules/request-card";
import Loading from "react-loader-spinner";
import TemplateTab from "../../../shared/components/UI/molecules/tab";
import RequestEvaluation from "../../../shared/components/UI/molecules/request-evaluation";
import RequestResult from "../../../shared/components/UI/molecules/request-result";
import FormPersonalData from "../../../shared/components/UI/organisms/form-personal-data";
import FormEducation from "../../../shared/components/UI/organisms/form-education";
import WorkExperience from "../../../shared/components/UI/organisms/form-work-experience";

const objNav = {
  name: "Solicitud",
  path: "",
  parents: [
    { name: "Inicio", path: "/" },
    { name: "Mis solicitudes", path: "/my-requests" },
  ],
};

export default function RequestDetail() {
  const { id } = useParams();
  const [{ data, status, user }] = useAction(id);
  const exist = statuColors[data.status];
  const result = "Resultados";
  const headers = [
    "Datos personales",
    "Formación académica",
    "Experiencia laboral",
    "Datos socioeconómicos",
  ];
  const tabs = exist ? [result, ...headers] : headers;
  const arrTabs = [
    <RequestResult status={data.status} />,
    <FormPersonalData user={user} />,
    <FormEducation />,
    <WorkExperience />,
    <h3>Datos socioeconómicos</h3>,
  ];
  !exist && arrTabs.splice(0, 1);

  console.log(user);

  return (
    <>
      <Helmet>
        <title>Evaluación Solicitud - Beca tu Futuro </title>
      </Helmet>
      <div className="fadeIn">
        <Header2Natigation objNav={objNav}>
          {status === "completed" ? (
            <div className="container mx-auto my-4">
              <CardRequest item={data} onClick={(item) => console.log(item)} />
              <div className="mt-10 flex justify-between grid grid-cols-12 gap-4 ">
                <div className="col-span-10">
                  <TemplateTab headersTab={tabs}>{arrTabs}</TemplateTab>
                </div>
                <div className="col-span-2 shadow">
                  <RequestEvaluation evaluations={data?.evaluacion} />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              {" "}
              <Loading type="MutatingDots" color="red" />{" "}
            </div>
          )}
        </Header2Natigation>
      </div>
    </>
  );
}
