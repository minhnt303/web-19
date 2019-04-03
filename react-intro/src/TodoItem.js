import React from 'react';

const TodoItem = (props) => {
    return(
        <div>
            {props.item} <button>Delete</button>
        </div>
    );
};

export default TodoItem;//export default chỉ export 1 file 1 lần còn export {TodoItem} là cho nhiều file