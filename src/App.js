import React from 'react';
import StoryCreation from './components/StoryCreation';
import WritingTurn from './components/WritingTurn';
import VotingPanel from './components/VotingPanel';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">SpaceBooks</h1>
      <StoryCreation />
      <WritingTurn />
      <VotingPanel />
    </div>
  );
}

export default App;
