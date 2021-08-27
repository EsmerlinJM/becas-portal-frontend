export default function UserOptions({ user, history }) {
  return (
    <>
      <div className="login-header  flex justify-end items-center space-x-5">
        <div>
          <span
            className="relative inline-block cursor-pointer"
            onClick={() => history.push("/favorites")}
          >
            <svg
              className="w-5 h-6 text-gray-700 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="22.281"
              height="21.513"
              viewBox="0 0 22.281 21.513"
            >
              <path
                id="Path_2634"
                data-name="Path 2634"
                d="M11.359,2.018a1.085,1.085,0,0,1,1.966,0l2.5,5.394a1.081,1.081,0,0,0,.845.616l5.869.748a1.072,1.072,0,0,1,.611,1.841L18.8,14.75a1.069,1.069,0,0,0-.315.973L19.6,21.632a1.08,1.08,0,0,1-1.594,1.134L12.872,19.9a1.089,1.089,0,0,0-1.061,0L6.674,22.766A1.08,1.08,0,0,1,5.08,21.632L6.2,15.723a1.069,1.069,0,0,0-.315-.973L1.536,10.617a1.072,1.072,0,0,1,.611-1.841l5.869-.748a1.081,1.081,0,0,0,.845-.616Z"
                transform="translate(-1.201 -1.393)"
                fill="#aaa"
              />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-semibold leading-none  transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              5
            </span>
          </span>
        </div>
        <div className="dropdown group inline-block">
          <button className="outline-none text-sm py-2 px-4 rounded inline-flex items-center">
            <img
              className="inline object-cover w-10 h-10 mr-2 rounded-full"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFGVNDGIe-ZVA/profile-displayphoto-shrink_200_200/0/1624405199873?e=1634169600&v=beta&t=8JZ4rhTsOljyUGiD_W3VDEdOAAYhDJtrb5w4BthcxZQ"
              alt=""
            />
            <span className="mr-1">{user.name}</span>
            <svg
              className="fill-current mt-1 h-2 w-4"
              //   xmlns="http://www.w3.org/2000/svg"
              width={13}
              height={10}
              viewBox="0 0 13 10"
            >
              <path
                id="Polygon_5"
                data-name="Polygon 5"
                d="M5.662,1.29a1,1,0,0,1,1.677,0L12,8.455A1,1,0,0,1,11.157,10H1.843A1,1,0,0,1,1,8.455Z"
                transform="translate(13 10) rotate(180)"
                fill="#00a2ff"
              />
            </svg>
          </button>
          <ul className="fadeIn dropdown-menu group-hover:block hidden absolute text-xs text-black pt-1">
            <li>
              <span className="flex  bg-white hover:bg-gray-200 py-3 px-5 block whitespace-no-wrap cursor-pointer border-b border-blue-100">
                {" "}
                <img className="w-5 mr-3" src="img/Forma 2@2x.png" alt="" />
                Mi perfil
              </span>
            </li>
            <li>
              <span className="flex bg-white hover:bg-gray-200 py-3 px-5 block whitespace-no-wrap cursor-pointer border-b border-blue-100">
                <img
                  className="w-5 mr-3"
                  src="img/google-forms@2x.png"
                  alt=""
                />
                Mis solicitudes
              </span>
            </li>
            <li className>
              <span className="flex bg-white hover:bg-gray-200 py-3 px-5 block whitespace-no-wrap cursor-pointer border-b border-blue-100">
                <img className="w-5 mr-3" src="img/Shape 1@2x.png" alt="" />
                Configuración
              </span>
            </li>
            <li className>
              <span className="flex text-gray-400 bg-white hover:bg-gray-200 py-3 px-5 block whitespace-no-wrap cursor-pointer">
                <img className="w-5 mr-3" src="img/Forma 1@2x.png" alt="" />
                Cerrar sesión
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
