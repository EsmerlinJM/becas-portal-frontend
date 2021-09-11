import { useSelector } from "react-redux";
import Header2Natigation from "../../shared/components/hocs/header2-natigation";
import CardNotification from "../../shared/components/UI/molecules/notification-card";

const objNav = {
  name: "Notificaciones",
  parents: [{ name: "Inicio", path: "/" }],
};

export default function Notifications() {
  const { data } = useSelector((state) => state.user.one);

  return (
    <Header2Natigation objNav={objNav}>
      <div className="notificaciones w-5/6 pt-3 m-auto grid grid-cols-1 gap-y-4 mb-4">
        <span className="flex justify-end">
          <button className="flex items-center space-x-1 bg-white text-xs text-gray-500 font-semibold border-2 py-2 px-4 rounded-3xl hover:bg-blue-50 hover:border-blue-300 transition">
            <img className="w-4" src="img/trash@2x.png" alt="" />
            <p>Eliminar notificaciones</p>
          </button>
        </span>
        {/*----------------------------------------------------------------------------------------------------------------------------*/}
        {data.notificaciones.map((it, i) => (
          <CardNotification item={it} key={i} />
        ))}
      </div>
    </Header2Natigation>
  );
}
