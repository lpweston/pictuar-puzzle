import React from "react";
import styles from "./Images.module.css";

const Imagetiles = ({ link }) => {
  return (
    <>
      <div className={styles.imageTiles}>
        <img src={link} alt="stuff" />
      </div>
    </>
  );
};

export default Imagetiles;
