import Header from '../../shared/components/hocs/header2-natigation'
import { useEffect } from 'react'

const objNav = {
  name: 'Terminos y condiciones',
  parents: [{ name: 'Inicio', path: '/' }],
}
export default function Terminosycondiciones() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <Header objNav={objNav}>
      <div className=" w-4/5 m-auto  flex flex-col my-5">
        <h4 className="p-2 border-b border-blue-300 text-xl font-bold azul mb-7 flex md:justify-start text-center justify-center">
          TÉRMINOS Y CONDICIONES DE USO
        </h4>
        <div
          style={{ textIndent: 20 }}
          className="w-full grid grid-cols-1 gap-8 text-justify"
        >
          <p>
            Los presentes términos de uso (en lo que sigue, los «Términos de
            Uso») regulan los servicios del portal de Internet www.becas.gob.do
            (en lo que sigue, el «Portal») Beca tu Futuro, dependencia del
            Ministerio de Educación Superior, Ciencia y Tecnología. República
            Dominicana, con domicilio en la AV. Máximo Gómez No 31, esq. Pedro
            Henríquez Ureña, Santo Domingo, República Dominicana.
          </p>
          <p>
            El uso del Portal le otorga la condición de usuario del Portal (en
            lo que sigue, el «Usuario») e implica la aceptación plena y sin
            reservas de todas y cada una de las disposiciones establecidas en
            los Términos de Uso y las Políticas publicadas por la{' '}
            <u>plataforma</u> al momento en que el Usuario acceda al Portal. Por
            lo tanto, se hace necesario que el Usuario lea detenidamente estos
            términos en cada ocasión en que utilice el Portal, ya que éste puede
            sufrir modificaciones, sin previo aviso.
          </p>
          <p className="font-bold">
            1. Objeto.- A través del Portal, la plataforma <u>Beca tu Futuro</u>{' '}
            facilita a los Usuarios el acceso y el uso de los servicios,
            informaciones y contenidos (en lo que sigue, los «Servicios»)
            colocados a disposición por la la plataforma o por terceros.
          </p>
          <p className="font-bold">
            2. Condiciones de Accesibilidad y Uso del Portal.-
          </p>
          <p>
            1. Carácter gratuito del acceso y uso del Portal.- La prestación de
            los Servicios, de parte de la
            <u>Plataforma Beca tu Futuro</u>, tiene carácter gratuito para el
            Usuario.
          </p>
          <p>
            2. Registro del Usuario.- De manera general, la prestación de los
            Servicios no exige la suscripción o registro previo de parte del
            Usuario.
          </p>
          <p>
            3. Veracidad de la información.- Toda información facilitada al
            Usuario mediante los Servicios deberá ser veraz. Por esto, el
            Usuario se compromete a garantizar el carácter auténtico de los
            datos que provea a consecuencia de los requisitos de los formularios
            necesarios para la suscripción de los Servicios. De igual forma,
            será responsabilidad del Usuario mantener toda la información
            facilitada al portal <u>Beca tu Futuro</u> debidamente actualizada
            de manera tal que responda, en cada momento, a la situación real del
            Usuario. En todo caso el Usuario será el único responsable de las
            informaciones falsas o inexactas que realice y de los perjuicios que
            pueda causar a la <u>Plataforma Beca tu Futuro</u> o a terceros por
            la información que suministre.
          </p>
          <p>
            4. Propiedad Intelectual.- Todo el contenido de este Portal, ya sean
            textos, imágenes, recopilaciones, marcas, logotipos, combinaciones
            de colores, o cualquier otro elemento, su estructura y diseño, la
            selección y forma de presentación de los materiales incluidos en la
            misma, y los programas necesarios para su funcionamiento, acceso y
            uso, están protegidos por derechos de propiedad intelectual, de los
            cuales es titular la <u>Plataforma Beca tu Futuro</u> o de terceros
            licenciantes, que el Usuario de este Portal debe respetar.
          </p>
          <p>
            5. El Usuario del Portal deberá abstenerse de suprimir, alterar,
            eludir o manipular cualquier dispositivo de protección o sistema de
            seguridad que pueda estar instalado en el mismo.
          </p>
          <p className="font-bold">
            3. Protección de los datos personales.- Para utilizar algunos de los
            Servicios, el Usuario debe facilitar previamente a la{' '}
            <u>Plataforma Beca tu Futuro</u> algunos datos de carácter personal
            (en lo que sigue, los «Datos Personales»).
          </p>
          <p>
            1. <u>La Plataforma Beca tu Futuro</u> tratará de forma automática
            los Datos Personales con la finalidad y las condiciones, definidas
            en su Política de Privacidad. Beca tu Futuro no garantiza la
            ausencia de virus ni de otros elementos en los Servicios prestados
            por terceros a través del Portal que puedan causar alteraciones en
            el sistema informático del Usuario (software y hardware) o en los
            documentos electrónicos y/o bases de datos de su sistema
            informático.
          </p>
          <p>
            2. <u>Beca tu Futuro</u> ha adoptado los niveles de seguridad de
            protección que entiende necesarios y procura instalar los medios y
            medidas técnicas de protección que se vayan haciendo necesarias. Sin
            embargo, el Usuario debe estar consciente de que las medidas de
            seguridad en la Internet no son inviolables.
          </p>
          <p>
            3. <u>Beca tu Futuro</u> puede utilizar cookies cuando un Usuario
            navega por los sitios y páginas Web del Portal. Las cookies que se
            puedan usar en los sitios y páginas Web del Portal se asocian
            únicamente con el navegador de un computador determinado (un Usuario
            anónimo), y no proporcionan en sí mismas el nombre y apellido del
            Usuario. Gracias a las «cookies», resulta posible que la Plataforma{' '}
            <u>Beca tu Futuro</u>
            reconozca los navegadores de los Usuarios registrados (luego de que
            éstos se hayan registrado por primera vez), esto ayuda que no tengan
            que registrarse cada vez que visita las áreas y los Servicios
            reservados exclusivamente a ellos. Las «cookies» utilizadas no
            pueden leer archivos «cookie» creados por otros proveedores. El
            Usuario tiene la posibilidad de configurar su navegador para ser
            avisado en su pantalla de la recepción de «cookies» y para impedir
            la instalación de las mismas en el disco duro.
          </p>
          <p>
            4. Para utilizar el Portal no es indispensable la instalación de las
            «cookies» enviadas por la Plataforma
            <u>Beca tu Futuro</u>, sin perjuicio de que en tal caso puede ser
            necesario que el Usuario se registre cada vez que acceda a un
            Servicio que requiera un registro previo.
          </p>
          <p className="font-bold underline">Términos de Uso – Mobile</p>
          <p className="font-bold">Términos de Uso y su Aceptación</p>
          <p>
            Los presentes términos de uso (en lo que sigue, los «Términos de
            Uso») regulan los servicios del portal de Internet www.becas.gob.do
            (en lo que sigue, el «Portal») de la Oficina Presidencial de
            Tecnologías de la Información y Comunicación (en lo que sigue, la
            Plataforma <u>Beca tu Futuro</u>), dependencia del Ministerio de
            Educación Superior, Ciencia y Tecnología. República Dominicana, con
            domicilio en la AV. Máximo Gómez No 31, esq. Pedro Henríquez Ureña,
            Santo Domingo, República Dominicana.
          </p>
          <p>
            El uso del Portal le otorga la condición de usuario del Portal (en
            lo que sigue, el «Usuario») e implica la aceptación plena y sin
            reservas de todas y cada una de las disposiciones establecidas en
            los Términos de Uso y las Políticas publicadas por la{' '}
            <u>Plataforma Beca tu Futuro</u> al momento en que el Usuario acceda
            al Portal. Por lo tanto, se hace necesario que el Usuario lea
            detenidamente estos términos en cada ocasión en que utilice el
            Portal, ya que éste puede sufrir modificaciones, sin previo aviso.
          </p>
          <p className="font-bold">
            1. Objeto.- A través del Portal, la <u>Plataforma Beca tu Futuro</u>{' '}
            facilita a los Usuarios el acceso y el uso de los servicios,
            informaciones y contenidos (en lo que sigue, los «Servicios»)
            colocados a disposición por la Plataforma o por terceros.
          </p>
          <p className="font-bold">
            2. Condiciones de Accesibilidad y Uso del Portal.-
          </p>
          <p>
            1. Carácter gratuito del acceso y uso del Portal.- La prestación de
            los Servicios, de parte de <u>Beca tu Futuro</u>, tiene carácter
            gratuito para el Usuario.
          </p>
          <p>
            2. Registro del Usuario.- De manera general, la prestación de los
            Servicios no exige la suscripción o registro previo de parte del
            Usuario.
          </p>
          <p>
            3. Veracidad de la información.- Toda información facilitada al
            Usuario mediante los Servicios deberá ser veraz. Por esto, el
            Usuario se compromete a garantizar el carácter auténtico de los
            datos que provea a consecuencia de los requisitos de los formularios
            necesarios para la suscripción de los Servicios. De igual forma,
            será responsabilidad del Usuario mantener toda la información
            facilitada a la plataforma Beca tu Futuro debidamente actualizada de
            manera tal que responda, en cada momento, a la situación real del
            Usuario. En todo caso el Usuario será el único responsable de las
            informaciones falsas o inexactas que realice y de los perjuicios que
            pueda causar a la Plataforma o a terceros por la información que
            suministre.
          </p>
          <p>
            4. Propiedad Intelectual.- Todo el contenido de este Portal, ya sean
            textos, imágenes, recopilaciones, marcas, logotipos, combinaciones
            de colores, o cualquier otro elemento, su estructura y diseño, la
            selección y forma de presentación de los materiales incluidos en la
            misma, y los programas necesarios para su funcionamiento, acceso y
            uso, están protegidos por derechos de propiedad intelectual, de los
            cuales es titular Beca tu futuro o de terceros licenciantes, que el
            Usuario de este Portal debe respetar.
          </p>
          <p>
            5. El Usuario del Portal deberá abstenerse de suprimir, alterar,
            eludir o manipular cualquier dispositivo de protección o sistema de
            seguridad que pueda estar instalado en el mismo.
          </p>
          <p className="font-bold">
            3. Protección de los datos personales.- Para utilizar algunos de los
            Servicios, el Usuario debe facilitar previamente a Beca tu Futuro
            algunos datos de carácter personal (en lo que sigue, los «Datos
            Personales»).
          </p>
          <p>
            1. Beca tu Futuro tratará de forma automática los Datos Personales
            con la finalidad y las condiciones, definidas en su Política de
            Privacidad. La Plataforma no garantiza la ausencia de virus ni de
            otros elementos en los Servicios prestados por terceros a través del
            Portal que puedan causar alteraciones en el sistema informático del
            Usuario (software y hardware) o en los documentos electrónicos y/o
            bases de datos de su sistema informático.
          </p>
          <p>
            2. Beca tu Futuro ha adoptado los niveles de seguridad de protección
            que entiende necesarios y procura instalar los medios y medidas
            técnicas de protección que se vayan haciendo necesarias. Sin
            embargo, el Usuario debe estar consciente de que las medidas de
            seguridad en la Internet no son inviolables.
          </p>
          <p>
            3. Beca tu Futuro puede utilizar cookies cuando un Usuario navega
            por los sitios y páginas Web del Portal. Las cookies que se puedan
            usar en los sitios y páginas Web del Portal se asocian únicamente
            con el navegador de un computador determinado (un Usuario anónimo),
            y no proporcionan en sí mismas el nombre y apellido del Usuario.
            Gracias a las «cookies», resulta posible que la Beca tu Futuro
            reconozca los navegadores de los Usuarios registrados (luego de que
            éstos se hayan registrado por primera vez), esto ayuda que no tengan
            que registrarse cada vez que visita las áreas y los Servicios
            reservados exclusivamente a ellos. Las «cookies» utilizadas no
            pueden leer archivos «cookie» creados por otros proveedores. El
            Usuario tiene la posibilidad de configurar su navegador para ser
            avisado en su pantalla de la recepción de «cookies» y para impedir
            la instalación de las mismas en el disco duro.
          </p>
          <p>
            4. Para utilizar el Portal no es indispensable la instalación de las
            «cookies» enviadas por Beca tu Futuro, sin perjuicio de que en tal
            caso puede ser necesario que el Usuario se registre cada vez que
            acceda a un Servicio que requiera un registro previo.
          </p>
        </div>
      </div>
    </Header>
  )
}
