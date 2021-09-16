import { useParams } from 'react-router'
import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { statuColors } from '../../../shared/utils/status-request'
import { removeAccents } from '../../../shared/utils/remove-accents'

import Header2Natigation from '../../../shared/components/hocs/header2-natigation'
import CardRequest from '../../../shared/components/UI/molecules/request-card'
import Loading from 'react-loader-spinner'
import TemplateTab from '../../../shared/components/UI/molecules/tab'
import RequestEvaluation from '../../../shared/components/UI/molecules/request-evaluation'
import RequestResult from '../../../shared/components/UI/molecules/request-result'
import FormPersonalData from '../../../shared/components/UI/organisms/form-personal-data'
import FormEducationList from '../../../shared/components/UI/organisms/form-education-list'
import WorkExperienceList from '../../../shared/components/UI/organisms/form-work-experience-list'
import FormFieldAnswer from '../../../shared/components/UI/organisms/form-field-answer'
import FormSocioEconomico from '../../../shared/components/UI/organisms/form-socio-economico'
import ModalConfirm from './modal-confirm'

import useAction from './use-action'

const objNav = {
  name: 'Solicitud',
  path: '',
  parents: [
    { name: 'Inicio', path: '/' },
    { name: 'Mis solicitudes', path: '/my-requests' },
  ],
}

export default function RequestDetail() {
  const { id } = useParams()
  const [{ state, status }, actions] = useAction(id)
  const exist = statuColors[removeAccents(state.request.status || '')]
  const allExist = state.request.status && !exist
  const resultHeader = 'Resultados'
  const resultBody = <RequestResult status={state.request.status} key={0} />

  const [min, setMin] = useState({
    header: [],
    bodies: [],
    loading: false,
  })

  const headers = [
    'Datos personales',
    'Datos socioeconómicos',
    'Formación académica',
    'Experiencia laboral',
    'Requisitos',
  ]
  const bodies = [
    <div className="p-4 ">
      <FormPersonalData user={state.user} key={1} />
    </div>,
    <FormSocioEconomico user={state.user} key={2} />,
    <FormEducationList
      forms={state.formsEducation}
      onChange={actions.dispatch2}
      save={() => actions.save('formsEducation')}
      onDelete={actions.onDelete}
      loading={state.loading}
      onPlus={() =>
        actions.dispatch2({
          type: 'ON_SET_FORM',
          payload: {},
          key: 'formsEducation',
        })
      }
      key={3}
    />,
    <WorkExperienceList
      key={4}
      forms={state.formsWorkExperience}
      onChange={actions.dispatch2}
      onDelete={actions.onDelete}
      save={() => actions.save('formsWorkExperience')}
      onPlus={() =>
        actions.dispatch2({
          type: 'ON_SET_FORM',
          payload: {},
          key: 'formsWorkExperience',
        })
      }
    />,
    <FormFieldAnswer
      onChange={actions.dispatch2}
      forms={state.formsInstitution}
      save={actions.save}
      key={5}
    />,
  ]

  useEffect(() => {
    if (!allExist && state.request?.status !== 'Solicitud Iniciada') {
      const body = [resultBody, ...bodies].map((it, i) => (
        <div key={i} className={i ? 'pointer-events-none	opacity-40' : ''}>
          {it}
        </div>
      ))

      return setMin(() => ({
        header: [resultHeader, ...headers],
        bodies: body,
      }))
    }

    if (allExist && state.request?.status === 'Solicitud Iniciada') {
      setMin(() => ({
        header: headers,
        bodies: bodies,
      }))
    }
  }, [state, status])

  return (
    <>
      <Helmet>
        <title>Evaluación Solicitud - Beca tu Futuro </title>
      </Helmet>
      <div className="fadeIn">
        <Header2Natigation objNav={objNav}>
          {status === 'completed' ? (
            <div className="grid grid-cols-12 justify-between gap-4 my-4 w-4/5 m-auto">
              <div className="container col-span-12  ">
                <CardRequest item={state.request} onClick={() => {}} />
              </div>
              <div
                className={`${
                  !allExist ? 'xl:col-span-10' : 'xl:col-span-12 '
                } col-span-12`}
              >
                <TemplateTab headersTab={min.header}>{min.bodies}</TemplateTab>
                {allExist && state.send && (
                  <div className="flex justify-end bg-white shadow p-4 fadeIn">
                    <button
                      onClick={() =>
                        actions.dispatch2({
                          type: 'ON_CHANGE_INIT',
                          payload: { ...state, openModalConfirm: true },
                        })
                      }
                      className=" uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
                    >
                      {' '}
                      Enviar solicitud
                    </button>
                  </div>
                )}
              </div>
              {!allExist && (
                <div className="col-span-12 h-full xl:col-span-2 shadow fadeIn">
                  <RequestEvaluation
                    evaluations={state.request?.evaluacion || []}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <Loading
                type="MutatingDots"
                color="#ee2a24"
                secondaryColor="#003876"
              />
            </div>
          )}
          <ModalConfirm
            isOpen={state.openModalConfirm}
            onClose={(exit) =>
              actions.dispatch2({
                type: 'ON_CHANGE_INIT',
                payload: { ...state, openModalConfirm: exit },
              })
            }
            action={actions.onAction}
          />
        </Header2Natigation>
      </div>
    </>
  )
}
