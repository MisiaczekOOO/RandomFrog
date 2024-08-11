import data from "./data.json"
import "./style.scss"
import {useState, useEffect} from "react"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Frog from "./Frog.jsx"
import {useRef} from "react"
import NotFound from "./NotFound.jsx"
function App() {
    const [id, setId] = useState()
    const linkRef = useRef()
    const firstID = Math.floor(Math.random() * data.length)
    const random = () => {
        const randomId = Math.floor(Math.random() * data.length)
        setId(randomId)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    useEffect(() => {
        const randomId = Math.floor(Math.random() * data.length)
        setId(randomId)
        random()
        console.log(firstID)

        linkRef.current.click()
    }, [])
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Frog />} />
                    <Route path="/:id" element={<Frog />} />
                    <Route path="/undefined" element={<NotFound />} />
                </Routes>
                <Link
                    ref={linkRef}
                    onClick={random}
                    to={`${id}`}
                    className="body__button"
                >
                    🐸 Give me a new frog! 🐸
                </Link>
            </BrowserRouter>

            {/* console.log(id) */}
        </div>
    )

    // const [record, setRecord] = useState()
    // const getRandomRecord = () => {
    //     const randomIndex = Math.floor(Math.random() * data.length)
    //     setRecord(data[randomIndex])
    // }
    // useEffect(() => {
    //     const randomIndex = Math.floor(Math.random() * data.length)
    //     setRecord(data[randomIndex])
    // }, [])
    // return (
    //     <body className="body">
    //         {record && (
    //             <div className="body__holder">
    //                 <div className="body__name-holder">
    //                     <h1 className="body__common">{record.species_guess}</h1>
    //                     <h2 className="body__scientific">
    //                         {record.scientific_name}
    //                     </h2>
    //                 </div>
    //                 <a
    //                     href={record.url}
    //                     target="_blank"
    //                     className="body__holder--article"
    //                 >
    //                     <img className="body__image" src={record.image_url} />
    //                 </a>
    //                 {/* <p>Data comes from: {record.name}</p> */}
    //                 <h2 className="body__location">
    //                     <i class="fa-solid fa-location-dot"></i>{" "}
    //                     {record.place_guess}
    //                 </h2>
    //                 <a
    //                     className="body__name"
    //                     target="_blank"
    //                     href={`https://www.inaturalist.org/people/${record.user_login}`}
    //                 >
    //                     <i class="fa-solid fa-camera"></i> {record.user_login} |{" "}
    //                     {record.user_name}
    //                 </a>
    //                 <h2 className="body__location">
    //                     <i class="fa-solid fa-calendar-days"></i>{" "}
    //                     {record.observed_on}
    //                 </h2>
    //                 {/* <button onClick={downloadImage}>Save</button> */}
    //             </div>
    //         )}
    //         <button onClick={getRandomRecord} className="body__button">
    //             🐸Give me a new frog!🐸
    //         </button>
    //     </body>
    // )
}

export default App
