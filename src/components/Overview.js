import React from 'react';
import './styles/overview.css';
import CardSmall from './CardSmall';

const cardSmallList = [
    {
        icon: 'images/icon-facebook.svg',
        pagesViews: '87',
        growth: 3,
        key:1
    },
    {
        icon: 'images/icon-twitter.svg',
        pagesViews: '52',
        growth: 3,
        key:2
    },
    {
        icon: 'images/icon-instagram.svg',
        pagesViews: '303',
        growth: 117,
        key:3
    },
    {
        icon: 'images/icon-youtube.svg',
        pagesViews: '1500',
        growth: 165,
        key:4
    }
];
export default function Overview(){
    return(
            <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                <div className="grid">
                    {
                        cardSmallList.map(({icon, pagesViews, growth, key}) => (
                            <CardSmall 
                                icon={icon}
                                key={key}
                                pagesViews={pagesViews}
                                growth={growth}
                            />
                        ))
                    }
                </div>
            </div>
        </section>        
    );
}
