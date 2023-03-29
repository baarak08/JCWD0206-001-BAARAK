import { useEffect, useState } from "react";

export default function TodolistPage() {
  const [catat, setCatat] = useState(" ");
  const [arrCatat, setArrCatat] = useState([]);
  const [date, setDate] = useState(" ");
  const [catatan, setCatatan] = useState(" ");

  function saveCatatan(value, id) {
    console.log(id);
    value = String(value);
    if ("date" == id) {
      setDate(value);
    } else {
      setCatatan(value);
    }
  }

  useEffect(() => setCatat(date + catatan), [date, catatan]);

  function add() {
    let tempArr = [...arrCatat];
    tempArr.push(catat);
    setArrCatat([...arrCatat, catat]);
    setArrCatat(tempArr);
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "1000px" }}>
        <div
          style={{
            textAlign: "center",
            paddingBottom: "25px",
            paddingTop: "25px",
            fontWeight: "500",
          }}
        >
          TO DO LIST
        </div>
        <div>
          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => saveCatatan(e.target.value, e.target.id)}
          />
          <input
            style={{
              backgroundColor: "lightgrey",
              color: "black",
              width: "700px",
              height: "33.33px",
              textAlign: "center",
            }}
            type="text"
            name="catatan"
            id="catatan"
            onChange={(e) => saveCatatan(e.target.value, e.target.id)}
          ></input>
          <button onClick={add}>Save</button>
        </div>
        <div>
          {arrCatat.map((val) => (
            <div>{val}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
