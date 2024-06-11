import React, { useState } from 'react';
import CreateBoardModal from './CreateBoardModal';

const BoardItem = ({ board, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="board-item">
      <h3>{board.title}</h3>
      <button onClick={() => onDelete(board.id)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      {isEditing && (
        <CreateBoardModal
          onClose={() => setIsEditing(false)}
          onCreate={(updatedBoard) => {
            onEdit(board.id, updatedBoard);
            setIsEditing(false);
          }}
          initialData={board}
        />
      )}
    </div>
  );
};

export default BoardItem;
