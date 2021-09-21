import React from 'react'
import { FaSchool } from 'react-icons/fa'
import { GoFileDirectory } from 'react-icons/go'
import { FaYandexInternational } from 'react-icons/fa'
import { GiUpgrade } from 'react-icons/gi'
import { MdAnnouncement } from 'react-icons/md'
import { statuColors } from '../../../../utils/status-request'

export default function RequestCard({ item, onClick }) {
  const { created, status } = item || {}
  const {
    oferta: { development_area_name, education_level_name },
    institucion: { name },
  } = item?.oferta_academica || { oferta: {}, institucion: {} }

  const { name: convocatoriaName, type } = item?.convocatoria || {}

  return (
    <div onClick={() => onClick(item)}>
      <span
        className={`text-gray-600 card1 w-full bg-white grid md:grid-cols-6 grid-cols-1 p-4 border-r-8 ${statuColors[status]} shadow cursor-pointer md:hover:w-11/12 hover:shadow-lg transition-all`}
      >
        <div className="flex justify-center items-center md:border-r border-gray-300 border-opacity-40 mb-4 md:m-0">
          <p className="md:w-24 w-full md:text-left text-center">
            {development_area_name}
          </p>
        </div>
        <div className="pl-8 grid grid-rows-3 sm:grid-flow-col gap-y-2 col-span-3 mb-3 md:m-0 justify-center">
          <div className="flex items-center space-x-1">
            <FaSchool />
            <p className="text-xs w-56">{name}</p>
          </div>
          <div className="flex items-center space-x-1">
            <GoFileDirectory />
            <p className="text-xs">{development_area_name}</p>
          </div>
          <div className="flex items-center space-x-1">
            <FaYandexInternational />
            <p className="text-xs">{type}</p>
          </div>
          <div className="flex items-center space-x-1">
            <GiUpgrade />
            <p className="text-xs">{education_level_name}</p>
          </div>
          <div className="flex items-center space-x-1">
            <MdAnnouncement />
            <p className="text-xs">{convocatoriaName}</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center md:items-end space-y-2">
          <div className="flex flex-col md:items-end items-center">
            <p className="text-xs text-gray-500">Fecha de envío</p>
            <p className="text-xs">{created}</p>
          </div>
          <div className="flex flex-col md:items-end items-center">
            <p className="text-xs text-gray-500">Estatus</p>
            <p className="text-xs text-right">{status}</p>
          </div>
        </div>
      </span>
    </div>
  )
}
