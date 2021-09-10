import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFolderFill, BsFillBarChartFill } from "react-icons/bs";
import { FaSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  announcementGetAll,
  setRecent,
  setAnnouncementMessage,
} from "../../../../../redux/slices/announcement/_actions";
import Loader from "react-loader-spinner";

export default function OpenCallsBlock({ id }) {
  const {
    all: { data, status },
    recent: { data: recent, status: statusRecent },
  } = useSelector((state) => state.announcement);
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      dispatch(await announcementGetAll());
    };
    !data.length && fn();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id) {
      const item = data.find((item) => +item.id === +id);

      if (item) {
        dispatch(setRecent(item));
        item.status?.toLowerCase() === "cerrada"
          ? dispatch(
              setAnnouncementMessage({ message: "Convocatoria cerrada" })
            )
          : dispatch(setAnnouncementMessage({}));
      }
    }

    //eslint-disable-next-line
  }, [id, status]);

  if (status === "loading" || statusRecent === "loading")
    return (
      <div className="flex justify-center">
        {" "}
        <Loader type="MutatingDots" color="red" />
      </div>
    );

  if (!Object.keys(recent).length || !id) return <></>;
  return (
    <div className="fadeIn  rounded flex flex-wrap items-center border bg-white m-2 text-gray-500 divide-x-2 invisible xs:invisible sm:invisible md:visible lg:visible">
      <div className="flex">
        <div>
          <img height={"100%"} width={160} src={recent.image_url} alt="" />
        </div>
        <div className="mx-4 self-center">
          <p className="text-base font-bold	text-blue-900">
            Becas Nacionales {new Date().getFullYear()}
          </p>
          <div>
            <button className="outline-none rounded-3xl w-11/12 px-10 py-2 mt-2 text-white azulbg font-semibold text-sm">
              {recent.status}
            </button>
          </div>
        </div>
      </div>
      <div className="mx-4 ">
        <div className="ml-10">
          <span className="flex items-center ">
            <FaSign />
            <p className="ml-3">{recent.type?.name}</p>
          </span>
          <span className="flex items-center">
            <BsFolderFill />
            <p className="ml-3">{recent.name}</p>
          </span>
          <span className="flex items-center">
            <FaRegCalendarAlt />
            <p className="ml-3">
              {recent.start_date} - {recent.end_date}
            </p>
          </span>
        </div>
      </div>

      <div className="mx-4">
        <div className="ml-10">
          <span className="flex items-center">
            <BsFillBarChartFill />
            <p className="ml-3">{recent.audience?.name}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
