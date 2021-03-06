import Header2Natigation from '../../shared/components/hocs/header2-natigation'
import ReactMarkdown from 'react-markdown'

import { Helmet } from 'react-helmet-async'
import { FaChevronDown } from 'react-icons/fa'
import { Disclosure, Transition } from '@headlessui/react'

const objNav = {
  name: 'Preguntas frecuentes',
  path: '/FAQs',
  parents: [{ name: 'Inicio', path: '/' }],
}

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
          {FAQs.map((faq, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full p-3  font-medium text-left text-gray-800 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 transition-all duration-200">
                    <span>{faq.title}</span>
                    <FaChevronDown
                      className={`${
                        open ? 'transform rotate-180' : ''
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
  )
}

const FAQs = [
  {
    id: 1,
    title: '??Qu?? es el Sistema Nacional de Becas y Cr??dito de Apoyo Educativo?',
    body: 'Es un sistema cuyo objeto es el fomento al desarrollo profesional del talento humano que requieren los sectores productivos y sociales de la Rep??blica Dominicana.',
  },
  {
    id: 2,
    title:
      '??Cu??l es la finalidad del Sistema Nacional de Becas y Cr??dito de Apoyo Educativo? ',
    body: 'El Sistema Nacional de Becas y Cr??dito de Apoyo Educativo tiene por finalidad la gesti??n com??n de las convocatorias, los servicios y procedimientos de los diferentes programas de becas nacionales e internacionales que ofrecen los ministerios y las direcciones generales del Gobierno Central para contribuir de manera eficiente a la formaci??n profesional en el nivel de la educaci??n superior de los especialistas que demanda el desarrollo social y productivo de la Rep??blica Dominicana.',
  },
  {
    id: 3,
    title:
      '??Para qu?? fue creado este Sistema Nacional de Becas y Cr??dito de Apoyo Educativo?',
    body: `
  - Apoyar con ayuda econ??mica y asesoramiento la preparaci??n de los profesionales que necesita el pa??s para impulsar el desarrollo
    econ??mico y social.

  - Promover el acceso, permanencia y conclusi??n de estudios superiores a
    partir del ofrecimiento y otorgamiento de diferentes tipos de becas y
    cr??dito educativo a estudiantes y profesionales para apoyar su
    formaci??n integral.
    
  - Promover el desarrollo profesional de los ciudadanos dominicanos a
    partir de ampliar el acceso al apoyo econ??mico que contribuya a la
    mejor preparaci??n de los profesionales y estudiantes dominicanos.
    
  - Realizar convocatorias de becas nacionales e internacionales en
    coherencia con las necesidades, demandas y perspectivas de desarrollo
    que presentan los sectores productivos y sociales de la Rep??blica
    Dominicana.
    
  - Contribuir al bienestar social y a la igualdad de acceso al derecho a
    la educaci??n superior de los ciudadanos y ciudadanas que deseen
    completar estudios superiores para su superaci??n profesional.
    
  - Garantizar la igualdad de oportunidades para la formaci??n profesional
    que requieren los ciudadanos y ciudadanas, teniendo especial atenci??n
    hacia aquellos grupos en riesgo de vulnerabilidad, la perspectiva de
    g??nero y aquellas personas que en virtud de sus m??ritos acad??micos
    tienen derecho al desarrollo de sus capacidades para aportar al
    crecimiento sostenible del pa??s.
 `,
  },
  {
    id: 4,
    title:
      '??Cu??les instituciones regular??n este  Sistema Nacional de Becas y Cr??dito de Apoyo Educativo?',
    body: `Se crea una comisi??n ad hoc, de car??cter interinstitucional, con la finalidad de acompa??ar, dar soporte y asistencia a la ejecuci??n de las pol??ticas del Sistema Nacional de Becas y Cr??dito de Apoyo Educativo, que estar?? conformada de la siguiente manera:
  - El Ministerio de Educaci??n Superior, Ciencia y Tecnolog??a, en su calidad de presidente del Consejo Nacional de Educaci??n Superior, Ciencia y Tecnolog??a, quien lo presidir??.
  
  - El Ministerio de Econom??a, Planificaci??n y Desarrollo.
  - El Ministerio de Trabajo.
  - El Ministerio de Industria, Comercio y Mipymes.
  - El Ministerio de Relaciones Exteriores.
  - El Ministerio de la Juventud.
  - El director de la Oficina Gubernamental de Tecnolog??a de la Informaci??n y la Comunicaci??n
  -	(OGTIC).
  - El director ejecutivo del Gabinete de Innovaci??n.
  - Tres (3) representantes de los sectores productivos del pa??s ligados a la educaci??n superior, a propuesta del ministro de Educaci??n Superior, Ciencia y Tecnolog??a.
    `,
  },
  {
    id: 5,
    title:
      '??Cu??les son los criterios para ser seleccionado como beneficiario de este nuevo sistema?',
    body: `En este nuevo sistema de becas se priorizar?? la excelencia acad??mica de los participantes y su nivel socioecon??mico.
    `,
  },
  {
    id: 6,
    title: `??Cu??les son las categor??as de becas que existen?`,
    body: `Los tipos de becas de estudio y apoyos, seg??n la capacidad econ??mica, ser??n las siguientes:

  -	Becas completas: Consistir??n en el pago total de la matr??cula de los estudios y manutenci??n del estudiante. 
    
  -	Becas de ayuda: Aquellas que podr??n cubrir bien el costo total de la matr??cula de los estudios o parte de ella, o bien, un apoyo econ??mico para la manutenci??n.
  
  -	Cr??dito de Apoyo Educativo: Este cr??dito se adjudicar?? mediante la modalidad de fideicomiso.
  `,
  },
  {
    id: 7,
    title: `??Cu??les son las modalidades  de becas que existen?`,
    body: `El Sistema Nacional de Becas y de Cr??dito de Apoyo Educativo otorgar?? las siguientes modalidades de becas y apoyo econ??mico:

  -	Becas Nacionales: para cursar estudios superiores en instituciones de educaci??n superior de la Rep??blica Dominicana.
  
  -	Becas Internacionales: para cursar estudios superiores en instituciones de educaci??n superior reconocidas y acreditadas internacionalmente.
  
  -	Becas de Investigaci??n: para estudiantes de doctorado y postdoctorado.
    
  -	Cr??dito de Apoyo Educativo gestionado entre el Ministerio de Educaci??n Superior, Ciencia y Tecnolog??a y el Banco de Reservas de la Rep??blica Dominicana.
    `,
  },
  {
    id: 8,
    title: `??Qu?? es el Portal ??nico de Becas ???Beca tu futuro????`,
    body: `
  Es una plataforma web que tiene como objetivo concentrar todas las oportunidades de becas en un solo portal que documente y gestione desde la publicaci??n hasta la adjudicaci??n de todas las convocatorias.`,
  },
  {
    id: 9,
    title: `??Tiene alg??n costo la aplicaci??n?
    `,
    body: `No, la aplicaci??n es completamente gratuita, no tiene ning??n costo para los ciudadanos dominicanos.
    `,
  },
  {
    id: 10,
    title: `??Debo tener la aceptaci??n de la universidad para poder aplicar?
    `,
    body: `Cada convocatoria de becas por universidad tiene requisitos espec??ficos que debes revisar antes de tu proceso de aplicaci??n. Todo lo podr??s validar en el portal ??nico de becas: [becas.gob.do](https://becas.gob.do/)`,
  },
  {
    id: 11,
    title: `??Puedo recibir una beca si actualmente estoy estudiando?`,
    body: `
  S??, puedes revisar las convocatorias de becas actuales que se adapten a esa condici??n en que te encuentras actualmente.
    `,
  },
  {
    id: 12,
    title: `Si un miembro de mi familia aplica, ??puedo ser beneficiario de una beca?
    `,
    body: `
  S??, no existe ninguna restricci??n en este sentido.
    `,
  },
  {
    id: 13,
    title: `
    ??Debo ser mayor de edad para aplicar a una beca?
    `,
    body: `No es un requisito fundamental ser mayor de edad para obtener una beca.
    `,
  },
  {
    id: 14,
    title: `??D??nde debo dar seguimiento a mi solicitud de beca?
    `,
    body: `Todo el seguimiento lo podr??s realizar en tiempo real a trav??s de la plataforma [becas.gob.do](https://becas.gob.do/), de igual manera podr??s recibir actualizaciones a tu celular por SMS y a tu correo electr??nico.
    `,
  },
  {
    id: 15,
    title: `??Puedo aplicar a m??s de una beca?`,
    body: `S??, puedes realizar hasta tres (3) solicitudes por convocatoria, pero solo ser??s elegible para una. Se permitir?? que puedas escoger la oferta acad??mica en caso de que resultes escogido para m??s de una. Si no eliges, el MESCYT te asignar?? la oferta acad??mica para la que presentes el expediente con mejor calificaci??n.
    `,
  },
  {
    id: 16,
    title: `Si no me eligen en alguna convocatoria, ??puedo volver a aplicar?
    `,
    body: `S??, que no resultes beneficiado con tu aplicaci??n en una convocatoria, no te limita a que puedas participar en convocatorias posteriores. 
    `,
  },
  {
    id: 17,
    title: `Si a??n no tengo el t??tulo de mi universidad, ??puedo aplicar a una beca?`,
    body: `S??, en los casos de las convocatorias dirigidas a postgrado, pero deber??s aportar alguna documentaci??n que valide que tu t??tulo est?? en tr??mite, el cual deber??s mostrar y evidenciar al momento de ser otorgada la beca.
    `,
  },
]
