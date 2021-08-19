export default function OfferDetail({ item }) {
  const {
    oferta: {
      detalles,
      institution_name,
      institution_image,
      academic_offer_name,
      development_area_name,
      language,
      academic_offer_type,
      campus_province,
      education_level_name,
    },
    institucion: { name, contacto_telefono, direccion, web },
    schedule: { modality },
  } = item;
  return (
    <div>
      <div className="oferta bg-white m-auto grid grid-cols-3 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        <div className="ofertaInfo flex flex-col px-7 py-14">
          <div className="titulo flex items-end pb-5">
            <div className="logo w-40">
              <img className="w-full" src={institution_image} alt="" />
            </div>
            <div className="texto text-xs pl-3">
              <h4 className="font-bold py-2">{academic_offer_name}</h4>
              <p className="text-gray-400 font-semibold">{institution_name}</p>
            </div>
          </div>
          <div className="sobreCarrera text-xs pb-6">
            <h5 className="font-semibold pb-2">Sobre la carrera</h5>
            <p className="text-justify">{detalles}</p>
          </div>
          <div className="verPensum flex items-center">
            <span className=" rounded-3xl py-3 px-5 bg-red-600 text-white font-semibold text-xs">
              VER PENSUM
            </span>
            {/* <input
              className="w-6 ml-4"
              type="image"
              src="img/Mark - favorito@2x.png"
              alt="a"
            />
            <input
              className="w-6 mx-1"
              type="image"
              src="img/Share link@2x.png"
              alt=""
            /> */}
          </div>
        </div>
        <div className="border-l border-r border-dashed detalles flex flex-col pl-14 px-7 py-14">
          <h5 className="font-semibold text-xs mb-3 pl-2">
            Detalles de esta carrera
          </h5>
          <table className="text-left text-xs leading-7">
            <tbody>
              <tr className="border-b border-gray-100">
                <th className="text-gray-400 font-semibold">Área</th>
                <td>{development_area_name}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-gray-400 font-semibold">Nivel</th>
                <td>{education_level_name}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-gray-400 font-semibold">Dirigida a</th>
                <td>{academic_offer_type}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-gray-400 font-semibold">Créditos</th>
                <td>178</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-gray-400 font-semibold">
                  Nivel de esfuerzo
                </th>
                <td>40 hrs/semanal</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-gray-400 font-semibold">Duración</th>
                <td>12 cuatrimestres</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-gray-400 font-semibold">Idioma</th>
                <td>{language}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-gray-400 font-semibold">Costo</th>
                <td>200,000</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="text-gray-400 font-semibold">Modalidad</th>
                <td>{modality}</td>
              </tr>
              <tr>
                <th className="text-gray-400 font-semibold">Sedes</th>
                <td>{campus_province}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="acercaDe px-14 py-14 flex flex-col">
          <h5 className="font-semibold text-xs mb-4">Acerca de {name}</h5>
          <p className="text-xs text-justify mb-5">
            Somos una comunidad universitaria plural e innovadora, que forma
            ciudadanos y profesionales éticos, emprendedores y competitivos a
            nivel internacional.
          </p>
          <div className="telefono text-xs mb-3">
            <h6 className="text-gray-400 font-semibold">Teléfono</h6>
            <p>{contacto_telefono}</p>
          </div>
          <div className="direccion text-xs mb-3">
            <h6 className="text-gray-400 font-semibold">Dirección</h6>
            <p>{direccion}</p>
          </div>
          <div className="paginaWeb text-xs mb-3">
            <h6 className="text-gray-400 font-semibold">Web</h6>
            <span className="text-blue-600 underline">{web}</span>
          </div>
          {/* <div className="redesSociales text-xs mb-4">
            <h6 className="text-gray-400 font-semibold mb-2">Redes Sociales</h6>
            <div className="enlaces flex space-x-3">
              <span className="w-7">
                <img src="img/Facebook@2x.png" alt="" />
              </span>
              <span className="w-7">
                <img src="img/Instagram@2x.png" alt="" />
              </span>
              <span className="w-7">
                <img src="img/twitter@2x.png" alt="" />
              </span>
              <span className="w-7">
                <img src="img/youtube@2x.png" alt="" />
              </span>
            </div>
          </div> */}
          <div className="aplicar flex justify-center pt-4">
            <span className="rounded-3xl px-10 py-2 text-white azulbg font-semibold text-sm">
              APLICAR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}