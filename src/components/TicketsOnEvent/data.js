export const EVENTS = [
  {
    id: "003",
    name: "Событие 3",
    date: ["2021-08-21 13:00:00", "2021-08-15 17:00:00"],
    adultPrice: 700,
    kidPrice: 450,
    benefitPrice: 500,
    groupPrice: 2500,
  },
  {
    id: "006",
    name: "Событие 6",
    date: ["2021-07-29 18:00:00"],
    adultPrice: 1000,
    kidPrice: 800,
    benefitPrice: 900,
    groupPrice: 3600,
  },
];

export const USER_ID = "00001";

export const orderBarGen = () => {
  return Math.floor(Math.random() * (99999999 - 11111111) + 11111111);
};

export const ticketBarGen = (a, k, b, g) => {
  const result = [];
  for (let i = 0; i < Number(a); i++) {
    let bar = "a" + Math.floor(Math.random() * (999 - 100) + 100);
    result.push(bar);
  }
  for (let i = 0; i < Number(k); i++) {
    let bar = "k" + Math.floor(Math.random() * (999 - 100) + 100);
    result.push(bar);
  }
  for (let i = 0; i < Number(b); i++) {
    let bar = "b" + Math.floor(Math.random() * (999 - 100) + 100);
    result.push(bar);
  }
  for (let i = 0; i < Number(g); i++) {
    let bar = "g" + Math.floor(Math.random() * (999 - 100) + 100);
    result.push(bar);
  }
  return result;
};


export const getDateOfCreate = () => {

  const date = new Date(Date.now());

  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


export function createData(
  id,
  event_id,
  event_date,
  ticket_adult_price,
  ticket_adult_quantity,
  ticket_kid_price,
  ticket_kid_quantity,
  ticket_benefit_price,
  ticket_benefit_quantity,
  ticket_group_price,
  ticket_group_quantity,
  barcode,
  tickets_barcode,
  user_id,
  equal_price,
  created
) {
  return {
    id,
    event_id,
    event_date,
    ticket_adult_price,
    ticket_adult_quantity,
    ticket_kid_price,
    ticket_kid_quantity,
    ticket_benefit_price,
    ticket_benefit_quantity,
    ticket_group_price,
    ticket_group_quantity,
    barcode,
    tickets_barcode,
    user_id,
    equal_price,
    created,
  };
}
