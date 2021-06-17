
function ResultsNav({sortBy, setSort, onShowGreased, showGreased}){
    return(
        <div className="results-nav" style={{padding: "1em"}}>
            <div style={{border: "1px solid pink", padding:".5em"}}>
                <div>
                    <label>
                        Sort by:  
                        <select
                            name="sort"
                            value={sortBy}
                            onChange={e=> setSort(e.target.value)}
                        >
                            <option value="name">Name</option>
                            <option value="weight">Weight</option>

                        </select>
                    </label>
                </div>
                <div style={{padding: ".3em"}}>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={showGreased} 
                            onChange={e => onShowGreased(e.target.checked)} 
                        />
                        Show Greased Pigs
                    </label>
                </div>
                
            </div>
            
        </div>
    )
}

export default ResultsNav;