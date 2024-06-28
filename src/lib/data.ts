import { ICategory, TCategory, TProduct } from "@/types/Product-Type";

let products: TProduct[] = [
  {
    _id: "0",
    name: "Beautya Prestige la Mousse Micellaire",
    image: "/images/product image.png",
    slug: "0",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "250",
    category: "skin_care",
    isFavorite: false,
    bestSeller : true
  },
  {
    _id: "1",
    name: "Beautya Prestige la Mousse Micellaire",
    image: "/images/product image_6.png",
    slug: "1",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "280",
    category: "skin_care",
    isFavorite: false,
    bestSeller : true
  },
  {
    _id: "2",
    name: "Beautya Prestige la Mousse Micellaire",
    image: "/images/product image_4.png",
    slug: "2",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "320",
    category: "skin_care",
    isFavorite: false,
    bestSeller : true
  },
  {
    _id: "3",
    name: "Beautya Prestige la Mousse Micellaire",
    image: "/images/product image.png",
    slug: "0",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "250",
    category: "skin_care",
    isFavorite: true,
    bestSeller : false
  },
  {
    _id: "4",
    name: "Beautya Prestige la Mousse Micellaire",
    image: "/images/product image_6.png",
    slug: "1",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "280",
    category: "skin_care",
    isFavorite: false,
    bestSeller : false
  },
  {
    _id: "5",
    name: "Beautya Prestige la Mousse Micellaire",
    image: "/images/product image_4.png",
    slug: "2",
    description: "Anti-Aging Face Serum, with Purifying French Water Lily",
    price: "320",
    category: "skin_care",
    isFavorite: true,
    bestSeller : false
  },
];

let product_categories: ICategory[] = [
  {
    _id: "00",
    name: "Skin Care",
    image: "/images/skincare image.png",
    slug: "skin_care",
  },
  {
    _id: "10",
    name: "Make Up",
    image: "/images/make up image.png",
    slug: "make_up",
  },
  {
    _id: "20",
    name: "Gifts & Sets",
    image: "/images/gifts image.png",
    slug: "gifts_and_sets",
  },
];



const getCategories = async () => {
  try {
    return product_categories;
  } catch (err) {
    throw new Error("There is an Error");
  }
};

const getAllProducts = async () => {
  try {
    return products;
  } catch (err) {
    throw new Error("There is an Error");
  }
};

const getProductBySlug = async (slug: string) => {
  try {
    const data = products.find((item) => item.slug === slug);
    return data;
  } catch (err) {
    throw new Error("There is an Error");
  }
};

const getProductByCategory = async (category: TCategory) => {
  try {
    const data =
      category?.length > 0
        ? products.filter((item) => item.category === category)
        : products;
    return data;
  } catch (err) {
    throw new Error("There is an Error");
  }
};

const createProduct = async (product: TProduct) => {
  products.push({ ...product });
};

const deleteProduct = (id: string): void => {
  const isThere = products.find((item) => item._id === id);
  if (isThere) products = products.filter((item) => item._id !== id);
  else throw new Error("There is no such an id");
};

const editProduct = (id: string, name: string, description: string) => {
  const finded = products.find((item) => item._id === id);

  if (!finded) {
    throw new Error("There is no such a data");
  } else {
    finded.description = description;
    finded.name = name;
  }
};

const manageFavoriteList = (product: TProduct) => {
  console.log(product)
  try {
    if (product.isFavorite) {
      const index = products.findIndex(item => item._id === product._id)
      products[index] = {...product , isFavorite :false}
    } else {
      products.push({...product , isFavorite :true})
    }
  } catch (err) {
    throw new Error("There is an Error");
  }
};

const getFavorites = async () => {

  try {
    return []
    // return products.filter(item => !!item.isFavorite );
  } catch (err) {
    throw new Error("There is an Error");
  }
};

const getBestSellers = async () => {

  try {
    return products.filter(item => !!item.bestSeller );
  } catch (err) {
    throw new Error("There is an Error");
  }
};

export {
  getCategories,
  getFavorites,
  getAllProducts,
  getProductBySlug,
  getProductByCategory,
  editProduct,
  createProduct,
  deleteProduct,
  manageFavoriteList,
  getBestSellers
};
