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
import FormEducationList from "../../../shared/components/UI/organisms/form-education-list";
import WorkExperienceList from "../../../shared/components/UI/organisms/form-work-experience-list";
import FormFieldAnswer from "../../../shared/components/UI/organisms/form-field-answer";

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
  const headerTabs = [
    "Resultados",
    "Datos personales",
    "Formación académica",
    "Experiencia laboral",
    "Datos socioeconómicos",
  ];
  const arrTabs = [
    <RequestResult status={data.status} />,
    <FormPersonalData user={user} />,
    <FormEducationList forms={user.formacion_academica || []} />,
    <WorkExperienceList forms={user.experiencia_laboral || []} />,
    <FormFieldAnswer forms={data.formulario_answers || []} />,
  ];

  !exist && arrTabs.splice(0, 1);
  !exist && headerTabs.splice(0, 1);
  !(data.formulario_answers || []).length &&
    headerTabs.splice(headerTabs.length - 1, 1);

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
                  <TemplateTab headersTab={headerTabs}>{arrTabs}</TemplateTab>
                </div>
                <div className="col-span-2 shadow">
                  <RequestEvaluation evaluations={data?.evaluacion} />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <Loading type="MutatingDots" color="red" />{" "}
            </div>
          )}
        </Header2Natigation>
      </div>
    </>
  );
}
