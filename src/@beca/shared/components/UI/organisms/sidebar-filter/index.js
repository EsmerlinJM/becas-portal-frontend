import BlockCheck from "../../molecules/block-filter";
import BlockSelect from "../../molecules/block-filter-select";
import ProvinceSelect from "../../atoms/province-select";
import AreaSelect from "../../atoms/area-select";
import InstitutionSelect from "../../atoms/institution-select";
import CountrySelect from "../../atoms/country-select";

import { FiSliders } from "react-icons/fi";
import { useLocation } from "react-router";
import { removeAccents } from "../../../../utils/remove-accents";

import qs from "querystring";
import useAction from "./use-action";

export default function Sidebar() {
  const search = useLocation().search;
  const qp = qs.parse(search);
  const { onSelect } = useAction(qp, search);

  return (
    <div className="p-6">
      <p className="text-md flex font-bold">
        <FiSliders size={20} className="mr-2" /> FILTRA TU BÚSQUEDA
      </p>
      <div className="my-7">
        <BlockCheck
          onSelect={(item) => onSelect("level", item)}
          arrSelected={qp.level?.split("_")}
          titleBlock="Nivel"
          arrCheckBox={[
            { id: 1, name: "Técnico", text: "Técnico" },
            { id: 2, name: "Grado", text: "Grado" },
            { id: 3, name: "Especialidad", text: "Especialidad" },
            { id: 4, name: "Maestría", text: "Maestría" },
            { id: 5, name: "Doctorado", text: "Doctorado" },
            { id: 6, name: "Postdoctorado", text: "Postdoctorado" },
          ]}
        />
      </div>

      <div className="my-7">
        <BlockSelect titleBlock="Área">
          <AreaSelect onSelect={onSelect} id={qp.area} />
        </BlockSelect>
      </div>

      <div className="my-7">
        <BlockSelect titleBlock="Institución">
          <InstitutionSelect onSelect={onSelect} id={qp.institution} />
        </BlockSelect>
      </div>

      <div className="my-7">
        <BlockCheck
          titleBlock="Idioma"
          onSelect={(item) => onSelect("language", item)}
          arrCheckBox={[
            { id: 1, name: "Espanol", text: "Espańol" },
            { id: 2, name: "Ingles", text: "Ingles" },
            { id: 3, name: "Frances", text: "Frances" },
            { id: 4, name: "internacional", text: "Otros" },
          ]}
        />
      </div>

      <div className="my-7">
        <BlockSelect titleBlock="País">
          <CountrySelect onSelect={onSelect} id={qp.country} />
        </BlockSelect>
      </div>

      {qp.country &&
        (removeAccents(qp.country.toLowerCase()).includes(
          "republica dominicana"
        ) ||
          removeAccents(qp.country.toLowerCase()).includes(
            "dominican republic"
          )) && (
          <div className="my-7">
            <BlockSelect titleBlock="Provincia">
              <ProvinceSelect onSelect={onSelect} id={qp.province} />
            </BlockSelect>
          </div>
        )}

      <div className="my-7">
        <BlockCheck
          onSelect={(item) => onSelect("modality", item)}
          arrSelected={qp.modality?.split("_")}
          titleBlock="Modalidad"
          arrCheckBox={[
            { id: 1, name: "Online", text: "Virtual" },
            { id: 2, name: "Presencial", text: "Presencial" },
            { id: 3, name: "Semipresencial", text: "Semi-presencial" },
          ]}
        />
      </div>
    </div>
  );
}
