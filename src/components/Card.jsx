import Path from "../img/path.png"

export default function Card(props) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props

    return (
        <div className="card">
            <img className="card--img" src={imageUrl} alt={title}/>
            <div className="card--info">
                <div className="card--info-top">
                    <img src={Path} alt="Path Icon"/>
                    <p>{location}</p>
                    <a href={googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--info-title">{title}</h1>
                <p className="card--info-dates">{startDate} - {endDate}</p>
                <p className="card--info-desc">{description}</p>
            </div>
        </div>
    )
}