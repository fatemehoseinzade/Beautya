export type TProduct ={
    name :string;
    price: string;
    description:string;
    _id:string
    image :string;
    slug:string;
    category:TCategory
    isFavorite : boolean;
    bestSeller : boolean;
}

export type TCategory = 'gifts_and_sets' | 'skin_care' | 'make_up'

export interface ICategory {
    name :string;
    _id:string
    image :string;
    slug:TCategory;
}