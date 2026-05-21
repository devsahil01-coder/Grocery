import React from "react";
import Banner from "../Banner/Banner";
import { productsLists } from "../ProductLists/ProductsLists";
import Card from "../Card/Card";
const CategoryPage = ({ title, bgImage, categories=[]}) => {

  const productRender = categories.map((product) => (
    <Card image={product.image} name={product.name} price={product.price} />
  ));
  
  
  return (
    <div>
      <Banner title={title} bgImage={bgImage} />
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productRender}
      </div>
    </div>
  );
};

export default CategoryPage;
