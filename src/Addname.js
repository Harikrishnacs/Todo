import React, { useState } from 'react';
import AddValue from './AddValue';


function Addname() {
    const addTask = (name) => {
        updatename([...names,{ name}]);
    };
    const [names, updatename] = useState([
        {
            name: 'hari',
            istrue: true
        },
        {
            name: 'krishna',
            istrue: false
        },
        {
            name: 'muthu',
            istrue: false
        },


    ])
    // const handleName = (index) => {
    //             const newName = [...names];
    //             newName[index].name = "hari";
    //             updatename(newName);
    //         }
    const handleName = (index) => {
        const newName = [...names];
        newName[index].name = "Krishna";
        updatename(newName);

    }
    return (
        <>
            <AddValue addTask={addTask} />
            {
                names.map((data, index) => {
                    return (
                        <>
                            <div onClick={() => handleName(index)}>{data.name}</div>
                        </>
                    )
                })

            }
            <button onClick={() => updatename([])}>Clear</button>
        </>
    )

}



















// function Addname() {
//     const addtask = name => {
//         updatename([...addname, { name }])
//     }
//     const [addname, updatename] = useState([
//         {
//             name: 'hari',
//             istrue: true
//         },
//         {
//             name: 'krishna',
//             istrue: false
//         },
//         {
//             name: 'muthu',
//             istrue: false
//         },

//     ])
//     const handleName = (index) => {
//         const newName = [...addname];
//         newName[index].name = "hari";
//         updatename(newName);
//     }
//     const handleDelete = (index) => {
//         const newName = [...addname];
//         newName.splice(index, 1);
//         updatename(newName);
//     }

//     return (
//         <>
//             <h1>TodoList</h1>

//             <AddTask addTask={addtask} />
//             {
//                 addname.map((data, index) => {
//                     return (
//                         <div className="task-status">
//                             <h2 onClick={() => handleName(index)}>{data.name}</h2>
//                             <button onClick={() => handleDelete(index)}>Delete</button>
//                         </div>
//                     )
//                 })
//             }
//             <button onClick={() => updatename([])}>Clear</button>
//         </>
//     )


// }

export {
    Addname
}