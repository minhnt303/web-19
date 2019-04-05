import React from 'react';

const TodoItem = (props) => {
    return (
        <div>
            {props.isDone ? <strike>{props.item}</strike> : <span>{props.item}</span> //props.item
            }
            
            <button onClick={() => {
                props.handleDone(props.item)
            }} >Done</button>
            <button onClick={() => {
                props.handleDelete(props.item)
            }} >Delete</button>

            {/* {props.children} sử dụng khi thêm thẻ vào tag TodoItem*/}
        </div>
    );
};

export default TodoItem;//export default chỉ export 1 file 1 lần còn export {TodoItem} là cho nhiều file