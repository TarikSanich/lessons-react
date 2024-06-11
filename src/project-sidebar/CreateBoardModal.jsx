import React, { useState } from 'react';
import axios from 'axios';

const CreateBoardModal = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('icon1'); // замените на реальные иконки
  const [selectedBackground, setSelectedBackground] = useState('none');

  const handleSubmit = async () => {
    if (!title) return alert('Title is required');

    try {
      const response = await axios.post('/api/boards', {
        title,
        icon: selectedIcon,
        background: selectedBackground,
      });
      onCreate(response.data);
      onClose();
    } catch (error) {
      console.error('Failed to create board', error);
    }
  };

  return (
    <div className="modal">
      <h2>Create New Board</h2>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <div>
        <h3>Icons</h3>
        <input type="radio" name="icon" value="icon1" checked={selectedIcon === 'icon1'} onChange={() => setSelectedIcon('icon1')} />
        <input type="radio" name="icon" value="icon2" onChange={() => setSelectedIcon('icon2')} />
        {/* добавьте другие иконки */}
      </div>
      <div>
        <h3>Backgrounds</h3>
        <input type="radio" name="background" value="none" checked={selectedBackground === 'none'} onChange={() => setSelectedBackground('none')} />
        <input type="radio" name="background" value="background1" onChange={() => setSelectedBackground('background1')} />
        {/* добавьте другие фоны */}
      </div>
      <button onClick={handleSubmit}>Create</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CreateBoardModal;
