import { HomeView, ContactView, ProjectView, AboutView } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<HomeView className="text-2xl" />} />
         <Route path='/About' element={<AboutView />} />
         <Route path='/Projects' element={<ProjectView />} />
         <Route path='/Contact' element={<ContactView />} />
      </Routes>
    </div>
  );
}

export default App;
