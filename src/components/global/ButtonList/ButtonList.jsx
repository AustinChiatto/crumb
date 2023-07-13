import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import styles from "./ButtonList.module.scss";

const ButtonList = () => {
    return (
        <ul className={styles.ButtonList}>
            <li className={styles.ButtonListItem}>
                <ButtonPrimary
                    btnLabel="Blocks"
                    isActive={true}
                ></ButtonPrimary>
            </li>
            <li className={styles.ButtonListItem}>
                <ButtonPrimary btnLabel="Templates"></ButtonPrimary>
            </li>
        </ul>
    );
};

export default ButtonList;
