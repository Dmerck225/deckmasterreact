import React from 'react';

const NewsCard = ({ image, alt, title, description }) => {
    return (
        <div className="news-card">
            <section className="news-card-img">
                <img src={image} alt={alt}></img>
            </section>
            <section className="news-card-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
        </div>
    );
};

export default NewsCard;
