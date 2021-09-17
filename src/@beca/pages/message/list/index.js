import Component from '../../../../img/Component 28 – 24@2x.png'
import Editor from '../../../../img/edit@2x.png'
import Poligon from '../../../../img/Polygon 72@2x.png'
import Trash from '../../../../img/trash@2x.png'
import OpenMail from '../../../../img/open-mail-2@2x.png'
import MessageCardList from '../../../shared/components/UI/organisms/message-card-list'
import Header2Natigation from '../../../shared/components/hocs/header2-natigation'
import Loading from 'react-loader-spinner'
import TabTemplate from '../../../shared/components/UI/molecules/tab'

import useAction from './use-action'

import { useSelector } from 'react-redux'

const objNav = {
  name: 'Mensajes',
  path: '/messages',
  parents: [{ name: 'Inicio', path: '/' }],
}

export default function Message() {
  const { data, status } = useSelector((state) => state.message.all)
  const [{ selecteds, messages, checked }, actions] = useAction(data, status)

  return (
    <Header2Natigation objNav={objNav}>
      <div className="notificaciones w-5/6 pt-3 m-auto grid grid-cols-1  my-4">
        <span className="flex justify-end flex-col xs:flex-col  sm:flex-col md:flex-row lg:flex-row xl:flex-row space-x-0 xs:space-x-0 sm:space-x-0 md:space-x-2 sm:space-y-2 xs:space-y-2 md:space-y-0 space-y-2">
          <button className="flex items-center space-x-1 bg-white text-xs outline-none xs:w-auto sm:w-auto  w-full  text-gray-500 font-semibold border border-red-600 py-2 px-4 rounded-3xl hover:bg-red-50 transition">
            <img className="w-4" src={Editor} alt="redactar" />
            <p className="uppercase text-red-600">Redactar nuevo mensaje</p>
          </button>
          <div className="flex items-center space-x-1 bg-white text-xs xs:w-auto sm:w-auto w-full text-gray-500 font-semibold border border-gray-400 py-2 px-4 rounded-3xl focus-within:bg-gray-100 transition">
            <img className="w-4" src={Component} alt="search" />
            <input
              className="outline-none font-semibold w-5/6 focus:bg-gray-100 transition"
              type="text"
              onChange={({ target }) => actions.onSearch(target.value)}
              placeholder="Buscar mensaje"
            />
          </div>
        </span>
        <span className="w-full pt-2 ">
          <div className>
            {status === 'loading' ? (
              <Loading type="MutatingDots" color="red" secondaryColor="blue" />
            ) : (
              <TabTemplate headersTab={['TODOS', 'LEIDOS', 'NO LEIDOS']}>
                <>
                  <Opt actions={actions} checked={checked.all} />
                  <MessageCardList
                    items={messages}
                    selecteds={selecteds}
                    onSelect={actions.onSelect}
                    onClick={(item, index) => actions.redirect(item, index)}
                  />
                </>

                <>
                  <Opt actions={actions} status="read" checked={checked.read} />
                  <MessageCardList
                    status="read"
                    items={messages}
                    selecteds={selecteds}
                    onSelect={actions.onSelect}
                    onClick={(item, index) => actions.redirect(item, index)}
                  />
                </>

                <>
                  <Opt
                    actions={actions}
                    status="unread"
                    checked={checked.unread}
                  />
                  <MessageCardList
                    status="unread"
                    items={messages}
                    selecteds={selecteds}
                    onSelect={actions.onSelect}
                    onClick={(item, index) => actions.redirect(item, index)}
                  />
                </>
              </TabTemplate>
            )}
          </div>
        </span>
      </div>
    </Header2Natigation>
  )
}

function Opt({ actions, status, checked }) {
  return (
    <div className="flex items-center px-5 pb-2 space-x-5 border-b py-3">
      <label className="flex items-center justify-start space-x-0.5 w-6 h-5 border-r">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => actions.onSelect('', status)}
        />
        <img className="w-1 h-1" src={Poligon} alt="arrow" />
      </label>
      <div className="flex space-x-5">
        <button onClick={actions.deleteSelected}>
          <img
            className="w-4 items-center justify-center"
            src={Trash}
            alt="delete"
          />
        </button>
        <button onClick={actions.mark}>
          <img
            className="w-4 items-center justify-center"
            src={OpenMail}
            alt="read"
          />
        </button>
      </div>
    </div>
  )
}
