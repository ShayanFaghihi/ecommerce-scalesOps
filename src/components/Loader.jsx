import React from "react";
import Container from "./Container";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <Container>
      <div className={styles.loader}></div>
    </Container>
  );
};

export default Loader;
