import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ResturantDetails() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

 
    const getMenuItem = async () => {
        let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${id}`);
        let data = await response.json();
        setRecipe(data.recipes);
      } 
    

    useEffect(() => {
      getMenuItem();
    }, [id]);

  return (
    <div className='row'>
    {
      recipe.map((ele)=>{
            return(
                <div className='col-md-4' key={ele.id}>
                    <h2>{ele.title}</h2>
                    <img src={ele.image_url} className='w-100'/>
                </div>
               )
            }) }

   </div>
  );
}
