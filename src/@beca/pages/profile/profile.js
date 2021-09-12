import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import PP from "../../../img/pp.png";
import Header2Natigation from "../../shared/components/hocs/header2-natigation";
import FormPersonalData from "../../shared/components/UI/organisms/form-personal-data";
// import Loading from "react-loader-spinner";

const objNav = {
  name: "Perfil",
  parents: [{ name: "Inicio", path: "/" }],
};

export default function Profile() {
  const { data } = useSelector((state) => state.user.one);
  const history = useHistory();

  console.log(data);
  return (
    <>
      <Header2Natigation objNav={objNav}>
        <div className="w-5/6 py-3 m-auto grid grid-cols-1 gap-y-4">
          <div className="w-full bg-white grid md:grid-cols-2 grid-cols-1 text-xs p-5 shadow">
            {/* <div className="md:col-span-2 flex md:justify-end justify-center space-x-2 mb-7">
              <button className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800 transition-all">
                Editar datos del perfil
              </button>
            </div> */}
            <>
              <div className="rounded flex flex-col items-center space-y-7 md:mb-0  mb-7">
                <img
                  className="rounded-lg w-60 border-2 border-blue-700"
                  src={data.image_url || PP}
                  alt=""
                />
                <div className="space-x-1 flex">
                  {/* <button className="uppercase text-xs px-3 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800 transition-all">
                    Actualizar Foto de Perfil
                  </button>
                  <button className="uppercase text-xs px-4 py-3 rounded-3xl bg-red-600 text-white hover:bg-red-500 transition-all">
                    <img className="w-4" src={TRASH} alt="" />
                  </button> */}

                  {/* <button className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800 transition-all">
                    Cambiar contraseña
                  </button> */}
                </div>
              </div>
              <div className="grid lg:border-l lg:pl-20 border-blue-200">
                <p className="text-xl mb-5 text-blue-900 font-semibold uppercase">
                  Datos personales
                </p>
                <FormPersonalData user={data} />
              </div>
              <div className="md:col-span-2 mt-7 flex justify-center space-x-3">
                <button
                  onClick={() => history.push("/my-requests")}
                  className="outline-none uppercase text-xs px-6 py-3 rounded-3xl border border-blue-900 text-blue-900 hover:bg-gray-100 transition-all"
                >
                  Ir a mis solicitudes
                </button>
                {/* <button className="uppercase text-xs px-6 py-3 rounded-3xl border border-blue-900 text-blue-900 hover:bg-gray-100 transition-all">
                  Ir a mi beca
                </button> */}
                {/* <button className="uppercase text-xs px-6 py-3 rounded-3xl border border-blue-900 text-blue-900 hover:bg-gray-100 transition-all">
                  Ir a convocatorias
                </button> */}
              </div>
            </>
          </div>
        </div>
      </Header2Natigation>
    </>
  );
}
