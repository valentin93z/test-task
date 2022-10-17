import React, { useState } from 'react';
import './TicketsOnEvent.css';
import TableDB from './TableDB';
import FormOrder from './FormOrder';
import { createData } from './data';


const TicketsOnEvent = () => {

    const [eventId, setEventId] = useState('');
    const [eventDate, setEventDate] = useState('');

    const [adultPrice, setAdultPrice] = useState(0);
    const [adultQuantity, setAdultQuantity] = useState(0);

    const [kidPrice, setKidPrice] = useState(0);
    const [kidQuantity, setKidQuantity] = useState(0);

    const [benefitPrice, setBenefitPrice] = useState(0);
    const [benefitQuantity, setBenefitQuantity] = useState(0);

    const [groupPrice, setGroupPrice] = useState(0);
    const [groupQuantity, setGroupQuantity] = useState(0);

    const [equalPrice, setEqualPrice] = useState(0);

    const [rows, setRows] = useState([
      createData(1, '003', '2021-08-21 13:00:00', 700, 1, 450, 0, 500, 0, 2500, 0, '11111111', ['a21212'], '00451', 700, '2021-01-11 13:22:09'),
      createData(2, '006', '2021-07-29 18:00:00', 1000, 0, 800, 2, 900, 0, 3600, 0, '22222222', ['k32323', 'k23232'],	'00364', 1600,	'2021-01-12 16:62:08'),
      createData(3,	'003', '2021-08-15 17:00:00',	700, 4,	450, 3, 500, 0, 2500, 0, '33333333', ['a12121', 'a43434', 'a34343', 'a54545', 'k45454', 'k65656', 'k56565'], '00015', 4150,	'2021-01-13 10:08:45'),
    ]);

    
  return (
    <div className='tickets-on-event'>
        <FormOrder
          eventId={eventId} setEventId={setEventId}
          eventDate={eventDate} setEventDate={setEventDate}
          adultPrice={adultPrice} setAdultPrice={setAdultPrice}
          adultQuantity={adultQuantity} setAdultQuantity={setAdultQuantity}
          kidPrice={kidPrice} setKidPrice={setKidPrice}
          kidQuantity={kidQuantity} setKidQuantity={setKidQuantity}
          benefitPrice={benefitPrice} setBenefitPrice={setBenefitPrice}
          benefitQuantity={benefitQuantity} setBenefitQuantity={setBenefitQuantity}
          groupPrice={groupPrice} setGroupPrice={setGroupPrice}
          groupQuantity={groupQuantity} setGroupQuantity={setGroupQuantity}
          equalPrice={equalPrice} setEqualPrice={setEqualPrice}
          rows={rows} setRows={setRows}
        />
        <TableDB rows={rows}/>
    </div>
  )
}

export default TicketsOnEvent;