import React, {useEffect} from 'react';
import styles from './Search.module.css';

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '33bcf9f46e234b2cb16e29fa7276b13f'

const Search = ({foodData, setFoodData}) => {
    const [query, setQuery] = React.useState('pizza');
    
    useEffect(() => {
        const timeOutId = setTimeout(() => {
             async function fetchFood() {
                try {
                    const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
                    if (!res.ok) {
                        throw new Error(`Error: ${res.status} ${res.statusText}`);
                    }
                    const data = await res.json();
                    setFoodData(data.results);
                    console.log(data);
                } catch (error) {
                    console.error("Failed to fetch food data:", error);
                }
            }
            fetchFood();
        }, 500); // Wait 500ms after typing stops

        return () => clearTimeout(timeOutId);
    }, [query]);

    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} type={'text'}
                   value={query}
                   onChange={(e) => setQuery(e.target.value)} />
        </div>
    );
};

export default Search;