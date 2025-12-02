import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginFormData } from '../../validation/loginSchema'
import { maskCPF, maskCNPJ, maskDate } from '../../utils/masks'
import Button from '../Button'
import Input from '../Input'
import {
  LoginCard,
  ProfileTypeLabel,
  ToggleContainer,
  ToggleButton,
  FormGroup,
  LastFormGroup,
  SuccessMessage,
} from './styles'

type ProfileType = 'PF' | 'PJ'

const LoginForm: React.FC = () => {
  const [profileType, setProfileType] = useState<ProfileType>('PF')
  const [showSuccess, setShowSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      profileType: 'PF',
      cpfCnpj: '',
      birthDate: '',
    },
  })

  const cpfCnpjValue = watch('cpfCnpj')
  const birthDateValue = watch('birthDate')

  const handleProfileTypeChange = (type: ProfileType): void => {
    setProfileType(type)
    setValue('profileType', type)
    setValue('cpfCnpj', '', { shouldValidate: false })
    setShowSuccess(false)
  }

  const handleCPFCNPJChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    const maskedValue = profileType === 'PF' ? maskCPF(value) : maskCNPJ(value)
    setValue('cpfCnpj', maskedValue, { shouldValidate: true })
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    const maskedValue = maskDate(value)
    setValue('birthDate', maskedValue, { shouldValidate: true })
  }

  const onSubmit = (_data: LoginFormData): void => {
    setShowSuccess(true)
  }

  return (
    <LoginCard>
      <div>
        <ProfileTypeLabel>Tipo de perfil</ProfileTypeLabel>
        <ToggleContainer>
          <ToggleButton
            type="button"
            isActive={profileType === 'PF'}
            onClick={() => handleProfileTypeChange('PF')}
          >
            Pessoa física
          </ToggleButton>
          <ToggleButton
            type="button"
            isActive={profileType === 'PJ'}
            onClick={() => handleProfileTypeChange('PJ')}
          >
            Pessoa jurídica
          </ToggleButton>
        </ToggleContainer>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {showSuccess && (
          <SuccessMessage>Login simulado com sucesso</SuccessMessage>
        )}

        <FormGroup>
          <Input
            key={`cpf-cnpj-${profileType}`}
            id="cpf-cnpj"
            label={profileType === 'PF' ? 'CPF' : 'CNPJ'}
            type="text"
            placeholder={profileType === 'PF' ? '000.000.000-00' : '00.000.000/0000-00'}
            value={cpfCnpjValue || ''}
            error={errors.cpfCnpj?.message}
            {...register('cpfCnpj')}
            onChange={handleCPFCNPJChange}
          />
        </FormGroup>

        <LastFormGroup>
          <Input
            id="birth-date"
            label="Data nascimento"
            type="text"
            placeholder="00/00/0000"
            value={birthDateValue}
            error={errors.birthDate?.message}
            {...register('birthDate')}
            onChange={handleDateChange}
          />
        </LastFormGroup>

        <Button variant="primary" size="large" type="submit" fullWidth>
          Entrar
        </Button>
      </form>
    </LoginCard>
  )
}

export default LoginForm

