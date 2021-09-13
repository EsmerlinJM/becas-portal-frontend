import FormEducation from "../form-education";
import { GoPlus } from "react-icons/go";
import IconRemove from "../../../../../../img/remove.svg";

export const arrValidateField = [
  "carrera",
  "institucion",
  "fecha_entrada",
  "indice",
];

export default function FormEducationList({
  forms,
  onPlus,
  onChange,
  save,
  onDelete,
  loading,
}) {
  const setValue = (payload, index) => {
    const { name, value } = payload;
    onChange({
      type: "ON_CHANGE_FORM",
      key: "formsEducation",
      field: name,
      value,
      index,
    });
  };

  return (
    <div>
      <div className="mb-4">
        {forms.map((item, i) => (
          <div key={i} className="relative fadeIn">
            <div className="flex justify-between">
              <p className="self-center text-md font-bold p-4">#{i + 1}</p>
              <div
                onClick={() => onDelete(i, "formsEducation")}
                className=" cursor-pointer z-20 px-2 py-1"
              >
                <img src={IconRemove} alt="" width="30px" />
              </div>
            </div>
            <FormEducation onChange={(obj) => setValue(obj, i)} item={item} />
            <hr />
          </div>
        ))}
      </div>
      <div className=" flex justify-end space-x-3 p-5">
        {forms.length ? (
          <button
            onClick={save}
            disabled={loading}
            className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>
        ) : null}
        <button
          onClick={() => onPlus()}
          className="uppercase text-xs px-3 py-2 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
        >
          Agregar nueva formación
        </button>
      </div>
    </div>
  );
}
