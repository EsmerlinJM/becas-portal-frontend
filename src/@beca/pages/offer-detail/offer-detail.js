import Loading from 'react-loader-spinner'
import { Helmet } from 'react-helmet-async'
import OfferDetaill from '../../shared/components/UI/organisms/offer-detail-tabs'
import Header2Natigation from '../../shared/components/hocs/header2-natigation'
import OpenCallsBlock from '../../shared/components/UI/organisms/open-calls-block'

import useAction from './use-action'

const objNav = {
  name: 'Oferta ',
  path: '/FAQs',
  parents: [
    { name: 'Inicio', path: '/' },
    { name: 'Resultados', path: 'isGoBack' },
  ],
}

export default function OfferDetail() {
  const [{ data, status, message }] = useAction()
  return (
    <>
      <Helmet>
        <title>Aplica | Beca tu futuro </title>
      </Helmet>
      <Header2Natigation name="Oferta" objNav={objNav}>
        <div className="bg-gray-50">
          <div className="container mx-auto fadeIn">
            <div className="mt-5 mb-4">
              <OpenCallsBlock id={data.convocatoria_id} />
            </div>
            {status === 'loading' ? (
              <div className="flex justify-center items-center h-1/2">
                <Loading
                  type="MutatingDots"
                  color="#ee2a24"
                  secondaryColor="#003876"
                />
              </div>
            ) : (
              <div className="pb-4">
                <OfferDetaill item={data} message={message.message} />
              </div>
            )}
          </div>
        </div>
      </Header2Natigation>
    </>
  )
}
