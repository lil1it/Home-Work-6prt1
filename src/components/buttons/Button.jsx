import React from 'react';
import styles from "./Button.module.css"

const Button = ({children,color}) => {

    return (
        
            <button className={styles.addBtn} style={{background:`${color}`}}>{children}</button>
    );
};

export default Button;