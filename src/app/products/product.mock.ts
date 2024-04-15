export const productsList:Product[] = [
{id: 1,name: "Lavandina", price: 10, description:"1Litro"},
{id: 2,name: "Detergente", price: 7, description:"120 Lavados"},
{id: 3,name: "Limpia Vidrios", price: 8, description:"Vidrios Transparentes"},
{id: 4,name: "Quita Grasa", price: 5},
{id: 5,name: "Perfumina", price: 2, description:"El olor a campo mas realista"}
]

export interface Product{

    id: number | string;
    name: string,
    price:number,
    description?: string
}