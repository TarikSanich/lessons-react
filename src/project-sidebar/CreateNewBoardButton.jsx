import React, { useState } from 'react';
import CreateBoardModal from './CreateBoardModal';

const CreateNewBoardButton = ({ onCreate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Create New Board</button>
      {isModalOpen && <CreateBoardModal onClose={() => setIsModalOpen(false)} onCreate={onCreate} />}
    </>
  );
};

export default CreateNewBoardButton;
