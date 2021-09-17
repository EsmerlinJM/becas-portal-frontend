import Component from '../../../../img/Component 28 – 24@2x.png'
import Editor from '../../../../img/edit@2x.png'
import Poligon from '../../../../img/Polygon 72@2x.png'
import Trash from '../../../../img/trash@2x.png'
import OpenMail from '../../../../img/open-mail-2@2x.png'
import MessageCardList from '../../../shared/components/UI/organisms/message-card-list'
import Header2Natigation from '../../../shared/components/hocs/header2-natigation'
import Loading from 'react-loader-spinner'
import TabTemplate from '../../../shared/components/UI/molecules/tab'
import PropTypes from 'prop-types'

import useAction from './use-action'

import { useSelector } from 'react-redux'

export default function MessagePage() {
  return (
    <Header2Natigation>
      <div className="notificaciones w-5/6 pt-3 m-auto grid grid-cols-1  mb-4">
        <span className="flex justify-end space-x-3">
          <button className="flex items-center space-x-1 bg-white text-xs outline-none md:w-auto w-1/2 text-gray-500 font-semibold border border-red-600 py-2 px-4 rounded-3xl hover:bg-red-50 transition">
            <img className="w-4" src={Editor} alt="redactar" />
            <p className="uppercase text-red-600">Redactar nuevo mensaje</p>
          </button>
          <div className="flex items-center space-x-1 bg-white text-xs md:w-auto w-1/2 text-gray-500 font-semibold border border-gray-400 py-2 px-4 rounded-3xl focus-within:bg-gray-100 transition">
            <img className="w-4" src={Component} alt="search" />
            <input
              className="outline-none font-semibold w-5/6 focus:bg-gray-100 transition"
              type="text"
              placeholder="Buscar mensaje"
            />
          </div>
        </span>
        <TabTemplate headersTab={['TODOS', 'LEIDOS', 'NO LEIDOS']}>
          <Message key={1} />
          <Message status="read" key={2} />
          <Message status="unread" key={3} />
        </TabTemplate>
      </div>
    </Header2Natigation>
  )
}
export function Message({ status: msgStatus }) {
  const { data, status } = useSelector((state) => state.message.all)
  const [{ selecteds }, actions] = useAction(data)
  return (
    <span className="w-full bg-white shadow">
      <div className="flex items-center px-5 pb-2 space-x-5 border-b">
        <label className="flex items-center justify-start space-x-0.5 w-6 h-5 border-r">
          <input type="checkbox" onChange={() => actions.onSelect('', true)} />
          <img className="w-1 h-1" src={Poligon} alt="arrow" />
        </label>
        <div className="flex space-x-2.5 p-2">
          <button onClick={actions.deleteSelected}>
            <img
              className="w-4 items-center justify-center"
              src={Trash}
              alt="delete"
            />
          </button>
          <button>
            <img
              className="w-4 items-center justify-center"
              src={OpenMail}
              alt="read"
            />
          </button>
        </div>
      </div>
      <div>
        {status === 'loading' ? (
          <Loading type="MutatingDots" color="red" secondaryColor="blue" />
        ) : (
          <MessageCardList
            items={data}
            selecteds={selecteds}
            onSelect={actions.onSelect}
            status={msgStatus}
          />
        )}
      </div>
    </span>
  )
}

Message.prototype = {
  status: PropTypes.oneOf(['unread', 'read', '', null]),
}
