import React from 'react';
import Sidebar from './project-sidebar/Sidebar';
import CreateNewBoardButton from './project-sidebar/CreateNewBoardButton';
import BoardList from './project-sidebar/BoardList';
import HelpModal from './project-sidebar/HelpModal';
import LogoutButton from './project-sidebar/LogoutButton';

const App = () => {
  return (
    <div className="app">
      <CreateNewBoardButton onCreate={handleCreateBoard} />
      <CreateNewBoardButton /> 
      <BoardList />
      /* <HelpModal />
      <LogoutButton />
    </div>
  );
};

export default App;
