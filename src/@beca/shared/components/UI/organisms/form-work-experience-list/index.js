import FormWorkExperience from "../form-work-experience";
import { GoPlus } from "react-icons/go";

export default function FormWorkExperienceList({ forms }) {
  return (
    <div>
      <div className="mb-4">
        {forms.map((item, i) => (
          <div key={i}>
            <FormWorkExperience item={item} />
            <hr />
          </div>
        ))}
      </div>
      <div className=" flex justify-end space-x-3 p-5">
        <button className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800">
          Guardar
        </button>
        <button className="uppercase text-xs px-3 py-2 rounded-3xl bg-blue-900 text-white hover:bg-blue-800">
          <GoPlus />
        </button>
      </div>
    </div>
  );
}
