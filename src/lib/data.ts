import { TProduct } from "@/types/Product-Type";


let products: TProduct[] = [];

const getAllProducts = async() => {
  try{
    return products
  }catch(err){
    throw new Error("There is an Error");
  }
};

const getProductBySlug = async (slug: string) => {
  try{
    const data = products.find(item => item.slug === slug)
    return data
  }catch(err) {
    throw new Error("There is an Error")
  }

};

const createProduct =async (product: TProduct) => {
  products.push({...product});
};

const deleteProduct = (id: string) => {
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

export { getAllProducts, getProductBySlug, editProduct, createProduct, deleteProduct };
