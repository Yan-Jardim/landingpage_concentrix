import { z } from 'zod'
import { isValidCPF, isValidCNPJ, isValidDate, removeNonNumeric } from '../utils/masks'

export const loginSchema = z
  .object({
    profileType: z.enum(['PF', 'PJ']),
    cpfCnpj: z.string().min(1, 'CPF/CNPJ é obrigatório'),
    birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
  })
  .superRefine((data, ctx) => {
    const numbers = removeNonNumeric(data.cpfCnpj)
    
    if (data.profileType === 'PF') {
      if (numbers.length === 11) {
        if (!isValidCPF(data.cpfCnpj)) {
          ctx.addIssue({
            code: 'custom',
            message: 'CPF inválido',
            path: ['cpfCnpj'],
          })
        }
      } else if (numbers.length > 0 && numbers.length < 11) {
        ctx.addIssue({
          code: 'custom',
          message: 'CPF deve ter 11 dígitos',
          path: ['cpfCnpj'],
        })
      }
    }
    
    if (data.profileType === 'PJ') {
      if (numbers.length === 14) {
        if (!isValidCNPJ(data.cpfCnpj)) {
          ctx.addIssue({
            code: 'custom',
            message: 'CNPJ inválido',
            path: ['cpfCnpj'],
          })
        }
      } else if (numbers.length > 0 && numbers.length < 14) {
        ctx.addIssue({
          code: 'custom',
          message: 'CNPJ deve ter 14 dígitos',
          path: ['cpfCnpj'],
        })
      }
    }

    const dateNumbers = removeNonNumeric(data.birthDate)
    if (dateNumbers.length === 8) {
      if (!isValidDate(data.birthDate)) {
        ctx.addIssue({
          code: 'custom',
          message: 'Data de nascimento inválida',
          path: ['birthDate'],
        })
      }
    } else if (dateNumbers.length > 0 && dateNumbers.length < 8) {
      ctx.addIssue({
        code: 'custom',
        message: 'Data de nascimento deve ter 8 dígitos (DD/MM/AAAA)',
        path: ['birthDate'],
      })
    }
  })

export type LoginFormData = z.infer<typeof loginSchema>

