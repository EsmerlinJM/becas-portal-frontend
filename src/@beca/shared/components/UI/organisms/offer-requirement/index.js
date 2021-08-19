export default function OfferRequirement() {
  return (
    <div>
      <div className="requisitos text-xs bg-white  m-auto flex flex-col p-10">
        <div className="aplicacion flex flex-col mb-3">
          <h5 className="azul font-bold mb-3">Requisitos de la aplicación</h5>
          <ul className="font-semibold leading-5">
            <li>
              • Ser dominicano, con residencia permanente en la República
              Dominicana.
            </li>
            <li>
              • Graduado de estudios superiores con un índice académico mínimo
              de 80 en la escala de cero a 100 o de 3 en la escala de cero a
              cuatro.
            </li>
          </ul>
        </div>
        <div className="documentos mb-3 py-4 border-t border-b">
          <h5 className="azul font-bold mb-3">Documentos de la aplicación</h5>
          <ul className="leading-5">
            <li>
              Formulario de Solicitud de Becas Internacionales de Postgrado.
            </li>
            <li>
              Record de calificaciones legalizado por el Ministerio de Educación
              Superior, Ciencia y Tecnología (MESCYT).
            </li>
            <li>
              Copia de Título legalizada por el Ministerio de Educación
              Superior, Ciencia y Tecnología (MESCYT).
            </li>
            <li>Una (1) foto 2×2.</li>
            <li>
              Fotocopia de la Cédula de Identidad y Electoral (ambos lados).
            </li>
            <li>Fotocopia del Pasaporte (primera página y visas, si tiene).</li>
            <li>Currículum Vitae (máximo 2 páginas).</li>
            <li>Certificado de No Antecedentes Penales.</li>
            <li>Certificado médico (salud física y mental).</li>
            <li>
              Carta declaratoria de los propósitos que pretende alcanzar
              mediante los estudios a realizar.
            </li>
          </ul>
        </div>
        <div className="adicionales">
          <h5 className="azul font-bold mb-3">Requisitos adicionales</h5>
          <ul className="leading-5">
            <li>
              Los formularios deberán ser completados en la plataforma
              habilitada para estos fines.
            </li>
            <li>
              Deberá adjuntar al formulario los documentos requeridos de forma
              digital.
            </li>
            <li>
              Deberá contar con el expediente original, el cual deberá entregar
              de forma física dentro de las fechas establecidas, si así se le
              indica, para fines de validación, acompañado de un juego de
              copias.
            </li>
            <li>
              Los solicitantes deben acogerse a los requisitos de admisión de
              los Programas e Instituciones de Educación Superior a las cuales
              apliquen.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
