import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "../css/modules/Carousel.module.css"
import { useState } from 'react';

/**
 * 
 * @param {{structure: {title:string, image:string, description:string}}} param
 * @returns 
 */

export default function Carousel({ structure }) {
    const [activeItem, setActiveItem] = useState(0);

    return (
        <div className={style.my_container}>
            <FontAwesomeIcon
                icon="circle-chevron-left"
                className={`fa-3x px-2 ${style.icon}`}
                onClick={() => setActiveItem((prev) => (prev - 1 + structure.length) % structure.length)}
            />

            {structure.map((item, i) => (
                <div key={i} className={`${style.carousel_container} ${i === activeItem ? style.active : ''}`}>
                    <div>
                        <img className={style.img_carousel} src={item.image} alt="" />
                    </div>
                    <div className={style.img_description}>
                        <h2 className={style.img_title}>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}

            <FontAwesomeIcon
                icon="circle-chevron-right"
                className={`fa-3x px-2 ${style.icon}`}
                onClick={() => setActiveItem((prev) => (prev + 1) % structure.length)}
            />
        </div>
    );
}

