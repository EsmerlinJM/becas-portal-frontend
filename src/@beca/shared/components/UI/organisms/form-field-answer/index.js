import FiledAnswer from "../../atoms/field-answer";
export default function FormFieldAnswer({ forms }) {
  return (
    <div className="grid grid-cols-2  p-5">
      {forms &&
        forms.map((item) => (
          <FiledAnswer
            fieldId={item.aplication_form_id}
            required={item.formulario_detail_required}
            type={item.formulario_detail_type}
            name={item.formulario_detail_name}
            data={item.formulario_detail_data}
          />
        ))}
    </div>
  );
}
