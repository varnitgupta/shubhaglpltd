import React from 'react';
import '../componentcss/footer.css'

const Footer = ({ data }) => {
    return (
        <div className="footer-column">
            <h3>{data.heading}</h3>
            <ul className="footer-list">
                {data.titles.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Footer;
