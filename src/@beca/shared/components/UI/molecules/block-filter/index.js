import Checkbox from "../../atoms/checkbox";
import { removeAccents } from "../../../../utils/remove-accents";

export default function BlockFilter({
  arrCheckBox,
  onSelect,
  titleBlock,
  arrSelected = [],
}) {
  const selectedParams = arrSelected.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: curr,
    }),
    {}
  );

  return (
    <div>
      <p className="text-gray-600 text-md">{titleBlock}</p>
      <div className="border-t-2">
        {arrCheckBox.map((box, i) => (
          <div className="my-2 " key={i}>
            <Checkbox
              id={box.id}
              text={box.text}
              name={box.name}
              checked={selectedParams[removeAccents(box.name)]}
              onToggle={(payload) => onSelect(payload)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
