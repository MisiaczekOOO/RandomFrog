import React from "react"
import {Helmet} from "react-helmet"

function Seo(props) {
    const {image_url} = props
    console.log(image_url)
    return (
        <Helmet>
            <meta property="og:title" content={"Check this frog!"} />
            <meta property="og:image" content={image_url} />
        </Helmet>
    )
}

export default Seo
