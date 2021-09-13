import { BiCalendar } from 'react-icons/bi'
import { FaRegClock } from 'react-icons/fa'
import { MdPublish } from 'react-icons/md'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { diffTwoTimes } from '../../../../utils/diff-two-times'
import Label from '../../atoms/label'
import { setRecent } from '../../../../../redux/slices/announcement/_actions'

export default function AnnouncementCard({ item = {} }) {
  const history = useHistory()
  const dispatch = useDispatch()

  const redirect = (payload) => {
    dispatch(setRecent(payload))
    history.push(
      !payload.publicada ? `/query-result?id=${id}` : `/all-applied/${id}`,
    )
  }

  const {
    id,
    name,
    end_date,
    image_url,
    status,
    publicada,
    type: { color, name: typeName },
  } = item
  const isClose = status.toLowerCase().trim().includes('cerrada')
  const isPublished = Boolean(publicada)

  // formatiando fecha
  let date = new Date(end_date)
  date = date.toLocaleDateString('en-GB')

  return (
    <div
      onClick={() => redirect(item)}
      className="flex flex-col justify-between h-full cursor-pointer"
    >
      <div className="relative flex justify-center">
        <div className="absolute text-center w-40" style={{ top: -13 }}>
          <Label bgColor={color} title={typeName} />
        </div>
      </div>

      <div className="overflow-hidden h-full">
        <div>
          <img
            className="w-full"
            src={image_url}
            style={{ height: '140px' }}
            alt="Sunset in the mountains"
          />
        </div>

        <div className="px-6 py-2 h-42 sm:h-48 md:h-48 lg:h-44">
          <div
            className="font-bold mb-4 text-center"
            style={{
              color: '#002F6C',
              fontSize: '15px',
            }}
          >
            <p>{name}</p>
          </div>
          <span style={{ fontSize: '13px' }}>
            <div className="flex flex-wrap sm:justify-start justify-center mb-2">
              <BiCalendar size={17} className="text-gray-600" />
              <p className="mr-2 ml-1">
                {isClose ? 'Convocatoria cerrada:' : 'Cierre de convocatoria:'}
              </p>
              <p className="text-gray-700"> {date}</p>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center">
              {!isClose && (
                <>
                  <div className="flex flex-wrap sm:justify-start justify-center mb-2">
                    <FaRegClock size={15} className="text-gray-600 ml-0.5" />
                    <p className="mr-2 ml-1.5">Tiempo restante: </p>
                    <p style={{ color: '#FF941F' }}>
                      {' '}
                      {diffTwoTimes(end_date)}{' '}
                    </p>
                  </div>
                </>
              )}

              {isPublished && (
                <>
                  <div className="flex flex-wrap sm:justify-start justify-center">
                    <MdPublish size={20} className="text-gray-600" />
                    <p className="mr-2 ml-1">Becados publicados:</p>
                    <p className="invisible"> invisible </p>
                  </div>
                </>
              )}
            </div>
          </span>
        </div>

        <div className="pt-4 text-center">
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
  )
}
