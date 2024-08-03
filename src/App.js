import data from "./DATABASE.json"
import "./style.scss"
import { useState, useEffect } from "react";

function App() {

  const [record, setRecord] = useState();

  const getRandomRecord = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRecord(data[randomIndex])
  }

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRecord(data[randomIndex])
  }, [])

  return (
    <body className="body">
      {record && (
        <div className="body__holder">
          <a href={record.url} target="_blank" className="body__holder--article">link to article</a>
          <img className="body__image" src={record.image_url} />
          <h3 className="body__name">Scientific name: <span className="body__name--add">{record.scientific_name}</span> </h3>
          <h3 className="body__name">Common name: <span className="body__name--add"> {record.species_guess}</span></h3>
          <h3 className="body__name">Appeared: <span className="body__name--add"> {record.place_guess}</span></h3>

        </div>
      )}
      <button onClick={getRandomRecord} className="body__button">🐸Give me a new frog!🐸</button>
    </body>
  );
}

export default App;
