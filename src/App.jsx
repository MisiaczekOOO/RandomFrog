import data from "./DATABASE.json"
import "./style.scss"
import {useState, useEffect} from "react"

function App() {
    const [record, setRecord] = useState()

    const getRandomRecord = () => {
        const randomIndex = Math.floor(Math.random() * data.length)
        setRecord(data[randomIndex])
    }

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * data.length)
        setRecord(data[randomIndex])
    }, [])

    return (
        <body className="body">
            {record && (
                <div className="body__holder">
                    <div className="body__name-holder">
                        <h1 className="body__name">{record.species_guess}</h1>
                        <h2 className="body__scientific">
                            {record.scientific_name}
                        </h2>
                    </div>
                    <a
                        href={record.url}
                        target="_blank"
                        className="body__holder--article"
                    >
                        <img className="body__image" src={record.image_url} />
                    </a>

                    {/* <h3 className="body__name">
                        Appeared:{" "}
                        <span className="body__name--add">
                            {" "}
                            {record.place_guess}
                        </span>
                    </h3> */}
                </div>
            )}
            <button onClick={getRandomRecord} className="body__button">
                🐸Give me a new frog!🐸
            </button>
        </body>
    )
}

export default App
