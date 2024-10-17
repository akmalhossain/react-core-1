// export default function Todo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }
// condition based

// 1
// export default function Todo({task, isDone}){
//   if(isDone ===true) return <li>Finished : {task}</li>
//   else return <li>Work On : {task}</li>
// }

// 2
// export default function Todo({task, isDone}){
//   if(isDone) 
//     return <li>Finished : {task}</li>
//   else 
//   return <li>Work On : {task}</li>
// }

// 3 ternary
// export default function Todo({task, isDone}){
//     return (
//        <li>{isDone?'finished':'work on'}</li> )
//   }

//   4 &&
// export default function Todo({task, isDone}){
//         return(
//             <li> {task} {isDone && 'Done'}</li>
//         )
//     }
// 5 ||
    // export default function Todo({task, isDone}){
    //     return(
    //         <li> {task} {isDone || 'Not Done'}</li>
    //     )
    // }

// 6
    export default function Todo({task, isDone}){
        let listItem;
       if(isDone)
        listItem =  <li>Finish: {task}</li> 
       else 
       listItem = <li>Work On: {task}</li>

       return listItem 
    }
  