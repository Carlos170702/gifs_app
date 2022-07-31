import { useEffect, useState } from "react"

export const GifItem = ({ url, title }) => {
    const [image, setImage ] = useState('');

    setTimeout(() => {
        setImage(url)
    }, 1000)

    return (

        <div className="card">
            {
                (image )? <img className="img" src={url} alt={title} /> : (<span className="cargando"></span> )
            }
            <h4>{title}</h4>
        </div>
    )
}
