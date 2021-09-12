import ButtonApply from "../../atoms/button-apply";

export default function OfferDetail({ item, message }) {
  const {
    id,
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
      schedule,
      academic_offer_pensum_url,
    },
    institucion: { name, contacto_telefono, direccion, web },
  } = item;
  const redirect = () => {
    if (web) window.location.href = web;
  };

  return (
    <div>
      <div className="oferta bg-white m-auto grid-col-1 grid lg:grid-cols-3">
        <div className="ofertaInfo md:flex md:flex-col px-7 py-14">
          <div className="titulo grid md:flex justify-center md:justify-start md:items-end pb-5">
            <div className="logo w-40">
              <img className="w-full" src={institution_image} alt="" />
            </div>
            <div className="texto text-xs pl-3">
              <h4 className="font-bold py-2">{academic_offer_name}</h4>
              <p className="text-gray-400 font-semibold">{institution_name}</p>
            </div>
          </div>
          <div className="sobreCarrera text-sm pb-6">
            <h5 className="font-semibold pb-2">Sobre la carrera</h5>
            <p className="text-justify">{detalles}</p>
          </div>
          <div className="verPensum flex lg:justify-start justify-center items-center">
            <a
              href={academic_offer_pensum_url}
              rel="noreferrer"
              target="_blank"
              className=" rounded-3xl py-3 px-5 bg-red-600 text-white font-semibold text-xs"
            >
              VER PENSUM
            </a>
          </div>
        </div>
        <div className="border-l border-r border-dashed detalles flex flex-col pl-14 px-7 py-14">
          <h5 className="font-semibold text-xs mb-3 pl-2">
            Detalles de esta carrera
          </h5>
          <table className="text-left text-sm leading-7">
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
                <td>{schedule?.modality}</td>
              </tr>
              <tr>
                <th className="text-gray-400 font-semibold">Sedes</th>
                <td>{campus_province}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="acercaDe px-14 py-14 flex flex-col text-sm">
          <h5 className="font-semibold text-xs mb-4">Acerca de {name}</h5>
          <p className="text-sm text-justify mb-5">
            Somos una comunidad universitaria plural e innovadora, que forma
            ciudadanos y profesionales éticos, emprendedores y competitivos a
            nivel internacional.
          </p>
          <div className="telefono  mb-3">
            <h6 className="text-gray-400 font-semibold">Teléfono</h6>
            <p>{contacto_telefono}</p>
          </div>
          <div className="direccion  mb-3">
            <h6 className="text-gray-400 font-semibold">Dirección</h6>
            <p>{direccion}</p>
          </div>
          <div className="paginaWeb  mb-3">
            <h6 className="text-gray-400 font-semibold">Web</h6>
            <a
              className="text-blue-600 underline cursor-pointer"
              href={web}
              target="_blank"
              rel="noreferrer"
              onClick={redirect}
            >
              {web}
            </a>
          </div>

          <div className="aplicar flex justify-center pt-4">
            {message ? (
              <p className="font-bold">{message}</p>
            ) : (
              <ButtonApply offerId={id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
