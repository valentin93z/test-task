import React from "react";

const RouteResult = ({ route, timeAB, endTimeAB, timeBA, endTimeBA, wait, ticket, totalPrice, }) => {

  const changeForms = (number, one, two, five) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }

  return (
    <div className="result__container">
      {route === "A-B" ? (
        <div>
          <p>Вы выбрали <b>{ticket} {changeForms(ticket, 'билет', 'билета', 'билетов')}</b> по маршруту <b>{route}</b> стоимостью <b>{totalPrice}р</b>.</p>
          <p>Это путешествие займет у вас <b>{wait} мин</b>.</p>
          <p>Теплоход отправляется в <b>{timeAB}</b>, а прибудет в <b>{endTimeAB}</b>.</p>
        </div>
      ) : route === "B-A" ? (
        <div>
          <p>Вы выбрали <b>{ticket} {changeForms(ticket, 'билет', 'билета', 'билетов')}</b> по маршруту <b>{route}</b> стоимостью <b>{totalPrice}р</b>.</p>
          <p>Это путешествие займет у вас <b>{wait} мин</b>.</p>
          <p>Теплоход отправляется в <b>{timeBA}</b>, а прибудет в <b>{endTimeBA}</b>.</p>
        </div>
      ) : (
        <div>
          <p>Вы выбрали <b>{ticket} {changeForms(ticket, 'билет', 'билета', 'билетов')}</b> по маршруту <b>{route}</b> стоимостью <b>{totalPrice}р</b>.</p>
          <p>Это путешествие займет у вас <b>{wait[0]}ч. {wait[1]}мин.</b></p>
          <p>Теплоход отправляется из A в <b>{timeAB}</b>, прибывает в B - в <b>{endTimeAB}</b>.</p>
          <p>Теплоход отправляется из B в <b>{timeBA}</b>, прибывает в A - в <b>{endTimeBA}</b>.</p>
        </div>
      )}
    </div>
  );
};

export default RouteResult;