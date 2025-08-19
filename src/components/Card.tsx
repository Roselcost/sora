import styles from "@/styles/Card.module.scss";
import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className={styles['section']}>
    <div className={styles['section__title']}>
      <h2>{title}</h2>
    </div>
    <div className={styles['section__content']}>{children}</div>
  </div>
);

export default Card;
