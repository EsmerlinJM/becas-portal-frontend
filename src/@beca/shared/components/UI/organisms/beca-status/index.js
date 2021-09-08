export default function BecaStatus() {
  return (
    <div>
      <div className="w-5/6 py-3 m-auto grid grid-cols-1 gap-y-4">
        <span className="card3 w-full bg-white grid md:grid-cols-6 grid-cols-1 p-4 border-r-8 border-green-500 shadow cursor-pointer">
          <div className="flex justify-center items-center md:border-r border-gray-300 border-opacity-40 mb-4 md:m-0">
            <p className="md:w-24 w-full md:text-left text-center">
              Licenciatura en Cine y Comunicación Audiovisual
            </p>
          </div>
          <div className="pl-8 grid grid-rows-3 grid-flow-col gap-y-2 col-span-3 mb-3 md:m-0">
            <div className="flex items-center space-x-1">
              <img className="w-4" src="img/Mask Group 39@2x.png" alt="" />
              <p className="text-xs w-56">
                Instituto Tecnológico de Santo Domingo
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <img className="w-4" src="img/4@2x.png" alt="" />
              <p className="text-xs">MESCyT</p>
            </div>
            <div className="flex items-center space-x-1">
              <img className="w-4" src="img/Group 3654@2x.png" alt="" />
              <p className="text-xs">Nacional</p>
            </div>
            <div className="flex items-center space-x-1">
              <img className="w-4" src="img/volume@2x.png" alt="" />
              <p className="text-xs">Grado</p>
            </div>
            <div className="flex items-center space-x-1">
              <img className="w-4" src="img/Shape 4@2x.png" alt="" />
              <p className="text-xs">100% mat. Alojamiento</p>
            </div>
            <div className="flex items-center space-x-1">
              <img className="w-4" src="img/Shape 1@2x.png" alt="" />
              <p className="text-xs">Becas Nacionales 2020</p>
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center md:items-end space-y-2">
            <div className="flex flex-col md:items-end items-center">
              <p className="text-xs text-gray-500">Fecha de envío</p>
              <p className="text-xs">10/12/2021</p>
            </div>
            <div className="flex flex-col md:items-end items-center">
              <p className="text-xs text-gray-500">Estatus</p>
              <p className="text-xs text-right">Aprobada</p>
            </div>
          </div>
        </span>
        <span className="w-full grid grid-cols-12 gap-2">
          <div className="beca-aprobada w-full col-span-10 bg-white py-5 px-10 space-y-4 text-justify">
            <div className="titulo flex items-center space-x-3">
              <img className="w-12" src="img/Group 3565@2x.png" alt="" />
              <h3 className="text-2xl font-semibold">Beca aprobada</h3>
            </div>
            <div className="text-sm border-b-2">
              <p className="font-semibold pb-3">¡Felicidades!</p>
              <p className="pb-3">
                Nos honra comunicarle que su solicitud ha sido seleccionada para
                la concesión de beca para el programa Licenciatura en Educación
                en Universidad Autónoma de Santo Domingo.
              </p>
              <p className="pb-6">
                Le agradecemos el interés que ha mostrado en la Convocatoria
                Becas Nacionales 2020 y le deseamos toda clase de éxitos en su
                futuro profesional.
              </p>
              <p className="pb-3">Reciba un atento saludo,</p>
              <p className="pb-5">
                Ministerio de Educación Superior, Ciencia y Tecnología
              </p>
            </div>
            <div className="text-sm">
              <p className="font-semibold pb-3">
                Condiciones para mantener la beca
              </p>
              <p className="pb-3">
                El régimen de la beca es de dedicación exclusiva, por lo que es
                incompatible con cualquier otro tipo de beca o remuneración
                económica procedente de cualquier institución o empresa
                española, excepto en los casos de las prácticas obligatorias
                contempladas en los programas académicos que podrán ser
                remuneradas con conocimiento expreso y autorización de la
                Fundación.
              </p>
              <p className="pb-3">
                La Fundación Carolina confirmará regularmente, en colaboración
                con las instituciones académicas, la adecuada participación y
                progreso de las personas becadas, a fin de asegurar el nivel de
                éxito esperado.
              </p>
              <p className>
                Las personas que finalmente resulten adjudicatarias de las becas
                se comprometen de forma irrenunciable a que volverán a su país o
                a cualquier otro de la Comunidad Iberoamericana de Naciones
                excepto España, una vez haya finalizado la beca. El
                incumplimiento de estos requisitos y de aquellos otros que se
                establecen en la carta de compromiso que la persona becada
                deberá firmar para la aceptación de la beca, así como la
                comprobación de la inexactitud de los datos aportados por la
                misma en el proceso de selección.
              </p>
            </div>
          </div>
          <div className="evaluacion w-full col-span-2">
            <header className="p-2 text-sm text-white font-semibold bg-green-500 rounded-t-sm flex justify-between">
              <p>Evaluación</p>
              <p>90/100</p>
            </header>
            <div className="resultados bg-white px-2 rounded-b-sm">
              <div className="pt-5 pb-2 mb-2 font-semibold border-b flex justify-between text-xs">
                <p>Estado del Expediente</p>
                <p>3/10</p>
              </div>
              <div className="grid grid-cols-1 gap-y-3 mb-4">
                <div className="text-xs flex justify-between">
                  <p className="flex items-center justify-between w-36">
                    Requisitos del expediente
                    <img
                      className="pt-0.5 w-2"
                      src="img/Polygon 15.svg"
                      alt=""
                    />
                  </p>
                  <p className="border rounded text-right px-0.5">2/2</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <p className="bg-gray-200 rounded-sm py-0.5">0</p>
                  <p className="bg-gray-400 text-white rounded-sm py-0.5">1</p>
                  <p className="bg-gray-200 rounded-sm py-0.5">2</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-3 mb-4">
                <div className="text-xs flex justify-between">
                  <p className="flex items-center justify-between">
                    Documentación requerida
                    <img
                      className="pt-0.5 w-2"
                      src="img/Polygon 15.svg"
                      alt=""
                    />
                  </p>
                  <p className="border rounded text-right px-0.5">2/2</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <p className="bg-gray-200 rounded-sm py-0.5">0</p>
                  <p className="bg-gray-400 text-white rounded-sm py-0.5">1</p>
                  <p className="bg-gray-200 rounded-sm py-0.5">2</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-3">
                <div className="text-xs flex justify-between">
                  <p className="flex items-center justify-between w-36">
                    Ha tenido beca antes
                    <img
                      className="pt-0.5 w-2"
                      src="img/Polygon 15.svg"
                      alt=""
                    />
                  </p>
                  <p className="border rounded text-right px-0.5">2/2</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <p className="bg-gray-200 rounded-sm py-0.5">0</p>
                  <p className="bg-gray-400 text-white rounded-sm py-0.5">1</p>
                  <p className="bg-gray-200 rounded-sm py-0.5">2</p>
                </div>
              </div>
              <div className="pt-5 pb-2 mb-2 font-semibold border-b flex justify-between text-xs">
                <p>Expediente académico</p>
                <p>60/70</p>
              </div>
              <div className="grid grid-cols-1 gap-y-3 mb-4">
                <div className="text-xs flex justify-between">
                  <p className="flex items-center justify-between w-36">
                    Índice académico
                    <img
                      className="pt-0.5 w-2"
                      src="img/Polygon 15.svg"
                      alt=""
                    />
                  </p>
                  <p className="border rounded text-right px-0.5">60/60</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <p className="bg-gray-200 rounded-sm py-0.5">0</p>
                  <p className="bg-gray-200 rounded-sm py-0.5">30</p>
                  <p className="bg-gray-400 text-white rounded-sm py-0.5">60</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-3">
                <div className="text-xs flex justify-between">
                  <p className="flex items-center justify-between w-36">
                    Liderazgo comunitario
                    <img
                      className="pt-0.5 w-2"
                      src="img/Polygon 15.svg"
                      alt=""
                    />
                  </p>
                  <p className="border rounded text-right px-0.5">5/10</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <p className="bg-gray-200 rounded-sm py-0.5">0</p>
                  <p className="bg-gray-400 text-white rounded-sm py-0.5">5</p>
                  <p className="bg-gray-200 rounded-sm py-0.5">10</p>
                </div>
              </div>
              <div className="pt-5 pb-2 mb-2 font-semibold border-b flex justify-between text-xs">
                <p>Carta de motivación</p>
                <p>20/20</p>
              </div>
              <div className="grid grid-cols-1 gap-y-3 mb-4">
                <div className="text-xs flex justify-between">
                  <p className="flex items-center justify-between w-36">
                    Requisitos de redacción
                    <img
                      className="pt-0.5 w-2"
                      src="img/Polygon 15.svg"
                      alt=""
                    />
                  </p>
                  <p className="border rounded text-right px-0.5">5/5</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <p className="bg-gray-200 rounded-sm py-0.5">0</p>
                  <p className="bg-gray-200 rounded-sm py-0.5">2.5</p>
                  <p className="bg-gray-400 text-white rounded-sm py-0.5">5</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-3 mb-4">
                <div className="text-xs flex justify-between">
                  <p className="flex items-center justify-between w-36">
                    Claridad de los motivos
                    <img
                      className="pt-0.5 w-2"
                      src="img/Polygon 15.svg"
                      alt=""
                    />
                  </p>
                  <p className="border rounded text-right px-0.5">5/5</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <p className="bg-gray-200 rounded-sm py-0.5">0</p>
                  <p className="bg-gray-200 rounded-sm py-0.5">2.5</p>
                  <p className="bg-gray-400 text-white rounded-sm py-0.5">5</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-3 mb-4">
                <div className="text-xs flex justify-between">
                  <p className="flex items-center justify-between w-36">
                    Razones de ser candidato
                    <img
                      className="pt-0.5 w-2"
                      src="img/Polygon 15.svg"
                      alt=""
                    />
                  </p>
                  <p className="border rounded text-right px-0.5">5/5</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <p className="bg-gray-200 rounded-sm py-0.5">0</p>
                  <p className="bg-gray-200 rounded-sm py-0.5">2.5</p>
                  <p className="bg-gray-400 text-white rounded-sm py-0.5">5</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-3">
                <div className="text-xs flex justify-between">
                  <p className="flex items-center justify-between">
                    Compromiso al terminar...
                    <img
                      className="pt-0.5 w-2"
                      src="img/Polygon 15.svg"
                      alt=""
                    />
                  </p>
                  <p className="border rounded text-right px-0.5">5/5</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <p className="bg-gray-200 rounded-sm py-0.5">0</p>
                  <p className="bg-gray-200 rounded-sm py-0.5">2.5</p>
                  <p className="bg-gray-400 text-white rounded-sm py-0.5">5</p>
                </div>
              </div>
              <div className="pt-5 pb-2 mb-2 font-semibold border-b flex justify-between text-xs">
                <p className="w-40">Excelencia en pruebas nacionales</p>
                <p>1/1</p>
              </div>
              <div className="grid grid-cols-1 gap-y-3">
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <p className="bg-gray-200 rounded-sm py-0.5">0</p>
                  <p className="bg-gray-400 text-white rounded-sm py-0.5">1</p>
                </div>
              </div>
              <div className="pt-5 pb-2 font-semibold flex flex-col space-y-2 text-xs">
                <p>Comentario</p>
                <span className="border h-full text-justify text-gray-500 rounded p-1">
                  No hay comentario...
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
