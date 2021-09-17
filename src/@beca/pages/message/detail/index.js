import Header2Natigation from '../../../shared/components/hocs/header2-natigation'
import ReactMarkdown from 'react-markdown'
import Back from '../../../../img/back-button@2x.png'
import Reply from '../../../../img/reply@2x.png'
import Redactar from '../../../../img/edit@2x.png'

import useActions from './use-actions'
import { useHistory, useParams } from 'react-router'

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
    <Header2Natigation objNav={objNav}>
      <div className="notificaciones w-5/6 pt-3 m-auto grid grid-cols-1 gap-y-4 mb-10">
        <span className="flex justify-end space-x-3">
          <button className="flex items-center space-x-1 bg-white text-xs outline-none xs:w-auto sm:w-auto md:w-auto w-full text-gray-500 font-semibold border border-red-600 py-2 px-4 rounded-3xl hover:bg-red-50 transition">
            <img className="w-4" src={Redactar} alt="redactar" />
            <p className="uppercase text-red-600">Redactar nuevo mensaje</p>
          </button>
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
            <div className="p-4 text-xs space-y-5">
              <input
                className="border border-blue-700 bg-blue-50 rounded w-1/2 outline-none p-3 placeholder-blue-400"
                type="text"
                placeholder="Asunto..."
              />
              <textarea
                className="border border-blue-700 bg-blue-50 rounded w-full outline-none resize-none p-3 placeholder-blue-400"
                cols={30}
                rows={10}
                placeholder="Redactar respuesta..."
                defaultValue={''}
              />
              <div className="mt-7 flex md:justify-end justify-center space-x-2">
                <button
                  onClick={() => actions.setRes(false)}
                  className="uppercase outline-none text-xs px-6 py-3 rounded-3xl bg-white border border-red-500 text-red-500 hover:text-white hover:bg-red-500"
                >
                  Descartar
                </button>
                <button className="uppercase outline-none text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800">
                  Enviar
                </button>
              </div>
            </div>
          </span>
        )}
      </div>
    </Header2Natigation>
  )
}
