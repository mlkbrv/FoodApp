import React, {useEffect, useState} from 'react';
import styles from './FoodDetails.module.css'
import ItemList from "./ItemList.jsx";

const FoodDetails = ({foodId}) => {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = '33bcf9f46e234b2cb16e29fa7276b13f'
    useEffect(() => {
        async function fetchFoodDetails() {
            try {
                setIsLoading(true);
                const res = await fetch(`${URL}?apiKey=${API_KEY}`);
                if (!res.ok) {
                    throw new Error(`Error: ${res.status} ${res.statusText}`);
                }
                const data = await res.json();
                console.log(data);
                setFood(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch food details:", error);
                setIsLoading(false);
            }
        }

        if (foodId) {
            fetchFoodDetails();
        }
    }, [foodId]);
    return (
        <div className={styles.recipeCard}>
            <div>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt={food.title}/>
            </div>
            <div className={styles.recipeDetails}>
                <span>
                    <strong>🕛 {food.readyInMinutes} Minutes</strong>
                </span>
                <span>
                    <strong>👨‍👩‍👧‍👦 Servings: {food.servings}</strong>
                </span>
                <span>
                    {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
                </span>
                <span>
                    {food.vegan ? "🐮 Vegan" : ""}
                </span>
            </div>
            <div>
                <span>
                    {food.pricePerServing ? `💲 ${(food.pricePerServing / 100).toFixed(2)} Per Serving` : ""}
                </span>
            </div>
            <ItemList food={food} isLoading={isLoading} />
            <h2>Instructions</h2>
            <div className={styles.recipeInstructions}>
                <ol>
                    {isLoading ? (
                         <p>Loading...</p> 
                    ) : (
                         food.analyzedInstructions && food.analyzedInstructions.length > 0 ? (
                            food.analyzedInstructions[0].steps.map((step) => (
                                <li key={step.number}>{step.step}</li>
                            ))
                        ) : (
                            <li>No instructions available.</li>
                        )
                    )}
                </ol>
            </div>
        </div>
    );
};

export default FoodDetails;