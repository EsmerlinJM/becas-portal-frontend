import { useState, useEffect } from "react";

export default function Checkbox({
  text = "Send me your newsletter!",
  id,
  onToggle,
  name,
  checked = false,
}) {
  const [selected, setSelected] = useState(false);

  const onSelect = () => {
    const val = !selected;
    const payload = {
      name,
      checked: val,
      id: val ? id : null,
    };
    onToggle(payload);
    setSelected(val);
  };

  useEffect(() => {
    setSelected(checked);
  }, [checked]);

  return (
    <label className="md:w-2/3 block text-gray-500 font-bold text-xs">
      <input
        className="mr-2 leading-tight"
        checked={selected}
        onChange={() => onSelect()}
        type="checkbox"
      />
      <span className="text-sm"> {text} </span>
    </label>
  );
}
