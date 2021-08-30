import { FaRegCalendarAlt, FaSign } from 'react-icons/fa'
import { BsFolderFill, BsFillBarChartFill } from 'react-icons/bs'
import { SiMathworks } from 'react-icons/si'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Loader from 'react-loader-spinner'
import {
  announcementGetAll,
  setRecent,
} from '../../../../../redux/slices/announcement/_actions'

export default function OpenCallsBlock({ id }) {
  const {
    all: { data, status },
    recent: { data: recent, status: statusRecent },
  } = useSelector((state) => state.announcement)
  const dispatch = useDispatch()

  useEffect(() => {
    const fn = async () => {
      dispatch(await announcementGetAll())
    }
    !data.length && fn()
    // eslint-disable-next-line
  }, []);
  // console.log(id);
  useEffect(() => {
    if (id) {
      const item = data.find((item) => item.id === id)
      item && dispatch(setRecent(item))
    }
    // eslint-disable-next-line
  }, [id, status]);

  if (status === 'loading' || statusRecent === 'loading')
    return (
      <div className="flex justify-center">
        {' '}
        <Loader type="MutatingDots" color="red" />
      </div>
    )

  if (!Object.keys(recent).length || !id) return <></>
  return (
    <div className="fadeIn shadow rounded flex flex-wrap items-center border-2 bg-white m-2 text-gray-500 divide-x-2 invisible xs:invisible sm:invisible md:visible lg:visible">
      <div className="flex">
        <div>
          <img height="100%" width={160} src={recent.image_url} alt="" />
        </div>
        <div className="mx-4 self-center">
          <p className="text-base font-bold	text-blue-900">
            Becas Nacionales {new Date().getFullYear()}
          </p>
          <div>
            <button className="outline-none bg-green-300 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full mt-2">
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
          <span className="flex items-center">
            <SiMathworks />
            <p className="ml-3">100% mat. Alojamiento</p>
          </span>
          {/* <span className="flex items-center">
            <RiCommunityFill />
            <p className="ml-3">123</p>
          </span> */}
        </div>
      </div>
    </div>
  )
}
