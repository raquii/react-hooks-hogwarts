import{useState} from 'react';

function HogCard({
    name,
    image,
    medal,
    specialty,
    weight,
    greased,
}){
    const [isMoreInfo, setIsMoreInfo] = useState(false);

    function handleMoreInfoClick(){
        setIsMoreInfo(isMoreInfo=> !isMoreInfo)
    }

    return(
        <div className="ui four wide column" onClick={handleMoreInfoClick}>
            <img src={image} alt={`pig named ${name}`} style={{ width: "20vh", height: "20vh", objectFit: "cover"}}></img>
            <h2>{name}</h2>
            <div style={isMoreInfo? {display:''} : {display:'none'}}>
                <p><strong>Weight:</strong> {weight}</p>
                <p><strong>Specialty:</strong> {specialty}</p>
                <p><strong>Highest Medal Achieved:</strong> {medal}</p>
                <p><strong>Greased:</strong> {greased ? "✅": "❌"}</p>
            </div>
        </div>
    )
}

export default HogCard;