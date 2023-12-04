import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "../css/modules/Carousel.module.css";
import { useState, useEffect } from 'react';

export default function Carousel({ structure }) {
    const [activeItem, setActiveItem] = useState(0);

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            // Freccia sinistra, decrementa l'elemento attivo
            setActiveItem((prev) => (prev - 1 + structure.length) % structure.length);
        } else if (event.key === 'ArrowRight') {
            // Freccia destra, incrementa l'elemento attivo
            setActiveItem((prev) => (prev + 1) % structure.length);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

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

