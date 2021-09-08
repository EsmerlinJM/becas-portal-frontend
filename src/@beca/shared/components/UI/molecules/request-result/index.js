import { imgStatus } from "../../../../utils/status-request";
export default function RequestResult({ status }) {
  return (
    <div className="beca-aprobada w-full col-span-10 bg-white py-5 px-10 space-y-4 text-justify">
      <div className="titulo flex items-center space-x-3">
        <img className="w-12" src={imgStatus[status]} alt="" />
        <h3 className="text-2xl font-semibold">{status}</h3>
      </div>
      <div className="text-sm border-b-2">
        <p className="font-semibold pb-3">¡Felicidades!</p>
        <p className="pb-3">
          Nos honra comunicarle que su solicitud ha sido seleccionada para la
          concesión de beca para el programa Licenciatura en Educación en
          Universidad Autónoma de Santo Domingo.
        </p>
        <p className="pb-6">
          Le agradecemos el interés que ha mostrado en la Convocatoria Becas
          Nacionales 2020 y le deseamos toda clase de éxitos en su futuro
          profesional.
        </p>
        <p className="pb-3">Reciba un atento saludo,</p>
        <p className="pb-5">
          Ministerio de Educación Superior, Ciencia y Tecnología
        </p>
      </div>
      <div className="text-sm">
        <p className="font-semibold pb-3">Condiciones para mantener la beca</p>
        <p className="pb-3">
          El régimen de la beca es de dedicación exclusiva, por lo que es
          incompatible con cualquier otro tipo de beca o remuneración económica
          procedente de cualquier institución o empresa española, excepto en los
          casos de las prácticas obligatorias contempladas en los programas
          académicos que podrán ser remuneradas con conocimiento expreso y
          autorización de la Fundación.
        </p>
        <p className="pb-3">
          La Fundación Carolina confirmará regularmente, en colaboración con las
          instituciones académicas, la adecuada participación y progreso de las
          personas becadas, a fin de asegurar el nivel de éxito esperado.
        </p>
        <p className>
          Las personas que finalmente resulten adjudicatarias de las becas se
          comprometen de forma irrenunciable a que volverán a su país o a
          cualquier otro de la Comunidad Iberoamericana de Naciones excepto
          España, una vez haya finalizado la beca. El incumplimiento de estos
          requisitos y de aquellos otros que se establecen en la carta de
          compromiso que la persona becada deberá firmar para la aceptación de
          la beca, así como la comprobación de la inexactitud de los datos
          aportados por la misma en el proceso de selección.
        </p>
      </div>
    </div>
  );
}
