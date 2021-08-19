import Select from "react-select";
import { removeAccents } from "../../../../utils/remove-accents";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllArea } from "../../../../../redux/slices/area/_actions";

export default function AreaSelect({ onSelect, id }) {
  const [selected, setSelected] = useState({});
  const { data, status } = useSelector((state) => state.area.all);
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => dispatch(await getAllArea());
    !data.length && fn();
  }, [data.length, dispatch]);

  useEffect(() => {
    const finded =
      id &&
      data.find(
        (item) =>
          parseInt(item.id) === parseInt(id) ||
          removeAccents(item.name).includes(id)
      );
    finded && setSelected(finded);
    // eslint-disable-next-line
  }, [id, onSelect, status]);

  if (status === "loading") return <>Loading...</>;
  return (
    <Select
      options={data}
      value={Object.keys(selected).length && id ? selected : null}
      placeholder="Seleccionar área"
      getOptionValue={(item) => item}
      getOptionLabel={(item) => item.name}
      onChange={(item) => onSelect("area", item)}
    />
  );
}
