import PropTypes  from "prop-types";

import { useState } from "react"

export const GifItem = ({ url, title }) => {
    const [image, setImage] = useState('');

    setTimeout(() => {
        setImage(url)
    }, 1000)

    return (

        <div className="card">
            <img className="img" src={url} alt={title} /> 
            {
                (image) 
                ? "hola"
                : (<span className="cargando"></span>)
            }
            <h4>{title}</h4>
        </div>
    )
}


GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url  : PropTypes.string.isRequired,
}