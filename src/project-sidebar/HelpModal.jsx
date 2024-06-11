import { useState } from 'react';
import axios from 'axios';

const HelpModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!name || !message) return alert('All fields are required');

    try {
      await axios.post('/api/help', { name, message });
      onClose();
    } catch (error) {
      console.error('Failed to send help request', error);
    }
  };

  return (
    <div className="modal">
      <h2>Need Help</h2>
      <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Send</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default HelpModal;
