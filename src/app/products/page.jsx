import { join } from 'path';
import React from 'react';
import ProductCard from '../components/productCard';


const getProduct = async() =>{
 const res = await fetch('http://localhost:5000/products')
 return res.json()
}


const page = async() => {

    const products = await getProduct()
    return (
        <div className=' grid grid-cols-4 gap-4 mt-4 conatiner mx-auto'>
     
            {
                products.map(product =><ProductCard key={product.id} product={product}></ProductCard>
                )
            }
            
        </div>
    );
};

export default page;