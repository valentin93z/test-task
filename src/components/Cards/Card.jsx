import React, { useEffect, useRef, useState } from "react";
import clockSVG from "./img/clock.svg";
import arrSVG from "./img/arr.svg";

const Card = ({ card }) => {

  const [size, setSize] = useState({});
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState([]);
  const [hidden, setHidden] = useState([]);
  const [more, setMore] = useState(false);
  const [timeItems, setTimeItems] = useState(0);

  const ref = useRef();

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};
    setSize({ clientHeight, clientWidth });
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  useEffect(() => {
    quantityTimes();
  }, [size]);

  useEffect(() => {
    if (card.times.length > timeItems) {
      setVisible(card.times.slice(0, timeItems - 1));
      setHidden(card.times.slice(timeItems - 1));
      setHide(true);
    } else {
      setVisible(card.times.slice(0, timeItems));
      setHide(false);
    }
  }, [timeItems]);


 const quantityTimes = () => {
    if (size.clientWidth >= 616) {
      setTimeItems(4);
    }
    else if (size.clientWidth >= 540) {
      setTimeItems(3);
    } else if (size.clientWidth < 340 && size.clientWidth > 330) {
      setTimeItems(4);
    } else if (size.clientWidth < 330 && size.clientWidth > 270) {
      setTimeItems(3);
    } else if (size.clientWidth < 270) {
      setTimeItems(2);
    }
 }

  return (
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src={card.image} alt="card-cover" width='100%' height='100%' />
        {card.label}
      </div>
      <div className="card__description">
        <div className="card__header-container">
          <div className="card__duration">
            <img src={clockSVG} alt="clock" />
            <span>{card.duration}</span>
          </div>
          <h4 className="card__header">{card.header}</h4>
        </div>
        <ul className="list__items" ref={ref}>
          {card.items.map((item, index) => (
            <li className="list__item" key={index}>
              <img src={arrSVG} alt="item" />
              {item !== "Ближайший рейс сегодня" ? (
                <div className="item-text">{item}</div>
              ) : (
                <div className="list__times">
                  <div className="item-text">{item}</div>
                  <div className="list__times-container">
                    {visible.map((time, index) => (
                      <div className="time" key={index}>{time}</div>
                    ))}
                    {hide && <div className="time more" onClick={() => setMore(!more)}>
                      <span>ещё...</span>
                      <div className={more ? 'visible hid-block' : 'hidden'}>
                        {hidden.map((time, index) => (
                            <div className="time" style={{marginTop: '6px'}} key={index}>{time}</div>
                          ))}
                      </div>
                    </div>}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="card__buy">
          <div className="card__price">
            <p className="card__price-primary">{card.price}₽</p>
            <p className="card__price-secondary">{card.otherPrice} р на причале</p>
          </div>
          <button className="card__button">Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default Card;