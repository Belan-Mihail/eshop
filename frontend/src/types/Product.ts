export type Product = {
    name: string
    slug: string
    image: string
    category: string
    subcategory: string
    brand: string
    price: number
    discount?: number 
    discount_period?: Date
    countInStock: number
    description: string
    rating: number
    numReviews: number
  }