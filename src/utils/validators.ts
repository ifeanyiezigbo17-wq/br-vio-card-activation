// TODO: Add utility validators

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const validateCPF = (cpf: string): boolean => {
  // TODO: Implement proper CPF validation
  return cpf.length === 11
}

export const validateCardNumber = (cardNumber: string): boolean => {
  // TODO: Implement Luhn algorithm for card validation
  return cardNumber.length >= 13 && cardNumber.length <= 19
}