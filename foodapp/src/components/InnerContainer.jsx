import React from 'react';
import styles from './InnerContainer.module.css';
const InnerContainer = ({children}) => {
    return (
        <div className={styles.InnerContainerClass}>
            {children}
        </div>
    );
};

export default InnerContainer;