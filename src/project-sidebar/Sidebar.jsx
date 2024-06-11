import { useState } from 'react';
// import LogoComponent from './LogoComponent';
import CreateNewBoardButton from './CreateNewBoardButton';
import BoardList from './BoardList';
import HelpModal from './HelpModal';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [boards, setBoards] = useState([]);

  const handleCreateBoard = (newBoard) => {
    setBoards([...boards, newBoard]);
  };

  const handleDeleteBoard = (id) => {
    setBoards(boards.filter(board => board.id !== id));
  };

  const handleEditBoard = (id, updatedBoard) => {
    setBoards(boards.map(board => (board.id === id ? updatedBoard : board)));
  };

  return (
    <div className="sidebar">
      <CreateNewBoardButton onCreate={handleCreateBoard} />
      <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} />
      <button onClick={() => setIsHelpModalOpen(true)}>Need Help</button>
      {isHelpModalOpen && <HelpModal onClose={() => setIsHelpModalOpen(false)} />}
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
