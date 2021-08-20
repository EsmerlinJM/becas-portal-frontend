import Label from "../../atoms/label";
import { diffTwoTimes } from "../../../../utils/diff-two-times";
import { BiCalendar } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setRecent } from "../../../../../redux/slices/announcement/_actions";

export default function AnnouncementCard({ item = {} }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const redirect = (payload) => {
    dispatch(setRecent(payload));
    localStorage.setItem("color", payload.type.color);
    console.log(payload.status.toLowerCase().trim());
    const path = payload.status.toLowerCase().trim().includes("cerrada");
    history.push(!path ? `/query-result?id=${id}` : `/all-applied/${id}`);
  };

  const {
    id,
    name,
    end_date,
    image_url,
    status,
    type: { color, name: typeName },
  } = item;

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="relative flex justify-center w-full">
        <div className=" absolute text-center w-40" style={{ top: -13 }}>
          <Label bgColor={color} title={typeName} />
        </div>
      </div>

      <div className="overflow-hidden">
        <div>
          <img
            className="w-full"
            src={image_url}
            style={{ height: "140px" }}
            alt="Sunset in the mountains"
          />
        </div>

        <div className="px-6 py-2">
          <div
            className="font-bold mb-2 text-center mb-10"
            style={{
              color: "#002F6C",
              fontSize: "15px",
            }}
          >
            <p>{name}</p>
          </div>
          <span style={{ fontSize: "13px" }}>
            <div className="flex flex-wrap mb-2">
              <BiCalendar size={17} className="text-gray-600" />
              <p className="mr-2 ml-1">Cierre de convocatoria: </p>
              <p className="text-gray-700"> {end_date}</p>
            </div>
            <div className="flex flex-wrap">
              <FaRegClock size={15} className="text-gray-600" />
              <p className="mr-2 ml-1">Tiempo restante: </p>
              <p style={{ color: "#FF941F" }}> {diffTwoTimes(end_date)} </p>
            </div>
          </span>
        </div>
        <div
          className="pt-4 text-center cursor-pointer "
          onClick={() => redirect(item)}
        >
          <span
            className={` w-full inline-block 
          hover:bg-blue-50 hover:text-blue-900  transition duration-300 
          ease-in-out px-3 py-2 text-sm font-semibold text-gray-700 mr-2 border-t-2 `}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
