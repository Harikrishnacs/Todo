import React, { useState } from 'react';

const AddValue = ({ addTask }) => {

    const [value, addValue] = useState(["lll"]);
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(value);
        if ( value !== "") {
            addTask(value);
            addValue("");
        }
    }

    return (
        <>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Enter the Name" 
          value={value}
          onChange={e => addValue(e.target.value)}
        />
        <button type='submit'><i className="material-icons">add</i></button>
      </form>
      </>
    )

}
// const AddTask = ({ addTask }) => {
//     const [value, updatevalue] = useState([""]);
//   // console.log([value, updatevalue]);
//     const handleSubmit = e => {
   
//       e.preventDefault();
//       console.log(updatevalue(e.target));
//       if(value === " "){
//          alert("Enter a value");
  
//       }
//      else if (value !== "") {
//       // console.log(value);
//         addTask(value);
//         updatevalue(" ")
//       }
//     }
//     return (
//       <>
//       <form onSubmit={handleSubmit}>
//         <input type="text"
//           placeholder="Enter the Name"
//           value={value}
//           onChange={e => updatevalue(e.target.value)}
//         />
//         <button type='submit'><i className="material-icons">add</i></button>
//       </form>
//       </>
//     )
//   }

export default AddValue;