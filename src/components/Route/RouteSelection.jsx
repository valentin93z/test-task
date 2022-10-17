import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import RouteResult from "./RouteResult";
import "./RouteSelection.css";
import SelectRoute from "./selects/SelectRoute";
import SelectTimeAB from "./selects/SelectTimeAB";
import SelectTimeBA from "./selects/SelectTimeBA";

const RouteSelection = () => {
  const [route, setRoute] = useState("");
  const [timeAB, setTimeAB] = useState("");
  const [endTimeAB, setEndTimeAB] = useState("");
  const [timeBA, setTimeBA] = useState("");
  const [endTimeBA, setEndTimeBA] = useState("");
  const [ticket, setTicket] = useState("");
  const [wait, setWait] = useState("");

  const [result, setResult] = useState(false);
  const [totalPrice, setTotalPrice] = useState("");

  const price = route === "A-B-A" ? 1200 : 700;

  useEffect(() => {
    setTimeAB("");
    setEndTimeAB("");
    setTimeBA("");
    setTicket("");
  }, [route]);

  useEffect(() => {
    setTimeBA("");
  }, [timeAB]);

  useEffect(() => {
    setResult(false);
  }, [route, timeAB, timeBA, ticket]);

  const calculateEnd = (time) => {
    const tripDuration = 50;
    const timeArr = time.split(":");
    const hours = Number(timeArr[0]);
    const minutes = Number(timeArr[1]);
    const totalMinutes = hours * 60 + minutes + tripDuration;
    timeArr[0] =
      totalMinutes / 60 < 10
        ? `0${Math.trunc(totalMinutes / 60)}`
        : `${Math.trunc(totalMinutes / 60)}`;
    timeArr[1] =
      totalMinutes % 60 < 10 ? `0${totalMinutes % 60}` : `${totalMinutes % 60}`;
    return timeArr.join(":");
  };

  const calcWait = (a, b, c) => {
    const result = [];
    const start = a.split(":");
    const end = b.split(":");
    const startToMinutes = Number(start[0]) * 60 + Number(start[1]);
    const endToMinutes = Number(end[0]) * 60 + Number(end[1]);
    const minutes = endToMinutes - startToMinutes + c * 2;
    result.push(Math.trunc(minutes / 60));
    result.push(minutes % 60);
    return result;
  };

  const calculate = () => {
    setTotalPrice(price * ticket);
    route === "A-B-A" ? setWait(calcWait(endTimeAB, timeBA, 50)) : setWait(50);
    setResult(true);
  };

  const formatDate = (date) => {
    const hours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return `${hours}:${minutes}`;
  };

  return (
    <div className="RouteSelection">
      <div className="route__container">
        <div className="route__inputs">
          <SelectRoute route={route} setRoute={setRoute} />

          {route === "" ? (
            <></>
          ) : route === "A-B" ? (
            <SelectTimeAB
              timeAB={timeAB}
              setTimeAB={setTimeAB}
              setEndTimeAB={setEndTimeAB}
              formatDate={formatDate}
              calculateEnd={calculateEnd}
            />
          ) : route === "B-A" ? (
            <SelectTimeBA
              timeBA={timeBA}
              setTimeBA={setTimeBA}
              setEndTimeBA={setEndTimeBA}
              formatDate={formatDate}
              calculateEnd={calculateEnd}
            />
          ) : (
            <>
              <SelectTimeAB
                timeAB={timeAB}
                setTimeAB={setTimeAB}
                setEndTimeAB={setEndTimeAB}
                formatDate={formatDate}
                calculateEnd={calculateEnd}
              />
              <SelectTimeBA
                timeBA={timeBA}
                setTimeBA={setTimeBA}
                setEndTimeBA={setEndTimeBA}
                endTimeAB={endTimeAB}
                formatDate={formatDate}
                calculateEnd={calculateEnd}
              />
            </>
          )}

          <TextField
            id="ticketQuantity"
            label="Количество билетов"
            variant="outlined"
            type="number"
            onChange={(e) => setTicket(e.target.value)}
            value={ticket}
          />
        </div>
        <Button
          variant="contained"
          size="large"
          onClick={calculate}
          disabled={
            route === "A-B" && timeAB && ticket
              ? false
              : route === "B-A" && timeBA && ticket
              ? false
              : route === "A-B-A" && timeAB && timeBA && ticket
              ? false
              : true
          }
        >
          Рассчитать
        </Button>
      </div>
      {result && (
        <RouteResult
          route={route}
          timeAB={timeAB}
          endTimeAB={endTimeAB}
          timeBA={timeBA}
          endTimeBA={endTimeBA}
          wait={wait}
          ticket={ticket}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};

export default RouteSelection;
