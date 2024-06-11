import React from 'react';
import BoardItem from './BoardItem';

const BoardList = ({ boards, onDelete, onEdit }) => {
  return (
    <div className={styles.boardList}>
      {boards.map((board) => (
        <BoardItem key={board.id} board={board} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default BoardList;
