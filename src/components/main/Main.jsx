import React from 'react';
import styles from './Main.module.css'
import {movies} from "../helpers/movies"
import MovieItem from '../movieItem/MovieItem';


const Main = () => {
    return (
        <ul className={styles.movieList}>
            {movies.map((movie,index) => {
                return <MovieItem data={movie} key={index}/>
            })}
      
      </ul>
);
};

export default Main;