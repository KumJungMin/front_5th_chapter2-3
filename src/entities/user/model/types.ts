export interface User {
  id: number
  username: string
  email: string
  image?: string
  firstName?: string
  lastName?: string
  age?: number
  phone?: string
  address?: {
    city?: string
    state?: string
    address?: string
  }
  company?: {
    name?: string
    title?: string
  }
}
