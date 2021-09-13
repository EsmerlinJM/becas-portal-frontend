import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { statuColors } from "../../../shared/utils/status-request";
import { removeAccents } from "../../../shared/utils/remove-accents";

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
import FormSocioEconomico from "../../../shared/components/UI/organisms/form-socio-economico";

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
  const [{ state, status }, actions] = useAction(id);

  const exist = statuColors[removeAccents(state.request.status || "")];
  const allExist = state.request.status && !exist;
  const headerTabs = [
    "Resultados",
    "Datos personales",
    "Datos socioeconómicos",
    "Formación académica",
    "Experiencia laboral",
    "Requisitos",
  ];

  const arrTabs = [
    <RequestResult status={state.request.status} key={1} />,
    <div className="p-4">
      <FormPersonalData user={state.user} key={2} />
    </div>,
    <FormSocioEconomico user={state.user} key={6} />,
    <FormEducationList
      forms={state.formsEducation}
      onChange={actions.dispatch2}
      save={() => actions.save("formsEducation")}
      onDelete={actions.onDelete}
      loading={state.loading}
      onPlus={() =>
        actions.dispatch2({
          type: "ON_SET_FORM",
          payload: {},
          key: "formsEducation",
        })
      }
      key={3}
    />,
    <WorkExperienceList
      key={4}
      forms={state.formsWorkExperience}
      onChange={actions.dispatch2}
      onDelete={actions.onDelete}
      save={() => actions.save("formsWorkExperience")}
      onPlus={() =>
        actions.dispatch2({
          type: "ON_SET_FORM",
          payload: {},
          key: "formsWorkExperience",
        })
      }
    />,
    <FormFieldAnswer
      onChange={actions.dispatch2}
      forms={state.formsInstitution}
      save={actions.save}
      key={5}
    />,
  ];

  allExist && arrTabs.splice(0, 1);
  allExist && headerTabs.splice(0, 1);

  status === "completed" &&
    !state.formsInstitution.length &&
    headerTabs.splice(headerTabs.length - 1, 1);
  status === "completed" &&
    !state.formsInstitution.length &&
    arrTabs.splice(arrTabs.length - 1, 1);

  return (
    <>
      <Helmet>
        <title>Evaluación Solicitud - Beca tu Futuro </title>
      </Helmet>
      <div className="fadeIn">
        <Header2Natigation objNav={objNav}>
          {status === "completed" ? (
            <div className="grid grid-cols-12 justify-between gap-4 my-4 w-4/5 m-auto">
              <div className="container col-span-12  ">
                <CardRequest
                  item={state.request}
                  onClick={(item) => console.log(item)}
                />
              </div>
              <div
                className={`${
                  !allExist ? "xl:col-span-10" : "xl:col-span-12 "
                } col-span-12`}
              >
                <TemplateTab headersTab={headerTabs}>{arrTabs}</TemplateTab>
              </div>
              {!allExist && (
                <div className="col-span-12 h-full xl:col-span-2 shadow ">
                  <RequestEvaluation
                    evaluations={state.request?.evaluacion || []}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <Loading type="MutatingDots" color="red" secondaryColor="blue" />
            </div>
          )}
        </Header2Natigation>
      </div>
    </>
  );
}
