import { FiFilter } from 'react-icons/fi'

import Header2Natigation from '../../../shared/components/hocs/header2-natigation'
import TabComponent from '../../../shared/components/UI/molecules/tab'
import GradeBlock from '../../../shared/components/UI/organisms/grade-block'
import RequestCard from '../../../shared/components/UI/molecules/request-card'
import LineChart from '../../../shared/components/UI/molecules/charts/line-one'
import OfferDetail from '../../../shared/components/UI/organisms/offert-detail'
import Select from '../../../shared/components/UI/atoms/select-tailwind'
import useAction from './use-action'

const objNav = {
  name: 'Mi beca',
  parents: [{ name: 'Inicio', path: '/' }],
}

export default function BecaDetail() {
  const [{ data, all }, { onSetOne }] = useAction()

  return (
    <Header2Natigation objNav={objNav}>
      <div className="container mx-auto my-4 px-4 lg:px-0">
        <div className="flex space-x-0 sm:space-x-3 flex-wrap lg:flex-nowrap mb-4 w-full sm:w-96 md:w-96  lg:w-96  ">
          <div className="text-md flex items-center space-x-2">
            <FiFilter />
            <p>Filtrar: </p>
          </div>
          <div className="w-full">
            <Select
              items={all.map((it) => ({ ...it.convocatoria, becaId: it.id }))}
              onSelected={(item) => onSetOne(item)}
            />
          </div>
        </div>

        <TabComponent headersTab={['Estatus', 'Detalle']}>
          <>
            <div className="px-4 py-10">
              <div className="flex justify-between flex-wrap  space-y-3 sm:space-y-0 sm:flex-col flex-col md:flex-row">
                <div className="w-full  md:w-1/6 ">
                  <GradeBlock items={data?.calificaciones || []} />
                </div>
                <div className="w-full sm:w-4/5 md:w-4/5 space-y-10">
                  <RequestCard
                    item={{
                      ...data?.solicitud,
                      oferta_academica: {
                        institucion: data?.institution || {},
                        oferta: data?.institution_offer || {},
                      },
                      convocatoria: {
                        name: data?.convocatoria?.name || '',
                        type: data?.convocatoria?.type?.name || '',
                      },
                    }}
                    onClick={() => {}}
                  />
                  <LineChart
                    items={data?.calificaciones || []}
                    name={data?.becado_name || ''}
                  />
                </div>
              </div>
            </div>
          </>
          <>
            <OfferDetail
              item={{
                ...(data?.convocatoria || {}),
                institucion: data?.institucion || {},
                oferta: data?.institution_offer || {},
              }}
            />
          </>
        </TabComponent>
      </div>
    </Header2Natigation>
  )
}
