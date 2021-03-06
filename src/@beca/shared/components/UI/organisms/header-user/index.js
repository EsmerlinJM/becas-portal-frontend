import Logo from '../../../../../../img/Logo_BECATUFUTURO.svg'
import UserOptions, { UserOptionMovil } from '../../molecules/user-options'
import InputSearchHome from '../../atoms/input-search-home'

import { useHistory } from 'react-router'
import { useState, useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'

import useOutside from '../../../hooks/onclick-outside'

export default function HeaderUser({ user, isHome = false }) {
  const history = useHistory()
  const headerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [openInput, setOpenInput] = useState(false)

  useOutside({
    ref: headerRef,
    clickedOutside: () => setOpenInput(false),
  })

  return (
    <div className="relative" ref={headerRef}>
      <div className="w-full z-40 shadow fixed bg-white">
        <div className="px-2 sm:px-5 md:px-5 flex justify-between flex-nowrap">
          <div className="flex ">
            <img
              src={Logo}
              className="w-28 md:w-40 cursor-pointer "
              alt=""
              onClick={() => history.push('/')}
            />
            <div className="flex self-center mt-2 text-xs text-gray-400 font-bold">
              <span className="cursor-pointer m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 hidden">
                BLOG
              </span>
              <span
                onClick={() => history.push('/FAQs')}
                className="cursor-pointer m-3 transition delay-100 hover:text-blue-800 blancobg hover:border-blue-800 hidden md:inline-block"
              >
                PREGUNTAS FRECUENTES
              </span>
            </div>
            <div className="self-center ml-4 hidden xs:inline-block">
              <InputSearchHome
                isHeader
                heightInput="h-9"
                widthImg="w-9"
                placeholder="¿Qué quieres estudiar?"
              />
            </div>
          </div>
          <div className="self-center hidden md:inline-block">
            <UserOptions user={user} history={history} />
          </div>
          {openInput && (
            <div className="fadeIn self-center ">
              <InputSearchHome
                isHeader
                widthInput="w-auto"
                heightInput="h-4"
                widthImg="w-8"
                placeholder="¿Qué quieres estudiar?"
                mlImg_="-ml-6"
              />
            </div>
          )}
          {!openInput && (
            <div className="fadeIn md:hidden self-center flex justify-between w-16">
              <div>
                <BiSearchAlt size={24} onClick={() => setOpenInput(true)} />
              </div>
              <button onClick={() => setIsOpen(!isOpen)} className=" ml-2">
                <AiOutlineMenu size={24} />
              </button>
            </div>
          )}
        </div>
      </div>

      {!isHome && (
        <>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div className="-mt-6 md:mt-0 ">&nbsp;</div>
        </>
      )}

      {isHome && (
        <div className="block md:hidden ">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      )}

      <UserOptionMovil
        user={user}
        history={history}
        isOpen={isOpen}
        setExit={(exit) => setIsOpen(exit)}
      />
    </div>
  )
}
