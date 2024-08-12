import React from "react"
import data from "./data.json"
import "./style.scss"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import icon from "./share-solid.svg"

function Home() {
    const param = useParams()
    const [record, setRecord] = useState()

    useEffect(() => {
        setRecord(data[param.id])
    }, [])

    useEffect(() => {
        setRecord(data[param.id])
        console.log(param.id)
    }, [param.id])

    useEffect(() => {
        if (record && record.species_guess) {
            document.title = record.species_guess
        }
    }, [record])

    const share = () => {
        const currentUrl = window.location.href
        navigator.clipboard.writeText(currentUrl)
        if (navigator.share) {
            navigator
                .share({
                    url: window.location.href,
                })
                .then(() => console.log("Address shared successfully."))
                .catch((error) => console.log("Error sharing address:", error))
        } else {
            console.log("Web Share API not supported.")
        }
    }

    return (
        <body className="body">
            <div className="root">
                {record && (
                    <div className="body__holder">
                        <div className="body__name-holder">
                            <div className="body__name-holder--names">
                                <h1 className="body__common">
                                    {record.species_guess}
                                </h1>
                                <h2 className="body__scientific">
                                    {record.scientific_name}
                                </h2>
                            </div>
                            <button
                                className="body__button-handle--back"
                                onClick={share}
                            >
                                <img
                                    className="body__button-handle--back--icon"
                                    src={icon}
                                    alt="share-icon"
                                />
                            </button>
                        </div>
                        <a
                            href={record.url}
                            target="_blank"
                            className="body__holder--article"
                        >
                            <img
                                className="body__image"
                                loading="lazy"
                                src={record.image_url}
                            />
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
                        <footer className="footer">
                            <a
                                target="_blank"
                                href="https://buycoffee.to/misiaczekooo"
                                className="footer__coffee"
                            >
                                Appreciate me with a coffee
                            </a>
                            <p className="footer__design">
                                Design & Execution by Michał Mosór
                            </p>
                        </footer>
                    </div>
                )}
                {/* <button onClick={handleDownload}>Download Image</button> */}
            </div>
        </body>
    )
}

export default Home
