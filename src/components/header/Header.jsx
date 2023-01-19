import React from 'react';
import Button from '../buttons/Button';
import styles from "./Header.module.css"


const Header = () => {
   
    return (
<div >
       <nav className={styles.headerNav}> 
          <h1 className={styles.headerTitle}> Favorite movies </h1>
        <Button color='orange'> ADD MOVIES </Button>
       </nav>
 </div>
    );
};

export default Header;