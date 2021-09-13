import Header from '../../shared/components/hocs/header2-natigation'
import { useEffect } from 'react'

const objNav = {
  name: 'Politicas de privacidad',
  parents: [{ name: 'Inicio', path: '/' }],
}
export default function Politica() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <Header objNav={objNav}>
      <div className="w-4/5 m-auto  flex flex-col my-5">
        <h4 className="p-2 border-b border-blue-300 text-xl font-bold azul mb-7 flex md:justify-start text-center justify-center">
          POLÍTICAS DE PRIVACIDAD
        </h4>
        <div
          style={{ textIndent: 20 }}
          className="w-full grid grid-cols-1 gap-3 text-justify"
        >
          <p className="font-bold">Políticas y su Aceptación</p>
          <p>
            Estas Políticas (en adelante, las «Políticas») condicionan el uso de
            los servicios del portal de Internet www.becas.gob.do (en adelante,
            el «Portal») Beca tu Futuro, dependencia del Ministerio de Educación
            Superior, Ciencia y Tecnología. República Dominicana, con domicilio
            en la AV. Máximo Gómez No 31, esq. Pedro Henríquez Ureña, Santo
            Domingo, República Dominicana.
          </p>
          <p className="font-bold">1. Condiciones</p>
          <p>
            Menores de edad.- Para hacer uso de los Servicios que requieran la
            recopilación de Datos Personales por parte de Beca tu Futuro a
            través del Portal, los menores de edad deben obtener permiso previo
            por parte de sus padres, tutores o representantes legales, quienes
            serán considerados responsables de todos los actos realizados por
            los menores dispuestos a su cargo.
          </p>
          <p>
            Obligación de hacer un uso correcto del Portal y de los Servicios.-
            El Usuario se compromete a utilizar el Portal y los Servicios de
            conformidad con la ley, las presentes Políticas, los Términos de
            Uso, las Condiciones Particulares de ciertos Servicios y demás
            avisos e instrucciones puestos en su conocimiento, así como el orden
            público, la moral y las buenas costumbres generalmente aceptadas.
          </p>
          <p>
            El Usuario deberá abstenerse de obtener e incluso de intentar
            obtener los Contenidos empleando para ello medios o procedimientos
            distintos de los que, según los casos, se hayan puesto a su
            disposición al efecto o se hayan indicado en las páginas Web donde
            se encuentren los contenidos o, en general, de los que se empleen
            habitualmente en la Internet, siempre que no entrañen un riesgo de
            daño o inutilización del Portal, de los Servicios y/o de los
            contenidos.
          </p>
          <p>
            El Usuario o terceros perjudicados por la recepción de mensajes no
            solicitados dirigidos a una pluralidad de personas podrán
            comunicárselo a Beca tu Futuro remitiendo un mensaje a la siguiente
            dirección de correo electrónico: <u>info@mescyt.gob.do</u>.
          </p>
          <p className="font-bold">2. No Licencia</p>
          <p>
            Todas las marcas, nombres comerciales o signos distintivos de
            cualquier clase que aparecen en el Portal son propiedad de Beca tu
            Futuro o de terceros, sin que pueda entenderse que el uso o acceso
            al Portal y/o a los Servicios atribuya al Usuario derecho alguno
            sobre los citados signos distintivos.
          </p>
          <p>
            Así mismo, los Contenidos son propiedad intelectual de Beca tu
            Futuro o de terceros, sin que puedan entenderse cedidos al Usuario,
            en virtud de lo establecido en estas Políticas, ninguno de los
            derechos de explotación que existen o puedan existir sobre dichos
            contenidos más allá de lo estrictamente necesario para el correcto
            uso del Portal y de los Servicios, es decir, el Usuario podrá
            consultar, copiar y almacenar en el disco duro de su computadora o
            en cualquier otro soporte físico, imprimir o reproducir el material
            disponible en esta página Web, exclusivamente para su uso personal o
            privado, o el que se realice dentro de su empresa u organización,
            haciendo mención en todo momento de la propiedad que sobre éste
            posee Beca tu Futuro, quedando terminantemente prohibido realizar
            alteraciones, modificaciones o descompilación de su contenido.
          </p>
          <p>
            Queda estrictamente prohibida la comercialización en cualquier forma
            y bajo cualquier título del material contenido en este sitio, sin
            contar con la previa autorización por escrito de Beca tu Futuro.
            Este portal podrá contener información proveniente de otras fuentes,
            por lo que en estos casos, se deberá requerir el consentimiento de
            ellas para su reproducción.
          </p>
          <p className="font-bold">
            3. Exclusión de garantías y de responsabilidad
          </p>
          <p>
            Disponibilidad y continuidad, utilidad y falibilidad.- Beca tu
            Futuro no garantiza la disponibilidad y continuidad del
            funcionamiento del Portal y de los Servicios. Cuando ello sea
            razonablemente posible, Beca tu Futuro advertirá previamente de las
            interrupciones en el funcionamiento del Portal y de los Servicios.
            Beca tu Futuro tampoco garantiza la utilidad del Portal y de los
            Servicios para la realización de ninguna actividad en concreto, ni
            su infalibilidad y, en particular, aunque no de modo excluyente, que
            el Usuario pueda efectivamente utilizar el Portal y los Servicios,
            acceder a las distintas páginas Web que forman el Portal o a
            aquellas desde las que se prestan los Servicios.
          </p>
          <p>
            BECA TU FUTURO EXCLUYE CUALQUIER RESPONSABILIDAD POR DAÑOS Y
            PERJUICIOS DE TODA NATURALEZA QUE PUEDAN DEBERSE A LA FALTA DE
            DISPONIBILIDAD O DE CONTINUIDAD DEL FUNCIONAMIENTO DEL PORTAL Y DE
            LOS SERVICIOS, A LA DEFRAUDACIÓN DE LA UTILIDAD QUE EL USUARIO
            HUBIERE PODIDO ATRIBUIR AL PORTAL Y/O A LOS SERVICIOS, A LA
            FALIBILIDAD DEL PORTAL Y/O DE LOS SERVICIOS, Y EN PARTICULAR, AUNQUE
            NO DE MODO EXCLUYENTE, A LOS FALLOS EN EL ACCESO A LAS DISTINTAS
            PÁGINAS WEB DEL PORTAL O A AQUELLAS DESDE LAS QUE SE PRESTAN LOS
            SERVICIOS.
          </p>
          <p>
            Privacidad y seguridad en la utilización del Portal y de los
            Servicios.- Beca tu Futuro no garantiza la privacidad y seguridad de
            la utilización del Portal y de los Servicios y, en particular, no
            garantiza que terceros no autorizados no puedan tener conocimiento
            de la clase, condiciones, características y circunstancias del uso
            que el Usuario hacen del Portal y de los Servicios.
          </p>
          <p>
            Calidad.- Beca tu Futuro no controla ni garantiza la ausencia de
            virus ni de otros elementos en los Contenidos que puedan producir
            alteraciones en su sistema informático (software y hardware) o en
            los documentos electrónicos y ficheros almacenados en su sistema
            informático.
          </p>
          <p>
            Veracidad, exactitud y actualidad.- BECA TU FUTURO EXCLUYE CUALQUIER
            RESPONSABILIDAD POR LOS DAÑOS Y PERJUICIOS DE TODA NATURALEZA QUE
            PUEDAN GENERARSE POR LA FALTA DE VERACIDAD, EXACTITUD Y/O ACTUALIDAD
            DE LOS CONTENIDOS.
          </p>
          <p>
            Licitud, fiabilidad y utilidad.- Beca tu Futuro no garantiza la
            licitud, fiabilidad y utilidad de los servicios prestados por
            terceros a través del Portal. LA BECA TU FUTURO EXCLUYE CUALQUIER
            RESPONSABILIDAD POR LOS DAÑOS Y PERJUICIOS DE TODA NATURALEZA QUE
            PUEDAN GENERARSE POR LOS SERVICIOS PRESTADOS POR TERCEROS A TRAVÉS
            DEL PORTAL.
          </p>
          <p className="font-bold">
            4. Procedimiento en caso de realización de actividades de carácter
            ilícito
          </p>
          <p>
            En el caso de que cualquier Usuario o un tercero considere que
            existen hechos o circunstancias que revelen el carácter ilícito de
            la utilización de cualquier contenido y/o de la realización de
            cualquier actividad en las páginas Web incluidas o accesibles a
            través del Portal, y, en particular, de la violación de derechos de
            propiedad intelectual u otros derechos, deberá enviar una
            notificación a Beca tu Futuro en la que se exprese lo siguiente:
          </p>
          <p>
            Datos personales del reclamante: nombre, número de cédula (o
            pasaporte, en caso de extranjeros), dirección, número de teléfono y
            dirección de correo electrónico;
          </p>
          <p>
            Especificación de la supuesta actividad ilícita llevada a cabo en el
            Portal y, en particular, cuando se trate de una supuesta violación
            de derechos, indicación precisa y concreta de los contenidos
            protegidos así como de su localización en las páginas Web;
          </p>
          <p>
            Hechos o circunstancias que revelan el carácter ilícito de dicha
            actividad;
          </p>
          <p>
            En el supuesto de violación de derechos, firma manuscrita o
            equivalente, con los Datos Personales del titular de los derechos
            supuestamente infringidos o de la persona autorizada para actuar en
            nombre y por cuenta de ésta;
          </p>
          <p>
            Declaración expresa, clara y bajo la responsabilidad del reclamante
            de que la información proporcionada en la notificación es exacta y
            del carácter ilícito de la utilización de los contenidos o de la
            realización de las actividades descritas.
          </p>
          <p className="font-bold">5. Notificaciones</p>
          <p>
            Todas las notificaciones y comunicaciones (en adelante, las
            «Notificaciones») por parte del Usuario a Beca tu Futuro se
            considerarán eficaces, a todos los efectos, cuando se nos envíen por
            mensajería a la siguiente dirección: AV. Máximo Gómez No 31, esq.
            Pedro Henríquez Ureña, Santo Domingo, República Dominicana.
          </p>
          <p className="font-bold">6. Legislación aplicable</p>
          <p>
            Las Presentes Políticas se rige en todas y cada una de sus partes
            por las leyes de la República Dominicana.
          </p>
          <p className="font-bold">7. Jurisdicción</p>
          <p>
            Beca tu Futuro y el Usuario, con renuncia tácita a cualquier otro
            fuero, se someten al de los tribunales de la República Dominicana.
            Para cualquier sugerencia o propuesta de colaboración escríbanos a
            nuestro correo electrónico <u>info@mescyt.gob.do</u> Esta dirección
            de correo electrónico está siendo protegida de \»spam bots\»,
            necesita habilitar Javascript para poder verla, o llámenos al
            siguiente número de teléfono: (809) 731-1100.
          </p>
          <p className="font-bold underline">Políticas – Mobile</p>
          <p className="font-bold">Políticas y su Aceptación</p>
          <p>
            Estas Políticas (en adelante, las «Políticas») condicionan el uso de
            los servicios del portal de Internet www.becas.gob.do (en adelante,
            el «Portal») dependencia del Ministerio de Educación Superior,
            Ciencia y Tecnología. República Dominicana, con domicilio en la AV.
            Máximo Gómez No 31, esq. Pedro Henríquez Ureña, Santo Domingo,
            República Dominicana.
          </p>
          <p className="font-bold">1. Condiciones</p>
          <p>
            Menores de edad.- Para hacer uso de los Servicios que requieran la
            recopilación de Datos Personales por parte de Beca tu Futuro a
            través del Portal, los menores de edad deben obtener permiso previo
            por parte de sus padres, tutores o representantes legales, quienes
            serán considerados responsables de todos los actos realizados por
            los menores dispuestos a su cargo.
          </p>
          <p>
            Obligación de hacer un uso correcto del Portal y de los Servicios.-
            El Usuario se compromete a utilizar el Portal y los Servicios de
            conformidad con la ley, las presentes Políticas, los Términos de
            Uso, las Condiciones Particulares de ciertos Servicios y demás
            avisos e instrucciones puestos en su conocimiento, así como el orden
            público, la moral y las buenas costumbres generalmente aceptadas.
          </p>
          <p>
            El Usuario deberá abstenerse de obtener e incluso de intentar
            obtener los Contenidos empleando para ello medios o procedimientos
            distintos de los que, según los casos, se hayan puesto a su
            disposición al efecto o se hayan indicado en las páginas Web donde
            se encuentren los contenidos o, en general, de los que se empleen
            habitualmente en la Internet, siempre que no entrañen un riesgo de
            daño o inutilización del Portal, de los Servicios y/o de los
            contenidos.
          </p>
          <p>
            El Usuario o terceros perjudicados por la recepción de mensajes no
            solicitados dirigidos a una pluralidad de personas podrán
            comunicárselo a Beca tu Futuro remitiendo un mensaje a la siguiente
            dirección de correo electrónico: <u>info@mescyt.gob.do</u>.
          </p>
          <p className="font-bold">2. No Licencia</p>
          <p>
            Todas las marcas, nombres comerciales o signos distintivos de
            cualquier clase que aparecen en el Portal son propiedad de Beca tu
            Futuro o de terceros, sin que pueda entenderse que el uso o acceso
            al Portal y/o a los Servicios atribuya al Usuario derecho alguno
            sobre los citados signos distintivos.
          </p>
          <p>
            Así mismo, los Contenidos son propiedad intelectual de Beca tu
            Futuro o de terceros, sin que puedan entenderse cedidos al Usuario,
            en virtud de lo establecido en estas Políticas, ninguno de los
            derechos de explotación que existen o puedan existir sobre dichos
            contenidos más allá de lo estrictamente necesario para el correcto
            uso del Portal y de los Servicios, es decir, el Usuario podrá
            consultar, copiar y almacenar en el disco duro de su computadora o
            en cualquier otro soporte físico, imprimir o reproducir el material
            disponible en esta página Web, exclusivamente para su uso personal o
            privado, o el que se realice dentro de su empresa u organización,
            haciendo mención en todo momento de la propiedad que sobre éste
            posee Beca tu Futuro, quedando terminantemente prohibido realizar
            alteraciones, modificaciones o descompilación de su contenido.
          </p>
          <p>
            Queda estrictamente prohibida la comercialización en cualquier forma
            y bajo cualquier título del material contenido en este sitio, sin
            contar con la previa autorización por escrito de Beca tu Futuro.
            Este portal podrá contener información proveniente de otras fuentes,
            por lo que en estos casos, se deberá requerir el consentimiento de
            ellas para su reproducción.
          </p>
          <p className="font-bold">
            3. Exclusión de garantías y de responsabilidad
          </p>
          <p>
            Disponibilidad y continuidad, utilidad y falibilidad.- Beca tu
            Futuro no garantiza la disponibilidad y continuidad del
            funcionamiento del Portal y de los Servicios. Cuando ello sea
            razonablemente posible, Beca tu Futuro advertirá previamente de las
            interrupciones en el funcionamiento del Portal y de los Servicios.
            Beca tu Futuro tampoco garantiza la utilidad del Portal y de los
            Servicios para la realización de ninguna actividad en concreto, ni
            su infalibilidad y, en particular, aunque no de modo excluyente, que
            el Usuario pueda efectivamente utilizar el Portal y los Servicios,
            acceder a las distintas páginas Web que forman el Portal o a
            aquellas desde las que se prestan los Servicios.
          </p>
          <p>
            BECA TU FUTURO EXCLUYE CUALQUIER RESPONSABILIDAD POR DAÑOS Y
            PERJUICIOS DE TODA NATURALEZA QUE PUEDAN DEBERSE A LA FALTA DE
            DISPONIBILIDAD O DE CONTINUIDAD DEL FUNCIONAMIENTO DEL PORTAL Y DE
            LOS SERVICIOS, A LA DEFRAUDACIÓN DE LA UTILIDAD QUE EL USUARIO
            HUBIERE PODIDO ATRIBUIR AL PORTAL Y/O A LOS SERVICIOS, A LA
            FALIBILIDAD DEL PORTAL Y/O DE LOS SERVICIOS, Y EN PARTICULAR, AUNQUE
            NO DE MODO EXCLUYENTE, A LOS FALLOS EN EL ACCESO A LAS DISTINTAS
            PÁGINAS WEB DEL PORTAL O A AQUELLAS DESDE LAS QUE SE PRESTAN LOS
            SERVICIOS.
          </p>
          <p>
            Privacidad y seguridad en la utilización del Portal y de los
            Servicios.- Beca tu Futuro no garantiza la privacidad y seguridad de
            la utilización del Portal y de los Servicios y, en particular, no
            garantiza que terceros no autorizados no puedan tener conocimiento
            de la clase, condiciones, características y circunstancias del uso
            que el Usuario hacen del Portal y de los Servicios.
          </p>
          <p>
            Calidad.- Beca tu Futuro no controla ni garantiza la ausencia de
            virus ni de otros elementos en los Contenidos que puedan producir
            alteraciones en su sistema informático (software y hardware) o en
            los documentos electrónicos y ficheros almacenados en su sistema
            informático.
          </p>
          <p>
            Veracidad, exactitud y actualidad.- BECA TU FUTURO EXCLUYE CUALQUIER
            RESPONSABILIDAD POR LOS DAÑOS Y PERJUICIOS DE TODA NATURALEZA QUE
            PUEDAN GENERARSE POR LA FALTA DE VERACIDAD, EXACTITUD Y/O ACTUALIDAD
            DE LOS CONTENIDOS.
          </p>
          <p>
            Licitud, fiabilidad y utilidad.- Beca tu Futuro no garantiza la
            licitud, fiabilidad y utilidad de los servicios prestados por
            terceros a través del Portal. LA BECA TU FUTURO EXCLUYE CUALQUIER
            RESPONSABILIDAD POR LOS DAÑOS Y PERJUICIOS DE TODA NATURALEZA QUE
            PUEDAN GENERARSE POR LOS SERVICIOS PRESTADOS POR TERCEROS A TRAVÉS
            DEL PORTAL.
          </p>
          <p className="font-bold">
            4. Procedimiento en caso de realización de actividades de carácter
            ilícito
          </p>
          <p>
            En el caso de que cualquier Usuario o un tercero considere que
            existen hechos o circunstancias que revelen el carácter ilícito de
            la utilización de cualquier contenido y/o de la realización de
            cualquier actividad en las páginas Web incluidas o accesibles a
            través del Portal, y, en particular, de la violación de derechos de
            propiedad intelectual u otros derechos, deberá enviar una
            notificación a Beca tu Futuro en la que se exprese lo siguiente:
          </p>
          <p>
            Datos personales del reclamante: nombre, número de cédula (o
            pasaporte, en caso de extranjeros), dirección, número de teléfono y
            dirección de correo electrónico;
          </p>
          <p>
            Especificación de la supuesta actividad ilícita llevada a cabo en el
            Portal y, en particular, cuando se trate de una supuesta violación
            de derechos, indicación precisa y concreta de los contenidos
            protegidos así como de su localización en las páginas Web;
          </p>
          <p>
            Hechos o circunstancias que revelan el carácter ilícito de dicha
            actividad;
          </p>
          <p>
            En el supuesto de violación de derechos, firma manuscrita o
            equivalente, con los Datos Personales del titular de los derechos
            supuestamente infringidos o de la persona autorizada para actuar en
            nombre y por cuenta de ésta;
          </p>
          <p>
            Declaración expresa, clara y bajo la responsabilidad del reclamante
            de que la información proporcionada en la notificación es exacta y
            del carácter ilícito de la utilización de los contenidos o de la
            realización de las actividades descritas.
          </p>
          <p className="font-bold">5. Notificaciones</p>
          <p>
            Todas las notificaciones y comunicaciones (en adelante, las
            «Notificaciones») por parte del Usuario a Beca tu Futuro se
            considerarán eficaces, a todos los efectos, cuando se nos envíen por
            mensajería a la siguiente dirección: AV. Máximo Gómez No 31, esq.
            Pedro Henríquez Ureña, Santo Domingo, República Dominicana.
          </p>
          <p className="font-bold">6. Legislación aplicable</p>
          <p>
            Las Presentes Políticas se rige en todas y cada una de sus partes
            por las leyes de la República Dominicana.
          </p>
          <p className="font-bold">7. Jurisdicción</p>
          <p>
            Beca tu Futuro y el Usuario, con renuncia tácita a cualquier otro
            fuero, se someten al de los tribunales de la República Dominicana.
            Para cualquier sugerencia o propuesta de colaboración escríbanos a
            nuestro correo electrónico <u>info@mescyt.gob.do</u> Esta dirección
            de correo electrónico está siendo protegida de \»spam bots\»,
            necesita habilitar Javascript para poder verla, o llámenos al
            siguiente número de teléfono: (809) 731-1100.
          </p>
        </div>
      </div>
    </Header>
  )
}
