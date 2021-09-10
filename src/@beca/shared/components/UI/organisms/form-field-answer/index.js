import FiledAnswer from "../../atoms/field-answer";
export default function FormFieldAnswer({ forms, onChange, save }) {
  console.log(forms);
  return (
    <div className="grid grid-cols-2  p-5">
      {forms &&
        forms.map((item, i) => (
          <FiledAnswer
            key={i}
            onChange={(payload) =>
              onChange({
                type: "ON_CHANGE_FORM",
                key: "formsInstitution",
                field: payload.name,
                value: payload.value,
                index: i,
              })
            }
            canditate_answer={item.canditate_answer}
            fieldId={item.aplication_form_id}
            required={item.formulario_detail_required}
            type={item.formulario_detail_type}
            name={item.formulario_detail_name}
            data={item.formulario_detail_data}
          />
        ))}
      <div className="md:col-span-2 mt-7 flex md:justify-end justify-center">
        <button
          onClick={() => save("formsInstitution")}
          className="uppercase text-xs px-6 py-3 rounded-3xl bg-blue-900 text-white hover:bg-blue-800"
        >
          Guardar
        </button>
      </div>
    </div>
  );
}
