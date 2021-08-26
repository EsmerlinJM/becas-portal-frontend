import Label from "../../atoms/label";
import BorderTop from "../../atoms/border-top-color";

import { AiFillStar } from "react-icons/ai";
import { RiStarSLine } from "react-icons/ri";
import { useHistory } from "react-router";

export default function OfertaResult({
  item,
  saveFavorite,
  isFavorite = false,
  color = "red-500",
}) {
  const history = useHistory();
  const {
    id,
    image_url,
    oferta: {
      schedule: { modality },
      academic_offer_name,
      campus_country,
      institution_name,
    },
  } = item;
  return (
    <BorderTop borderColor={color}>
      <div className="max-w-sm  overflow-hidden bg-white rounded flex flex-col justify-between h-full">
        <div className="w-full flex justify-between border-b-2 border-gray-100 h-28 ">
          <div className="w-48 flex items-center">
            <img
              className="w-full p-2"
              src={image_url}
              style={{ height: "90px" }}
              width="100%"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="w-52 flex items-center justify-center">
            <Label bgColor={color} title="Internacional" />
          </div>
        </div>
        <div className="px-5 py-2">
          <p className="text-gray-600 truncate">{institution_name}</p>
          <p className="text-sm font-bold my-5">{academic_offer_name}</p>

          <div className="flex justify-between text-gray-600 text-xs">
            <span>{campus_country}</span>
            <span>{modality}</span>
          </div>
        </div>

        <div className="pt-4 text-center cursor-pointer  ">
          <span
            className={` w-full inline-block 
          hover:bg-blue-50 hover:text-blue-900  transition duration-300 
          ease-in-out px-3 py-2 text-sm font-semibold text-gray-700 mr-2 border-t-2  flex justify-between px-4`}
          >
            <span
              onClick={() => history.push(`/query-result/detail/${id}`)}
              className="text-sm"
            >
              {" "}
              TÈCNICO
            </span>
            <span>
              {isFavorite ? (
                <AiFillStar
                  size={25}
                  className="text-yellow-300"
                  onClick={() => saveFavorite(id)}
                />
              ) : (
                <RiStarSLine size={25} onClick={() => saveFavorite(id)} />
              )}
            </span>
          </span>
        </div>
      </div>
    </BorderTop>
  );
}
