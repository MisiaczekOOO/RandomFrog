import React from "react"
import data from "./data.json"
import "./style.scss"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

function Frog() {
    const param = useParams()
    const [record, setRecord] = useState()

    useEffect(() => {
        setRecord(data[param.id])
        document.title = record.species_guess
    }, [param.id])

    useEffect(() => {
        if (record) {
            document.title = record.species_guess
        }
    }, [record])

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
                        <p className="body__image--click">
                            Click to see article
                        </p>
                    </a>
                    {/* <p>Data comes from: {record.name}</p> */}
                    <h2 className="body__location">
                        <i className="fa-solid fa-location-dot"></i>{" "}
                        {record.place_guess}
                    </h2>
                    <a
                        className="body__name"
                        target="_blank"
                        href={`https://www.inaturalist.org/people/${record.user_login}`}
                    >
                        <i className="fa-solid fa-camera"></i>{" "}
                        <span className="body__name--decoration">
                            {record.user_login} | {record.user_name}
                        </span>
                    </a>
                    <h2 className="body__location">
                        <i className="fa-solid fa-calendar-days"></i>{" "}
                        {record.observed_on}
                    </h2>
                    {/* <button onClick={downloadImage}>Save</button> */}
                    {/* <hr /> */}
                    <p className="body__footer">
                        Design & Execution by Michał Mosór
                    </p>
                </div>
            )}
        </body>
    )
}

export default Frog
