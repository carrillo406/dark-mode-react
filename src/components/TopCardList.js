import React from 'react';
import Card from './Card';
import './styles/topCardList.css';

const cardListData = [
    {
        id:1,
        username: '@carrillo',
        followers: 1524,
        todayFollwers:12,
        icon: 'images/icon-facebook.svg',
        name:'facebook'
    }, 
    {
        id:2,
        username: '@cesar',
        followers: 15,
        todayFollwers: 20,
        icon: 'images/icon-twitter.svg',
        name:'twitter'
    } , 
    {
        id:3,
        username: '@ismael',
        followers: 258,
        todayFollwers: 9,
        icon: 'images/icon-instagram.svg',
        name:'instagram'
    },
    {
        id:4,
        username: '@nayeli',
        followers: '15K',
        todayFollwers: -1,
        icon: 'images/icon-youtube.svg',
        name:'youtube'
    }
];

function TopCardList(){
    return(
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardListData.map( (cardData) => (
                            <Card 
                                key={cardData.id} 
                                {...cardData}
                            />
                        ))
                    }

                    {/* <article className="card twitter">
                        <p className="card-title">
                            <img src="images/icon-twitter.svg" alt="" />
                            @nathanf
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">28K</span>
                            <span className="card-followers-title">followers</span>
                        </p>
                        <p className="card-today">
                            <img src="images/icon-up.svg" alt="" />
                            12 Today
                        </p>
                    </article>
                    <article className="card instagram">
                        <p className="card-title">
                            <img src="images/icon-instagram.svg" alt="" />
                            @nathanf
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">19K</span>
                            <span className="card-followers-title">followers</span>
                        </p>
                        <p className="card-today">
                            <img src="images/icon-up.svg" alt="" />
                            12 Today
                        </p>
                    </article>
                    <article className="card youtube">
                        <p className="card-title">
                            <img src="images/icon-youtube.svg" alt="" />
                            @nathanf
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">11K</span>
                            <span className="card-followers-title">followers</span>
                        </p>
                        <p className="card-today">
                            <img src="images/icon-up.svg" alt="" />
                            12 Today
                        </p>
                    </article> */}
                </div>
            </div>
        </section>        
    );
}

export default TopCardList;