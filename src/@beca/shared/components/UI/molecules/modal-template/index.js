import { useState } from "react";
import IconRemove from "../../../../../../img/remove.svg";
export default function Modal({
  isOpen,
  onClose,
  width = "w-1/3",
  header = (
    <>
      <p className="text-md font-semibold">Modal Title</p>
    </>
  ),
  body = (
    <>
      <h3>Soy el body del modal</h3>
    </>
  ),
  footer = <> </>,
}) {
  const [animated, setAnimated] = useState("fadeIn");

  const handleClose = () => {
    setAnimated("animated fadeOut");
    setTimeout(() => {
      onClose(false);
      setAnimated("fadeIn");
    }, 500);
  };

  return (
    <>
      {isOpen ? (
        <>
          <div
            className={` ${animated} justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
          >
            <div
              className={`relative my-6 mx-auto w-11/12 sm:w-11/12 md:w-11/12 xl:${width} lg:${width}	 `}
            >
              <div className="flex justify-end">
                <div
                  onClick={handleClose}
                  className="absolute cursor-pointer z-50"
                  style={{ top: "-11px", right: "-12px" }}
                >
                  <img src={IconRemove} alt="" width="40px" />
                </div>
              </div>
              <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between px-4 py-3 border-b border-solid border-blueGray-200 rounded-t">
                  {header}
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div>
                  <div className="relative py-2 px-4 flex-auto">{body}</div>
                  <div className="flex items-center justify-end py-2  border-solid border-blueGray-200 rounded-b">
                    {footer}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
