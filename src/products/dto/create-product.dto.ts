export class CreateProductDto {
  name: string
  type: number | null
  artist_owner: string | null
  price: string
  local: string
  description: string
}
