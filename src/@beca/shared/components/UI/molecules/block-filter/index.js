import Checkbox from "../../atoms/checkbox";

export default function BlockFilter({ arrCheckBox, onSelect, titleBlock }) {
  return (
    <div>
      <p className="text-gray-600 text-md">{titleBlock}</p>
      <div className="border-t-2">
        {arrCheckBox.map((box) => (
          <div className="my-2 ">
            <Checkbox
              id={box.id}
              text={box.text}
              name={box.name}
              onToggle={(payload) => onSelect(payload)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
