import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
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
import { ProfileType } from './types'

const LoginForm: React.FC = () => {
  const [profileType, setProfileType] = useState<ProfileType>('PF')
  const [showSuccess, setShowSuccess] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      profileType: 'PF',
      cpfCnpj: '',
      birthDate: '',
    },
  })

  const handleProfileTypeChange = (type: ProfileType): void => {
    setProfileType(type)
    setValue('profileType', type)
    setValue('cpfCnpj', '', { shouldValidate: false })
    setShowSuccess(false)
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
          <Controller
            name="cpfCnpj"
            control={control}
            render={({ field }) => (
              <Input
                key={`cpf-cnpj-${profileType}`}
                id="cpf-cnpj"
                label={profileType === 'PF' ? 'CPF' : 'CNPJ'}
                type="text"
                placeholder={profileType === 'PF' ? '000.000.000-00' : '00.000.000/0000-00'}
                value={field.value || ''}
                error={errors.cpfCnpj?.message}
                onChange={(e) => {
                  const value = e.target.value
                  const maskedValue =
                    profileType === 'PF' ? maskCPF(value) : maskCNPJ(value)
                  field.onChange(maskedValue)
                }}
                onBlur={field.onBlur}
              />
            )}
          />
        </FormGroup>

        <LastFormGroup>
          <Controller
            name="birthDate"
            control={control}
            render={({ field }) => (
              <Input
                id="birth-date"
                label="Data nascimento"
                type="text"
                placeholder="00/00/0000"
                value={field.value || ''}
                error={errors.birthDate?.message}
                onChange={(e) => {
                  const value = e.target.value
                  const maskedValue = maskDate(value)
                  field.onChange(maskedValue)
                }}
                onBlur={field.onBlur}
              />
            )}
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