import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGid from "./GifGid";

const GifExpertApp = () => {
  const [categories, setcategories] = useState([""]);

  /*    const handledSubmit = (e)=>{
        e.preventDefault();
        setcategories(category => ['hola', ...category])
        //setcategories(['hola', ...categories])
    }*/

  return (
    <>
      <div>
        <h2>Gif Expert App</h2>
        <AddCategory setcategories={setcategories} />
        <hr />
        <div>
            {categories.map((category) => (
              <GifGid key={category} category={category} />
            ))}
          </div>
        
      </div>
    </>
  );
};

export default GifExpertApp;
