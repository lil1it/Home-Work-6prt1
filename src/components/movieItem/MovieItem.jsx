import React from 'react';
import Button from '../buttons/Button';
import  styles from  "./MovieItem.module.css"

const MovieItem = ({data}) => {
    return (
        <li className={styles.movieElement}>
        <div className={styles.movieElementImage}>
          <img
            src={data.img}
            alt=''
          />
        </div>
        <div className={styles.movieElementInfo}>
          <h2>{data.title}</h2>
          <p>{data.rating}/5 stars</p>
<Button color="red">DELETE</Button>
<Button color="rgb(2, 2, 141)">EDIT</Button>
        </div>
      </li>
    );
};

export default MovieItem;