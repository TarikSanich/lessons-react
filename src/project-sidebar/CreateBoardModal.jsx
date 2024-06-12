import React, { useState } from 'react';
import Modal from 'react-modal';

const CreateNewBoardModal = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const [background, setBackground] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }
    onCreate({ title, icon, background });
    setTitle('');
    setIcon('');
    setBackground('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create New Board Modal"
    >
      <h2>Create New Board</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <div>
          <label>
            <input
              type="radio"
              value="icon1"
              checked={icon === 'icon1'}
              onChange={() => setIcon('icon1')}
            />
            Icon 1
          </label>
          <label>
            <input
              type="radio"
              value="icon2"
              checked={icon === 'icon2'}
              onChange={() => setIcon('icon2')}
            />
            Icon 2
          </label>
          {/* Add more radio buttons for other icons */}
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="background1"
              checked={background === 'background1'}
              onChange={() => setBackground('background1')}
            />
            Background 1
          </label>
          <label>
            <input
              type="radio"
              value="background2"
              checked={background === 'background2'}
              onChange={() => setBackground('background2')}
            />
            Background 2
          </label>
          {/* Add more radio buttons for other backgrounds */}
        </div>
        <button type="submit">Create</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default CreateNewBoardModal;
