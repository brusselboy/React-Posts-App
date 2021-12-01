import React from 'react';
import Button from "./Button";
import {NavLink} from "react-router-dom";

const HeaderLinks = () => {
    return (
        <div className={'header__links'}>
            <ul>
                <li><Button>Ссылки</Button>
                    <ul>
                        <li><NavLink to={'/my-posts'}>Мои посты</NavLink></li>
                        <li><NavLink to={'/internet-posts'}>Интернет посты</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default HeaderLinks;