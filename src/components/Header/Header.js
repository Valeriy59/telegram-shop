import React from 'react';
import {Button} from "../Button/Button";
import s from './Header.module.css'

export const Header = () => {

    const tg = window.Telegram.WebApp

    const onClose = () => {
        tg.close()
    }

    return (
        <div className={s.header}>
            <Button onClick={onClose}>Close</Button>
            <span className={s.username}>
                {tg.initDataUnsafe?.user?.username}
            </span>

        </div>
    );
};
