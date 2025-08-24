import { JSX } from "react";
import styles from "./HorizontalCardList.module.scss";

export interface IHorizontalCardListProps {
  cards: JSX.Element[];
}

const HorizontalCardList = ({ cards }: IHorizontalCardListProps) => {
  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          {card}
        </div>
      ))}
    </div>
  );
};

export default HorizontalCardList;
