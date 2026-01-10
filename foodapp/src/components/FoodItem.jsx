import React from 'react';
import styles from './FoodItem.module.css';

const FoodItem = ({food,setFoodId}) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
            <img className={styles.itemImage} src={food.image} alt={food.title}/>
            <button onClick={()=>{
                setFoodId(food.id);
            }} className={styles.itemButton}>View Recipe</button>
        </div>
    );
};

export default FoodItem;