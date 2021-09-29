import PropTypes from 'prop-types'
import ComposeMsg from '../compose-msg'
import Editor from '../../../../../../img/edit@2x.png'

import { useState } from 'react'

function ComposeMsgButton({ onAction }) {
  const [open, setOpen] = useState(false)

  const create = async (data) => {
    try {
      await onAction(data)
      setOpen(false)
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center space-x-1 bg-white text-xs outline-none xs:w-auto sm:w-auto  w-full  text-gray-500 font-semibold border border-red-600 py-2 px-4 rounded-3xl hover:bg-red-50 transition"
      >
        <img className="w-4" src={Editor} alt="redactar" />
        <p className="uppercase text-red-600">Redactar nuevo mensaje</p>
      </button>
      <ComposeMsg
        isModal
        isOpen={open}
        onClose={(close) => setOpen(close)}
        onAction={create}
      />
    </>
  )
}

ComposeMsgButton.propTypes = {
  onAction: PropTypes.func.isRequired,
}

export default ComposeMsgButton
