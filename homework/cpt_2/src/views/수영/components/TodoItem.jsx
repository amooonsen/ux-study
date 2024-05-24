


import "./TodoItem.css"


const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    }
    const onClickDeleteButton = () => {
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            <input onChange= {onChangeCheckbox} checked={isDone} readOnly type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">
                {new Date(date).toLocaleDateString()}
            </div>
            <button onClick={onClickDeleteButton}>Delete</button>
        </div>
    )
};

export default TodoItem;