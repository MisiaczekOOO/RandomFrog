import data from "./data.json"
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
                        <h1 className="body__common">{record.species_guess}</h1>
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
                    {/* <p>Data comes from: {record.name}</p> */}
                    <h2 className="body__location">
                        <i class="fa-solid fa-location-dot"></i>{" "}
                        {record.place_guess}
                    </h2>
                    <a
                        className="body__name"
                        target="_blank"
                        href={record.user_login}
                    >
                        <i class="fa-solid fa-user"></i> {record.user_login}
                    </a>
                    <h2 className="body__location">
                        <i class="fa-solid fa-calendar-days"></i>{" "}
                        {record.observed_on}
                    </h2>
                </div>
            )}
            <button onClick={getRandomRecord} className="body__button">
                🐸Give me a new frog!🐸
            </button>
        </body>
    )
}

export default App
