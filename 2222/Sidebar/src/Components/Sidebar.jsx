// import { useState } from 'react';
// import axios from 'axios';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '/vite.svg';
// import BoardItem from './Board/BoardItem.jsx';
// import BoardList from './Board/BoardList.jsx';
// import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton.jsx';
// import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal.jsx';
// import LogoutButton from './LogoutButton.jsx';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Task Pro</h1>
//       <CreateNewBoardButton/>
//       {/* <BoardItem/> */}
//       {/* <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} /> */}
//       <CreateNewBoardModal/>
//       <LogoutButton/>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './Board/BoardList.jsx';
import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton.jsx';
import CreateNewBoardModal from '../Components/CreateNewBoard/CreateNewBoardModal.jsx';
import LogoutButton from './LogoutButton.jsx';
import './Sidebar.css';

function Sidebar() {
  const [boards, setBoards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('/api/boards');
        setBoards(response.data);
      } catch (error) {
        console.error('Error fetching boards:', error);
      }
    };

    fetchBoards();
  }, []);

  const handleDeleteBoard = async (id) => {
    try {
      await axios.delete(`/api/boards/${id}`);
      setBoards(boards.filter((board) => board.id !== id));
    } catch (error) {
      console.error('Error deleting board:', error);
    }
  };

  const handleEditBoard = async (id, updatedBoard) => {
    try {
      const response = await axios.put(`/api/boards/${id}`, updatedBoard);
      setBoards(boards.map((board) => (board.id === id ? response.data : board)));
    } catch (error) {
      console.error('Error editing board:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>Task Pro</h1>
      <div>
      <CreateNewBoardButton onOpenModal={openModal} />
      <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} />
      <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
      <LogoutButton />
      </div>
      
      
    </>
  );
}

export default Sidebar;
