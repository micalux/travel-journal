import pin from "../images/pin.svg"

export default function Card(props) {
    return (
        <div className="card--container">
            <div className="card">  
                <img className="card--img" src={props.item.imageUrl}></img>
                <div className="card--text">
                    <div className="card--location-container">
                        <img className="card--pin" src={pin}></img>
                        <p className="card--location">{props.item.location}</p>
                        <a 
                            href={props.item.googleMapsUrl} 
                            className="card--map-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Google Maps   
                        </a>      
                    </div>
                    <h1 className="card--title">{props.item.title}</h1>
                    <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="card--description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}