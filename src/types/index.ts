// TODO: Define types for card activation
export interface Card {
  id: string
  cardNumber: string
  status: 'pending' | 'active' | 'blocked'
  activatedAt?: Date
}

export interface User {
  id: string
  email: string
  name: string
  cpf: string
  createdAt: Date
}