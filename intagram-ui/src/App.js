import logo from './logo.svg';
import './App.css';
import Leftsidebar from './components/Leftsidebar';
import Feed from './components/Feed';
import RightSidebar from './components/RightSidebar';
function App() {
  return (
    <main className="bg-black flex h-screen">
    <div className="w-full md:flex">
  
   
      <Leftsidebar/>
      <div className='max-w-[41rem] w-full'>
        <Feed/>
      </div>
      <RightSidebar/>
      
    </div>
    </main>
  );
}

export default App;
