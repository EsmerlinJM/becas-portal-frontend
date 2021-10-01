import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { login, resendVerification } from '../../shared/services/user'
import { setAuth } from '../../shared/utils/auth'

const msgVerify = 'El email no ha sido verificado, por favor verificar su email'
export default function useActions(history) {
  const [loading, setLoading] = useState(false)
  const [logErr, setLogErr] = useState(null)
  const [isVerifyEmail, setVerifyEmail] = useState(false)
  const [verifyEmailStatus, setVerifyEmailStatus] = useState('')

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm()

  const varifyEmail = () => {
    const email = watch('email')
    if (!email) return toast.error('Debe de digitar su email')
    setVerifyEmailStatus('loading')
    return toast.promise(resendVerification(email), {
      loading: 'ENVIANDO...',
      success: () => {
        setVerifyEmailStatus('completed')

        return <b>ENVIADO CORRECTAMENTE!</b>
      },
      error: () => {
        setVerifyEmailStatus('error')
        return <b>Ups, ha ocurrido un error</b>
      },
    })
  }

  const action = handleSubmit(async (data) => {
    setLoading(true)
    await toast.promise(
      login(data),
      {
        loading: 'ACCEDIENDO...',
        success: (rsp) => {
          setAuth(rsp, history)
          return <b>Crece tu talento, crece el país!</b>
        },
        error: (error) => {
          console.log(error)
          const message = error?.response?.data?.message
          msgVerify === message && setVerifyEmail(true)
          setLogErr(message || 'Ha ocurrido un problema')
          setLoading(false)
          return <b>{message || 'Ha ocurrido un problema'}</b>
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
  })

  return [
    { errors, loading, logErr, isVerifyEmail, verifyEmailStatus },
    { action, register, setVerifyEmail, varifyEmail },
  ]
}
