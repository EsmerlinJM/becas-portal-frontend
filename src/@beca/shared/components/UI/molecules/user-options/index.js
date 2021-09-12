import ButtonPopover from "../../atoms/button-pop-over";
import UserAvatar from "../../atoms/user-avatar";
import ButtonBadge from "../../atoms/button-bagde";

import { AiTwotoneStar } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
// import { SiGooglescholar } from "react-icons/si";
import { RiNewspaperLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
// import { GrConfigure } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";

import {
  logoutUser,
  clearUser,
} from "../../../../../redux/slices/user/_actions";
import { useDispatch, useSelector } from "react-redux";

export default function UserOptions({ user, history }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites.data.length);
  const notifications = useSelector(
    (state) => state.user.one.data?.notificaciones?.length
  );
  const userOptions = [
    {
      id: 1,
      name: "Mi Perfil",
      href: () => history.push("/profile"),
      icon: FiUser,
    },
    // {
    //   id: 2,
    //   name: "Mi beca",
    //   href: () => history.push("/"),
    //   icon: SiGooglescholar,
    // },
    {
      id: 3,
      name: "Mis solicitudes",
      href: () => history.push("/my-requests"),
      icon: RiNewspaperLine,
    },
    {
      id: 5,
      name: "Cerrar sesión",
      href: async () => {
        dispatch(clearUser());
        dispatch(await logoutUser(history));
      },
      icon: AiOutlineLogout,
    },
  ];

  return (
    <>
      <div className=" flex justify-end items-center space-x-2">
        <div className="mt-1" onClick={() => history.push("/favorites")}>
          <ButtonBadge num={favorites}>
            <AiTwotoneStar size={21} color="" />
          </ButtonBadge>
        </div>

        <div className="mt-1">
          <ButtonBadge num={0}>
            <BiMessageSquareDetail size={21} color="" />
          </ButtonBadge>
        </div>

        <div className="mt-1" onClick={() => history.push("/notifications")}>
          <ButtonBadge num={notifications || 0}>
            <IoNotificationsSharp size={21} color="" />
          </ButtonBadge>
        </div>

        <ButtonPopover header={"Usuario"} items={userOptions} key={2}>
          <UserAvatar user={user} />
        </ButtonPopover>
      </div>
    </>
  )
}
