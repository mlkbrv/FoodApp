import React from 'react';
import FoodItem from "./FoodItem.jsx";

const FoodList = ({ foodData = [], setFoodId }) => {
    return (
        <div>
            {foodData.map((food) => (
                <div key={food.id}>
                    <FoodItem setFoodId={setFoodId} food={food} />
                </div>
            ))}
        </div>
    );
};


export default FoodList;