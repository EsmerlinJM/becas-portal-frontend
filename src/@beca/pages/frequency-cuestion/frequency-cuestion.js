import { Helmet } from "react-helmet-async";
import Header2Natigation from "../../shared/components/hocs/header2-natigation";
import Plus from "../../../img/plus-solid@2x.png";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
} from "@material-ui/core";
import { FaChevronDown, FaQq } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { Disclosure, Transition } from "@headlessui/react";
import ReactMarkdown from "react-markdown";

const objNav = {
  name: "Preguntas frecuentes",
  path: "/FAQs",
  parents: [{ name: "Inicio", path: "/" }],
};

export default function FrequencyCuestion() {
  return (
    <Header2Natigation name="Preguntas Frecuentes" objNav={objNav}>
      <Helmet>
        <title>Preguntas frecuentes | Beca tu vida</title>
      </Helmet>
      <div className=" w-4/5 m-auto flex flex-col my-4">
        <h4 className="p-2 border-b border-blue-300 text-xl font-bold azul mb-7">
          PREGUNTAS FRECUENTES
        </h4>
        <div className="grid grid-cols-1 gap-2 font-semibold ">
          {FAQs.map((faq) => (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full p-3  font-medium text-left text-gray-800 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 transition-all duration-200">
                    <span>{faq.title}</span>
                    <FaChevronDown
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-blue-400 transition-all duration-200`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-100 ease-in"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-900 text-justify bg-white">
                      <ReactMarkdown className="prose max-w-none text-sm">
                        {faq.body}
                      </ReactMarkdown>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </Header2Natigation>
  );
}

const FAQs = [
  {
    id: 1,
    title: "¿Qué es el Sistema Nacional de Becas y Crédito de Apoyo Educativo?",
    body:
      "Es un sistema cuyo objeto es el fomento al desarrollo profesional del talento humano que requieren los sectores productivos y sociales de la República Dominicana.",
  },
  {
    id: 2,
    title:
      "¿Cuál es la finalidad del Sistema Nacional de Becas y Crédito de Apoyo Educativo? ",
    body:
      "El Sistema Nacional de Becas y Crédito de Apoyo Educativo tiene por finalidad la gestión común de las convocatorias, los servicios y procedimientos de los diferentes programas de becas nacionales e internacionales que ofrecen los ministerios y las direcciones generales del Gobierno Central para contribuir de manera eficiente a la formación profesional en el nivel de la educación superior de los especialistas que demanda el desarrollo social y productivo de la República Dominicana.",
  },
  {
    id: 3,
    title:
      "¿Para qué fue creado este Sistema Nacional de Becas y Crédito de Apoyo Educativo?",
    body: `
  - Apoyar con ayuda económica y asesoramiento la preparación de los profesionales que necesita el país para impulsar el desarrollo
    económico y social.

  - Promover el acceso, permanencia y conclusión de estudios superiores a
    partir del ofrecimiento y otorgamiento de diferentes tipos de becas y
    crédito educativo a estudiantes y profesionales para apoyar su
    formación integral.
    
  - Promover el desarrollo profesional de los ciudadanos dominicanos a
    partir de ampliar el acceso al apoyo económico que contribuya a la
    mejor preparación de los profesionales y estudiantes dominicanos.
    
  - Realizar convocatorias de becas nacionales e internacionales en
    coherencia con las necesidades, demandas y perspectivas de desarrollo
    que presentan los sectores productivos y sociales de la República
    Dominicana.
    
  - Contribuir al bienestar social y a la igualdad de acceso al derecho a
    la educación superior de los ciudadanos y ciudadanas que deseen
    completar estudios superiores para su superación profesional.
    
  - Garantizar la igualdad de oportunidades para la formación profesional
    que requieren los ciudadanos y ciudadanas, teniendo especial atención
    hacia aquellos grupos en riesgo de vulnerabilidad, la perspectiva de
    género y aquellas personas que en virtud de sus méritos académicos
    tienen derecho al desarrollo de sus capacidades para aportar al
    crecimiento sostenible del país.
 `,
  },
  {
    id: 4,
    title:
      "¿Cuáles instituciones regularán este  Sistema Nacional de Becas y Crédito de Apoyo Educativo?",
    body: `Se crea una comisión ad hoc, de carácter interinstitucional, con la finalidad de acompañar, dar soporte y asistencia a la ejecución de las políticas del Sistema Nacional de Becas y Crédito de Apoyo Educativo, que estará conformada de la siguiente manera:
  - El Ministerio de Educación Superior, Ciencia y Tecnología, en su calidad de presidente del Consejo Nacional de Educación Superior, Ciencia y Tecnología, quien lo presidirá.
  
  - El Ministerio de Economía, Planificación y Desarrollo.
  - El Ministerio de Trabajo.
  - El Ministerio de Industria, Comercio y Mipymes.
  - El Ministerio de Relaciones Exteriores.
  - El Ministerio de la Juventud.
  - El director de la Oficina Gubernamental de Tecnología de la Información y la Comunicación
  -	(OGTIC).
  - El director ejecutivo del Gabinete de Innovación.
  - Tres (3) representantes de los sectores productivos del país ligados a la educación superior, a propuesta del ministro de Educación Superior, Ciencia y Tecnología.
    `,
  },
  {
    id: 5,
    title:
      "¿Cuáles son los criterios para ser seleccionado como beneficiario de este nuevo sistema?",
    body: `En este nuevo sistema de becas se priorizará la excelencia académica de los participantes y su nivel socioeconómico.
    `,
  },
  {
    id: 6,
    title: `¿Cuáles son las categorías de becas que existen?`,
    body: `Los tipos de becas de estudio y apoyos, según la capacidad económica, serán las siguientes:

  -	Becas completas: Consistirán en el pago total de la matrícula de los estudios y manutención del estudiante. 
    
  -	Becas de ayuda: Aquellas que podrán cubrir bien el costo total de la matrícula de los estudios o parte de ella, o bien, un apoyo económico para la manutención.
  
  -	Crédito de Apoyo Educativo: Este crédito se adjudicará mediante la modalidad de fideicomiso.
  `,
  },
  {
    id: 7,
    title: `¿Cuáles son las modalidades  de becas que existen?`,
    body: `El Sistema Nacional de Becas y de Crédito de Apoyo Educativo otorgará las siguientes modalidades de becas y apoyo económico:

  -	Becas Nacionales: para cursar estudios superiores en instituciones de educación superior de la República Dominicana.
  
  -	Becas Internacionales: para cursar estudios superiores en instituciones de educación superior reconocidas y acreditadas internacionalmente.
  
  -	Becas de Investigación: para estudiantes de doctorado y postdoctorado.
    
  -	Crédito de Apoyo Educativo gestionado entre el Ministerio de Educación Superior, Ciencia y Tecnología y el Banco de Reservas de la República Dominicana.
    `,
  },
  {
    id: 8,
    title: `¿Qué es el Portal Único de Becas “Beca tu futuro”?`,
    body: `
  Es una plataforma web que tiene como objetivo concentrar todas las oportunidades de becas en un solo portal que documente y gestione desde la publicación hasta la adjudicación de todas las convocatorias.`,
  },
  {
    id: 9,
    title: `¿Tiene algún costo la aplicación?
    `,
    body: `No, la aplicación es completamente gratuita, no tiene ningún costo para los ciudadanos dominicanos.
    `,
  },
  {
    id: 10,
    title: `¿Debo tener la aceptación de la universidad para poder aplicar?
    `,
    body: `Cada convocatoria de becas por universidad tiene requisitos específicos que debes revisar antes de tu proceso de aplicación. Todo lo podrás validar en el portal único de becas: [becas.gob.do](https://becas.gob.do/)`,
  },
  {
    id: 11,
    title: `¿Puedo recibir una beca si actualmente estoy estudiando?`,
    body: `
  Sí, puedes revisar las convocatorias de becas actuales que se adapten a esa condición en que te encuentras actualmente.
    `,
  },
  {
    id: 12,
    title: `Si un miembro de mi familia aplica, ¿puedo ser beneficiario de una beca?
    `,
    body: `
  Sí, no existe ninguna restricción en este sentido.
    `,
  },
  {
    id: 13,
    title: `
    ¿Debo ser mayor de edad para aplicar a una beca?
    `,
    body: `No es un requisito fundamental ser mayor de edad para obtener una beca.
    `,
  },
  {
    id: 14,
    title: `¿Dónde debo dar seguimiento a mi solicitud de beca?
    `,
    body: `Todo el seguimiento lo podrás realizar en tiempo real a través de la plataforma [becas.gob.do](https://becas.gob.do/), de igual manera podrás recibir actualizaciones a tu celular por SMS y a tu correo electrónico.
    `,
  },
  {
    id: 15,
    title: `¿Puedo aplicar a más de una beca?`,
    body: `Sí, puedes realizar hasta tres (3) solicitudes por convocatoria, pero solo serás elegible para una. Se permitirá que puedas escoger la oferta académica en caso de que resultes escogido para más de una. Si no eliges, el MESCYT te asignará la oferta académica para la que presentes el expediente con mejor calificación.
    `,
  },
  {
    id: 16,
    title: `Si no me eligen en alguna convocatoria, ¿puedo volver a aplicar?
    `,
    body: `Sí, que no resultes beneficiado con tu aplicación en una convocatoria, no te limita a que puedas participar en convocatorias posteriores. 
    `,
  },
  {
    id: 17,
    title: `Si aún no tengo el título de mi universidad, ¿puedo aplicar a una beca?`,
    body: `Sí, en los casos de las convocatorias dirigidas a postgrado, pero deberás aportar alguna documentación que valide que tu título está en trámite, el cual deberás mostrar y evidenciar al momento de ser otorgada la beca.
    `,
  },
];
