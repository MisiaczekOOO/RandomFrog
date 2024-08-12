import data from "./data.json"
import "./style.scss"
import {useState, useEffect} from "react"
import {BrowserRouter, Link, Route, Routes, HashRouter} from "react-router-dom"
// import Frog from "./FrogSite.jsx"
import {useRef} from "react"
import NotFound from "./NotFound.jsx"
import Home from "./Home.jsx"

function App() {
    const [id, setId] = useState()
    const linkRef = useRef()

    const random = () => {
        const randomId = Math.floor(Math.random() * data.length)
        setId(randomId)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
        console.log("current id:" + id)
    }

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
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/:id" element={<Home />} />

                    <Route path="*" element={<NotFound />} />
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
        </div>
    )
}

export default App
