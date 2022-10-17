import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { EVENTS, createData, orderBarGen, ticketBarGen, USER_ID, getDateOfCreate } from "./data";

const FormOrder = ({
  eventId, setEventId, eventDate, setEventDate,
  adultPrice, setAdultPrice, adultQuantity, setAdultQuantity,
  kidPrice, setKidPrice, kidQuantity, setKidQuantity,
  benefitPrice, setBenefitPrice, benefitQuantity, setBenefitQuantity,
  groupPrice, setGroupPrice, groupQuantity, setGroupQuantity,
  equalPrice, setEqualPrice, rows, setRows
}) => {

  const sendOrder = () => {
    setRows([...rows, createData(
      rows.length + 1, eventId, eventDate, adultPrice, adultQuantity, kidPrice, kidQuantity,
      benefitPrice, benefitQuantity, groupPrice, groupQuantity, orderBarGen(),
      ticketBarGen(adultQuantity, kidQuantity, benefitQuantity, groupQuantity),
      USER_ID, equalPrice, getDateOfCreate()
    )]);
  };

  useEffect(() => {
    setEqualPrice(adultPrice * Number(adultQuantity) + kidPrice * Number(kidQuantity) + 
    benefitPrice * Number(benefitQuantity) + groupPrice * Number(groupQuantity));
  }, [eventId, adultQuantity, kidQuantity, benefitQuantity, groupQuantity]);

  return (
    <div className="form__order">
      <div className="events-date">

        <FormControl>
          <InputLabel htmlFor="event">Событие</InputLabel>
          <Select id="event" value={eventId} label="Событие"
            onChange={(e) => {
              setEventId(e.target.value);
              EVENTS.map((event) => {
                if (event.id === e.target.value) {
                  setAdultPrice(event.adultPrice);
                  setKidPrice(event.kidPrice);
                  setBenefitPrice(event.benefitPrice);
                  setGroupPrice(event.groupPrice);
                }
              });
            }}
          >
            <MenuItem value={"003"}>Событие 3</MenuItem>
            <MenuItem value={"006"}>Событие 6</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="date">Дата</InputLabel>
          <Select id="date" value={eventDate} label="Дата" onChange={(e) => setEventDate(e.target.value)}>
            {EVENTS.map((event) =>
                event.id === eventId && event.date.map((day) => <MenuItem value={day}>{day}</MenuItem>)
            )}
          </Select>
        </FormControl>

      </div>
      <ul className="price__list">
        <li className="price__item">
          <TextField type="number" value={adultQuantity} label="Взрослых" variant="outlined" onChange={(e) => setAdultQuantity(e.target.value)} />
          <p>*цена 1 взрослого билета: {adultPrice} руб.</p>
        </li>
        <li className="price__item">
          <TextField type="number" value={kidQuantity} label="Детских"  variant="outlined" onChange={(e) => setKidQuantity(e.target.value)} />
          <p>*цена 1 детского билета: {kidPrice} руб.</p>
        </li>
        <li className="price__item">
          <TextField type="number" value={benefitQuantity} label="Льготных" variant="outlined" onChange={(e) => setBenefitQuantity(e.target.value)} />
          <p>*цена 1 льготного билета: {benefitPrice} руб.</p>
        </li>
        <li className="price__item">
          <TextField type="number" value={groupQuantity} label="Групповых" variant="outlined" onChange={(e) => setGroupQuantity(e.target.value)} />
          <p>*цена 1 группового билета: {groupPrice} руб.</p>
        </li>
      </ul>
      <div className='send-order'>
        <Button variant="contained" onClick={sendOrder}>Отправить заказ</Button>
        <p>Сумма: {equalPrice} руб.</p>
      </div>
    </div>
  );
};

export default FormOrder;