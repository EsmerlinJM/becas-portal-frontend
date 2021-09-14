import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { resendVerification } from '../../shared/services/user'

export default function useVerification() {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const action = handleSubmit(async (data) => {
    setLoading(true)
    await toast.promise(resendVerification(data.email), {
      loading: 'Enviando correo...',
      success: () => {
        reset()
        setModal(false)
        setLoading(false)
        return <b>Correo de verificación enviado!</b>
      },
      error: (error) => {
        setLoading(false)

        return <b>{error.response.data.message}</b>
      },
    })
  })

  return [
    { errors, loading, modal },
    { register, action, watch,handleSubmit, setModal }
  ]
}
