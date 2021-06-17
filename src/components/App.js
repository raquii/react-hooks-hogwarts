import React, {useState} from "react";
import Header from "./Header";
import ResultsNav from "./ResultsNav";
import HogContainer from "./HogContainer";
import NewHogForm from "./NewHogForm"

import hogs from "../porkers_data";

function App() {
  const [sortBy, setSortBy] = useState("name");
  const [showGreased, setShowGreased] = useState(false);
  const [hogsData, setHogs] = useState(hogs)

  const filteredHogs = hogsData
    .filter(hog=>(showGreased? hog.greased:true))
    .sort((a,b)=>{
      if (sortBy === "weight"){
        return a.weight - b.weight
      }else{
        return a.name.localeCompare(b.name);
      }
    });

    function addHog(hogObj){
      setHogs([...hogsData, hogObj])
    }

  return (
    <div className="App">
      <Header />
      <ResultsNav 
        sortBy={sortBy}
        setSort={setSortBy}
        showGreased={showGreased}
        onShowGreased={setShowGreased}
      />
      <NewHogForm 
        addHog={addHog}
      />
      <HogContainer 
        hogs={filteredHogs}
      />
    </div>
  );
}

export default App;
