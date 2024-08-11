import React from "react"
import "./notFound.scss"
import sadFrogo from "./sad_frogo.png"

function NotFound() {
    return (
        <body className="body">
            <h1 className="text">Ups! Trafiłeś na niewłaściwy staw...</h1>
            <img className="image" src={sadFrogo} alt="sadFrog.png" />
            <h2 className="subText">
                Wygląda na to, że coś czego szukasz nie istnieje. Żabki liczyły
                na odwiedziny, ale teraz mają tylko puste kręgi na wodzie. Może
                strona, której szukasz, uciekła lub nigdy nie istniała...
            </h2>
        </body>
    )
}

export default NotFound
