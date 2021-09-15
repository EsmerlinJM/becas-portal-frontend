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
import Loading from "react-loader-spinner";

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
    // eslint-disable-next-line
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
        <Loading type="MutatingDots" color="#ee2a24" secondaryColor="#003876" />
      </div>
    );

  if (!Object.keys(recent).length || !id) return <></>;

  // formatiando fecha
  let start_date = new Date(recent.start_date);
  start_date = start_date.toLocaleDateString("en-GB");

  let end_date = new Date(recent.end_date);
  end_date = end_date.toLocaleDateString("en-GB");

  return (
    <div className="fadeIn grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center shadow rounded border-2 lg:divide-x-2 bg-white  text-gray-500 ">
      <div className="flex mb-4 lg:mb-0">
        <img height="100%" width={160} src={recent.image_url} alt="" />
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

      <div className="mx-4 mb-4 lg:mb-0">
        <div className="lg:ml-10">
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
              {start_date} - {end_date}
            </p>
          </span>
        </div>
      </div>

      <div className="mx-4 mb-4 lg:mb-0">
        <div className="lg:ml-10">
          <span className="flex items-center">
            <BsFillBarChartFill />
            <p className="ml-3">{recent.audience?.name}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
