export default function TodoCard (props){

    const {children,handleEditTodo,handleDeleteTodo,index}=props;

    return (
        <li className='todoItem'>
            {children}
          <div className="actionsContainer">
            <i onClick={()=> {
                console.log("hello");
                handleEditTodo(index);
            }}className="fa-solid fa-pen-to-square"></i>
            <i onClick={()=>{
                handleDeleteTodo(index);
            }} className="fa-regular fa-trash-can"></i>
          </div>
        </li>
    )
}