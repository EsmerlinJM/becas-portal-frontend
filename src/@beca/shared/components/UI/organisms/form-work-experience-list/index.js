import IconRemove from "../../../../../../img/remove.svg";
import FormWorkExperience from "../form-work-experience";

import { GoPlus } from "react-icons/go";
import { toast } from "react-hot-toast";

export const arrValidateField = [
  "empresa",
  "telefono",
  "posicion",
  "tipo_contrato",
  "fecha_entrada",
];

export default function FormWorkExperienceList({
  forms,
  onPlus,
  onChange,
  save,
  onDelete,
}) {
  const setValue = (payload, index) => {
    const { name, value } = payload;
    if (arrValidateField.includes(name) && !value) {
      return toast.error(`El campo ${name.replace("_", " ")} es obligatorio`);
    }
    onChange({
      type: "ON_CHANGE_FORM",
      key: "formsWorkExperience",
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
              <p className="self-center text-md font-bold px-2 py-1">
                #{i + 1}
              </p>
              <div
                onClick={() => onDelete(i, "formsWorkExperience")}
                className="absolute cursor-pointer z-20 px-2 py-1"
                style={{ bottom: "290px", right: "-15px" }}
              >
                <img src={IconRemove} alt="" width="30px" />
              </div>
            </div>
            <FormWorkExperience
              onChange={(payload) => setValue(payload, i)}
              item={item}
            />
            <hr />
          </div>
        ))}
      </div>
      <div className=" flex justify-end space-x-3 p-5">
        {forms && forms.length ? (
          <button
            onClick={save}
            className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
          >
            Guardar
          </button>
        ) : null}
        <button
          onClick={onPlus}
          className="uppercase text-xs px-3 py-2 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
        >
          <GoPlus />
        </button>
      </div>
    </div>
  );
}
