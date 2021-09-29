import Header2Natigation from '../../../shared/components/hocs/header2-natigation'
import ReactMarkdown from 'react-markdown'
import Back from '../../../../img/back-button@2x.png'
import Reply from '../../../../img/reply@2x.png'
import ComposeMsgButton from '../../../shared/components/UI/molecules/compose-msg-button'
import ComposeMsg from '../../../shared/components/UI/molecules/compose-msg'

import useActions from './use-actions'
import { useHistory, useParams } from 'react-router'
import { Helmet } from 'react-helmet-async'

const objNav = {
  name: 'Mensaje',
  parents: [
    { name: 'Inicio', path: '/' },
    { name: 'Mensajes', path: '/messages' },
  ],
}

export default function Detail() {
  const { messageId } = useParams()
  const history = useHistory()

  const [{ data, res }, actions] = useActions(messageId)

  return (
    <>
      <Helmet>
        <title>Mensaje | Beca tu futuro </title>
      </Helmet>
      <Header2Natigation objNav={objNav}>
        <div className="notificaciones w-5/6 pt-3 m-auto grid grid-cols-1 gap-y-4 mb-10">
          <span className="flex justify-end space-x-3">
            <ComposeMsgButton onAction={actions.createMessage} />
          </span>
          <span className="w-full bg-white pt-2 shadow">
            <div className="flex items-center px-5 pb-2 space-x-5 border-b">
              <div className="flex items-center justify-center border-r pr-2">
                <img
                  onClick={() => history.push('/messages')}
                  className="w-5 cursor-pointer"
                  src={Back}
                  alt="back"
                />
              </div>
              <div className="flex justify-end w-full space-x-2.5">
                <button onClick={() => actions.setRes((res2) => !res2)}>
                  <img
                    className="w-4 items-center justify-center"
                    src={Reply}
                    alt="reply"
                  />
                </button>
              </div>
            </div>
            <div className="py-4 px-5 flex justify-between flex-col sm:flex-row sm:items-center border-b">
              <div className="md:text-lg text-sm font-bold truncate">
                <p className="truncate">{data.subject}</p>
              </div>
              <div className="text-xs truncate">
                <p className="truncate"> {data.received}</p>
              </div>
            </div>
            <div className="py-4 px-5 border-b text-xs  text-justify">
              <ReactMarkdown>{data.message}</ReactMarkdown>
            </div>
          </span>
          {res && (
            <span className="w-full bg-white shadow fadeIn">
              <ComposeMsg
                onAction={(it) =>
                  actions.createMessage({ usuario: data.id, ...it })
                }
              />
            </span>
          )}
        </div>
      </Header2Natigation>
    </>
  )
}
