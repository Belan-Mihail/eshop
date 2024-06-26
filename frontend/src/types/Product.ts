export type Product = {
    name: string
    slug: string
    image: string
    category: string
    subcategory: string
    brand: string
    price: number
    discount?: number 
    discount_start?: Date
    discount_end?: Date
    countInStock: number
    description: string
    rating: number
    numReviews: number
  }