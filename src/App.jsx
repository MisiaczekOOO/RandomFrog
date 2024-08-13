import data from "./data.json"
import "./style.scss"
import {useState, useEffect} from "react"
import {HashRouter, Link, Route, Routes} from "react-router-dom"
// import Frog from "./FrogSite.jsx"
import {useRef} from "react"
import NotFound from "./NotFound.jsx"
import Home from "./Home.jsx"
import {useParams} from "react-router-dom"

function App(props) {
    const [id, setId] = useState()
    const linkRef = useRef()
    const {valid} = props
    const param = useParams()
    const random = () => {
        const randomId = Math.floor(Math.random() * data.length)
        setId(randomId)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
        // console.log("current id:" + id)
        // console.log(valid)
    }
    // useEffect(() => {
    //     if (param.id >= 1 && param.id <= 44259) {
    //         console.log("The param id is within the range.")
    //     } else {
    //         console.log("The param id is outside the range.")
    //     }
    // }, [location.pathname])

    useEffect(() => {
        console.log("first current id: XD")
        const randomId = Math.floor(Math.random() * data.length)
        setId(randomId)
    }, [])

    // useEffect(() => {
    //     const randomId = Math.floor(Math.random() * data.length)
    //     setId(randomId)
    //     random()
    //     console.log(firstID)

    //     linkRef.current.click()
    // }, [])

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/:id" element={<Home />} />

                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Link
                ref={linkRef}
                onClick={random}
                to={`${id}`}
                className="body__button"
            >
                🐸 Give me a new frog! 🐸
            </Link>
        </HashRouter>
    )
}

export default App
