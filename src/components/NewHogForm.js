import {useState} from 'react';

function NewHogForm({addHog}){
    const [formData, setFormData] = useState({
        name:"",
        image:"",
        weight: 0,
        specialty:"",
        greased: false,
        "highest medal achieved":""
    })

    function handleSubmit(e){
        e.preventDefault()
        addHog(formData)
    }

    function handleChange(e){
        const key = e.target.id;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        
        setFormData({
            ...formData,
            [key]: value
        })
    }

    return(
        <div
        style={{
            alignContent:"center"
            }}
        >
            <form 
                style={{
                    margin:"0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom:"1em"
                    }}
                onSubmit={handleSubmit}
            >
                    <h3>Submit a New Pig</h3>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="image">Image</label>
                    <input 
                        type="text" 
                        id="image" 
                        value={formData.image} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="weight">Weight</label>
                    <input 
                        type="text" 
                        id="weight" 
                        value={formData.weight} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="specialty">Specialty</label>
                    <input 
                        type="text" 
                        id="specialty" 
                        value={formData.specialty} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="medal">Highest Medal Ever Awarded</label>
                    <input 
                        type="text" 
                        id="highest medal achieved" 
                        value={formData['highest medal achieved']} 
                        onChange={handleChange} 
                    />
                    <label>
                        Greased?
                        <input
                            type="checkbox"
                            id="greased"
                            checked={formData.greased}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Add Hog</button>
            </form>
        </div>
    )
}

export default NewHogForm;