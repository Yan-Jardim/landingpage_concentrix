
export const removeNonNumeric = (value: string): string => {
  return value.replace(/\D/g, '')
}

export const maskCPF = (value: string): string => {
  const numbers = removeNonNumeric(value)
  
  if (numbers.length <= 3) {
    return numbers
  }
  if (numbers.length <= 6) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3)}`
  }
  if (numbers.length <= 9) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`
  }
  return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`
}


export const maskCNPJ = (value: string): string => {
  const numbers = removeNonNumeric(value)
  
  if (numbers.length <= 2) {
    return numbers
  }
  if (numbers.length <= 5) {
    return `${numbers.slice(0, 2)}.${numbers.slice(2)}`
  }
  if (numbers.length <= 8) {
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`
  }
  if (numbers.length <= 12) {
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`
  }
  return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`
}

export const maskCPFCNPJ = (value: string): string => {
  const numbers = removeNonNumeric(value)
  
  if (numbers.length <= 11) {
    return maskCPF(value)
  }
  return maskCNPJ(value)
}

export const maskDate = (value: string): string => {
  const numbers = removeNonNumeric(value)
  
  if (numbers.length <= 2) {
    return numbers
  }
  if (numbers.length <= 4) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2)}`
  }
  return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`
}

export const isValidCPFLength = (value: string): boolean => {
  const numbers = removeNonNumeric(value)
  return numbers.length === 11
}

export const isValidCNPJLength = (value: string): boolean => {
  const numbers = removeNonNumeric(value)
  return numbers.length === 14
}

export const isValidDateLength = (value: string): boolean => {
  const numbers = removeNonNumeric(value)
  return numbers.length === 8
}

export const isValidCPF = (value: string): boolean => {
  const numbers = removeNonNumeric(value)
  
  if (numbers.length !== 11) return false
  
  if (/^(\d)\1{10}$/.test(numbers)) return false
  
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += Number.parseInt(numbers.charAt(i), 10) * (10 - i)
  }
  let digit = 11 - (sum % 11)
  if (digit >= 10) digit = 0
  if (digit !== Number.parseInt(numbers.charAt(9), 10)) return false
  
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += Number.parseInt(numbers.charAt(i), 10) * (11 - i)
  }
  digit = 11 - (sum % 11)
  if (digit >= 10) digit = 0
  if (digit !== Number.parseInt(numbers.charAt(10), 10)) return false
  
  return true
}

export const isValidCNPJ = (value: string): boolean => {
  const numbers = removeNonNumeric(value)
  
  if (numbers.length !== 14) return false
  
  if (/^(\d)\1{13}$/.test(numbers)) return false
  
  let length = numbers.length - 2
  let sequence = numbers.substring(0, length)
  let digits = numbers.substring(length)
  let sum = 0
  let pos = length - 7
  
  for (let i = length; i >= 1; i--) {
    sum += Number.parseInt(sequence.charAt(length - i), 10) * pos--
    if (pos < 2) pos = 9
  }
  
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== Number.parseInt(digits.charAt(0), 10)) return false
  
  length = length + 1
  sequence = numbers.substring(0, length)
  sum = 0
  pos = length - 7
  
  for (let i = length; i >= 1; i--) {
    sum += Number.parseInt(sequence.charAt(length - i), 10) * pos--
    if (pos < 2) pos = 9
  }
  
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== Number.parseInt(digits.charAt(1), 10)) return false
  
  return true
}

export const isValidDate = (value: string): boolean => {
  const numbers = removeNonNumeric(value)
  
  if (numbers.length !== 8) return false
  
  const day = Number.parseInt(numbers.substring(0, 2), 10)
  const month = Number.parseInt(numbers.substring(2, 4), 10)
  const year = Number.parseInt(numbers.substring(4, 8), 10)
  
  const currentYear = new Date().getFullYear()
  if (year < 1900 || year > currentYear) return false
  
  if (month < 1 || month > 12) return false
  
  const daysInMonth = new Date(year, month, 0).getDate()
  if (day < 1 || day > daysInMonth) return false
  
  const date = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(23, 59, 59, 999)
  if (date > today) return false
  
  return true
}
