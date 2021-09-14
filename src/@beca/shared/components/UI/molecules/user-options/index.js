import ButtonPopover from '../../atoms/button-pop-over'
import UserAvatar from '../../atoms/user-avatar'
import ButtonBadge from '../../atoms/button-bagde'
import Drawer from '@material-ui/core/Drawer/Drawer'
import Avatar from '../../atoms/avatar'

import { AiTwotoneStar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { RiNewspaperLine } from 'react-icons/ri'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoNotificationsSharp } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../../services/user'

export default function UserOptions({ user, history }) {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.user.favorites.data.length)
  const notifications = useSelector((state) =>
    state.notification.all.data?.filter((it) => !it.read),
  )

  const logout = async () => {
    await logOut(history, dispatch)
  }

  const userOptions = [
    {
      id: 1,
      name: 'Mi Perfil',
      href: () => history.push('/profile'),
      icon: FiUser,
    },
    {
      id: 3,
      name: 'Mis solicitudes',
      href: () => history.push('/my-requests'),
      icon: RiNewspaperLine,
    },
    {
      id: 5,
      name: 'Cerrar sesión',
      href: logout,
      icon: AiOutlineLogout,
    },
  ]

  return (
    <>
      <div className=" flex justify-end items-center space-x-2">
        <div className="mt-1" onClick={() => history.push('/favorites')}>
          <ButtonBadge num={favorites}>
            <AiTwotoneStar size={21} color="" />
          </ButtonBadge>
        </div>

        <div className="mt-1">
          <ButtonBadge num={0}>
            <BiMessageSquareDetail size={21} color="" />
          </ButtonBadge>
        </div>

        <div className="mt-1" onClick={() => history.push('/notifications')}>
          <ButtonBadge num={notifications.length || 0}>
            <IoNotificationsSharp size={21} color="" />
          </ButtonBadge>
        </div>

        <ButtonPopover header={'Usuario'} items={userOptions} key={2}>
          <UserAvatar user={user} />
        </ButtonPopover>
      </div>
    </>
  )
}

export const UserOptionMovil = ({ isOpen, setExit, history, user = {} }) => {
  const dispatch = useDispatch()
  const logout = async () => {
    await logOut(history, dispatch)
  }
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={() => {
        setExit(false)
      }}
    >
      <div className="w-64 ">
        <div className="p-4 azulbg flex items-center justify-between text-white">
          <div
            className="cursor-pointer"
            onClick={() => history.push('/profile')}
          >
            <Avatar img={user.image_url} name={user.name} />
          </div>
          <button className="cursor-pointer transform hover:scale-125 transition-all duration-100">
            <AiOutlineClose
              onClick={() => {
                setExit(false)
              }}
            />
          </button>
        </div>

        <div className="mx-4 my-2 text-xs text-gray-400 font-bold ">
          <div
            onClick={() => history.push('/favorites')}
            className="p-3 border-b-2 cursor-pointer"
          >
            FAVORITOS
          </div>
          <div
            onClick={() => history.push('/notifications')}
            className="p-3 border-b-2 cursor-pointer"
          >
            NOTIFICACIONES
          </div>
          <div
            onClick={() => history.push('/cuetion-frequency')}
            className="p-3 border-b-2 cursor-pointer"
          >
            PREGUNTAS FRECUENTES
          </div>
          <div
            onClick={() => history.push('/profile')}
            className="p-3 border-b-2 cursor-pointer"
          >
            MI PERFIL
          </div>
          <div
            onClick={() => history.push('/my-requests')}
            className="p-3 border-b-2 cursor-pointer"
          >
            MIS SOLICITUDES
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2 text-xs text-white text-center ">
          <span
            onClick={logout}
            className="cursor-pointer font-bold transition delay-100 px-4 py-2  hover:bg-red-600 azulbg  rounded-2xl bg-blue-700 w-full"
          >
            CERRAR SESIÓN
          </span>
        </div>
      </div>
    </Drawer>
  )
}
