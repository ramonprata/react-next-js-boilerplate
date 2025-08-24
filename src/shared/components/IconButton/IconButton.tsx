"use client";
import styles from "./IconButton.module.scss";
import { JSX } from "react";

export interface IButtonProps {
  icon: JSX.Element;
  active: boolean;
  handleClick: () => void;
}

const IconButton = ({ icon, handleClick, active }: IButtonProps) => {
  return (
    <button
      className={`${styles.action} ${active ? styles.active : ""}`}
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
