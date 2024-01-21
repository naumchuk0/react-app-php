export interface IProductCreate {
    category_id: number,
    name: string,
    description: string,
    images: File,
    price: number,
    quantity: number,
}