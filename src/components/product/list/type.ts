export interface IProductItem {
    id: number,
    category_id: number,
    name: string,
    description: string,
    product_images: IProductImage[],
    price: number,
    quantity: number,
}

export interface IProductImage {
    id: number,
    product_id: number,
    name: string,
}