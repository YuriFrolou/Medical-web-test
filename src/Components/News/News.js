import React from 'react';
import styles from "./News.module.css";
import NewsInMedicine from "../../images/newInMedicine.jpg";
import Relations from "../../images/relations.jpg";
import Digital from "../../images/digital.jpg";
import MyCarousel from '../MyCarousel/MyCarousel';
const style={
    captionStyle:{
        fontSize:'38px'
    },
    linkStyle:{
        color:'#fff',
        fontSize: '24px'
    }
};
const data = [
    {
        image: NewsInMedicine,
        caption: "Новые технологии в медицине",
        description: "Подробнее...",
        captionStyle:style.captionStyle,
        linkStyle: style.linkStyle
    },
    {
        image: Relations,
        caption: "УЗИ-технологии в анестезиологии",
        description: "Подробнее...",
        captionStyle:style.captionStyle,
        linkStyle: style.linkStyle
    },
    {
        image: Digital,
        caption: "Информационные технологии в медицине",
        description: "Подробнее...",
        captionStyle:style.captionStyle,
        linkStyle: style.linkStyle
    }
];


const News = () => {
    return (
        <div className={styles.news} id="courses">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h2 className={styles.newsHeading}>Новости и события</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <MyCarousel data={data} height='600px'/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default News;