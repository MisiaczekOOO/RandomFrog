import data from "./DATABASE.json"
import "./style.scss"
import { useState } from "react";

function App() {

  const [record, setRecord] = useState();

  const getRandomRecord = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRecord(data[randomIndex])
  }

  return (
    <body className="body">
      {record && (
        <div>
          <a href={record.url}>link to article</a>
          <img src={record.image_url} />
        </div>
      )}
      <button onClick={getRandomRecord}>random frog</button>
    </body>
  );
}

export default App;
