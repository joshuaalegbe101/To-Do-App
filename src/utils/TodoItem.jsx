import React, { useState } from "react";

function TodoItem({ todo, dispatch }) {
    const [editText, setEditText] = useState(todo.text);

    function handleSave() {
        dispatch({ type: "SAVE_EDIT", payload: { id: todo.id, text: editText } });
    }

    return (
        <li>
        {todo.isEditing ? (
          <>
            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => dispatch({ type: "CANCEL_EDIT", payload: todo.id })}>Cancel</button>
          </>
        ) : (
          <>
            <input type="checkbox" checked={todo.isComplete} onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })} />
            <span style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "START_EDITING", payload: todo.id })}>Edit</button>
            <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })} disabled={!todo.isComplete}>
              Delete
            </button>
          </>
        )}
      </li>
    );
  }
  
  export default TodoItem;