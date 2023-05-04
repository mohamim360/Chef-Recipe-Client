import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';

const Detail = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://chef-server-mohamim360.vercel.app/data/${id}`)
      .then(res => res.json())
      .then(data => {
        setChef(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, [id]);

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (!chef) {
    return <div>Loading...</div>;
  }

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    toast.success('Added to favorites!');
  }

  return (
    <div>
      <div className="banner">
        <img style={{ width: '25%' }} src={chef.picture} alt={chef.name} />
        <h1>{chef.name}</h1>
        <p>{chef.bio}</p>
        <div className="stats">
          <p>Likes: {chef.likes}</p>
          <p>Years of experience: {chef.years_of_experience}</p>
          <p>Number of recipes: {chef.recipes.length}</p>
        </div>
      </div>
      <div className="recipe-container">
        {chef.recipes.map(recipe => (
          <div className="card" key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>{recipe.cooking_method}</p>
            <p>Rating: 3.3</p>
            <button disabled={isFavorite} onClick={handleFavoriteClick}>
              {isFavorite ? 'Added to favorites!' : 'Favorite'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
