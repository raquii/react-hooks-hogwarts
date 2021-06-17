import HogCard from "./HogCard";

function HogContainer({hogs}){
    
    const hogCards = hogs.map(hogObj=>{
        return (
            <HogCard
                key={hogObj.name}
                name={hogObj.name}
                image={hogObj.image}
                medal={hogObj['highest medal achieved']}
                specialty={hogObj.specialty}
                weight={hogObj.weight}
                greased={hogObj.greased}
            />
        );
    });


    return(
        <div className="ui grid container">
            {hogCards} 
        </div> 
    )
}

export default HogContainer;