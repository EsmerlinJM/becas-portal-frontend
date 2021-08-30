import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { createUser } from '../../shared/services/user'

export default function useAction() {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm()

  const action = handleSubmit(async (data) => {
    setLoading(true)
    let isSuccess = false

    await toast.promise(createUser(data), {
      loading: 'Registrando usuario...',
      success: () => {
        isSuccess = true
        return <b>Usuario registrado exitosamente!</b>
      },
      error: (error) => {
        setLoading(false)
        const {
          data: {
            errors: { email },
          },
        } = error.response
        return (
          <b>
            {email.length
              ? email.map((em) => <p> {em} </p>)
              : 'Este email ya existe!'}
          </b>
        )
      },
    })

    isSuccess &&
      setTimeout(() => {
        setLoading(false)
        setModal(true)
        setValue('name', '')
        setValue('last_name', '')
        setValue('email', '')
        setValue('password', '')
        setValue('password_confirmation', '')
      }, 500)
  })

  return [
    { errors, loading, modal },
    { register, action, watch, setModal },
  ]
}
