import { HomeView, ContactView, ProjectsView, AboutView } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<HomeView className="" />} />
         <Route path='/About' element={<AboutView />} />
         <Route path='/Projects' element={<ProjectsView />} />
         <Route path='/Contact' element={<ContactView />} />
      </Routes>
    </div>
  );
}

export default App;
