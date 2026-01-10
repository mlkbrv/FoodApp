import React from 'react';
import Item from "./Item.jsx";

const ItemList = ({ food, isLoading }) => {
    return (
        <div>
            {isLoading ? (
                <p>Loading ingredients...</p>
            ) : (
                <div>
                    <h2>Ingredients</h2>
                    {food.extendedIngredients.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemList;