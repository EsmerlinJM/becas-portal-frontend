import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { login } from '../../shared/services/user'
import { setAuth } from '../../shared/utils/auth'

export default function useActions(history) {
  const [loading, setLoading] = useState(false)
  const [logErr, setLogErr] = useState(null)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const action = handleSubmit(async (data) => {
    setLoading(true)
    let response = false

    await toast.promise(
      login(data),
      {
        loading: 'ACCEDIENDO...',
        success: (rsp) => {
          response = rsp
          return <b>Crece tu talento, crece el país!</b>
        },
        error: (error) => {
          const data = error.response
          setLogErr(data?.message || null)
          setLoading(false)
          return <b> {message}</b>
        },
      },
      {
        success: {
          duration: 500,
        },
        error: {
          duration: 5000,
        },
      },
    )

    if (response) {
      setLoading(false)
      setAuth(response, history)
    }
  })

  return [
    { errors, loading, logErr },
    { action, register },
  ]
}
