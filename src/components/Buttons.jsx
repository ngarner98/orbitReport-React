import satData from "./satData";
import "./styling.css"

const Buttons = ({ filterByType, setSat, displaySats }) => {

  return (
    <div className="flex-container">
      <button>{displaySats.map((sat, id) => {
       return (
      <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
      </button>
      );
      })}
      </button>
    <button onClick= {() => setSat(satData)}>All Orbits</button>
  </div>
  )
}

export default Buttons;

// return (
//   <div>
//     <button onClick={() => filterByType(sat)} key={id}>
//       {sat} Orbit</button>
    
//   </div>
//   );
// });
// <button onClick= {() => setSat(satData)}>All Orbits</button>