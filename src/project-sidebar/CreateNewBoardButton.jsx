import  { useState } from 'react';
import CreateNewBoardModal from './CreateBoardModal';

const CreateNewBoardButton = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleCreate = (newBoard) => {
    if (onCreate) {
      onCreate(newBoard);
    }
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Create New Board</button>
      <CreateNewBoardModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onCreate={handleCreate}
      />
    </div>
  );
};
