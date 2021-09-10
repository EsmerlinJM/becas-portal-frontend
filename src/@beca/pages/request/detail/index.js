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
  const [{ state, status }, actions] = useAction(id);

  const exist = statuColors[state.request.status];
  const headerTabs = [
    "Resultados",
    "Datos personales",
    "Formación académica",
    "Experiencia laboral",
    "Datos socioeconómicos",
  ];
  const arrTabs = [
    <RequestResult status={state.request.status} />,
    <FormPersonalData user={state.user} />,
    <FormEducationList
      forms={state.formsEducation}
      onChange={actions.dispatch2}
      save={() => actions.save("formsEducation")}
      onDelete={actions.onDelete}
      onPlus={() =>
        actions.dispatch2({
          type: "ON_SET_FORM",
          payload: {},
          key: "formsEducation",
        })
      }
    />,
    <WorkExperienceList
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
    />,
  ];
  !exist && arrTabs.splice(0, 1);
  !exist && headerTabs.splice(0, 1);
  !state.formsInstitution.length && headerTabs.splice(headerTabs.length - 1, 1);

  return (
    <>
      <Helmet>
        <title>Evaluación Solicitud - Beca tu Futuro </title>
      </Helmet>
      <div className="fadeIn">
        <Header2Natigation objNav={objNav}>
          {status === "completed" ? (
            <div className="container mx-auto my-4">
              <CardRequest
                item={state.request}
                onClick={(item) => console.log(item)}
              />
              <div className="mt-10 flex justify-between grid grid-cols-12 gap-4 ">
                <div className="col-span-10">
                  <TemplateTab headersTab={headerTabs}>
                    {arrTabs.map((tabItem, i) => (
                      <div key={i}> {tabItem}</div>
                    ))}
                  </TemplateTab>
                </div>
                <div className="col-span-2 shadow">
                  <RequestEvaluation
                    evaluations={state.request?.evaluacion || []}
                  />
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
