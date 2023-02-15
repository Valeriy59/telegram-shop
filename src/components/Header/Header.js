import React from 'react';
import {Button} from "../Button/Button";
import s from './Header.module.css'
import {useTelegram} from "../../hooks/useTelegram";

export const Header = () => {

    const {user, onClose} = useTelegram()

    return (
        <div className={s.header}>
            <Button onClick={onClose}>Close</Button>
            <span className={s.username}>
                {user.username}
            </span>

        </div>
    );
};
