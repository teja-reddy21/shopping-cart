
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Stores/Pages/LandingPage';
import Mobile from './Stores/Pages/Mobile';
import AcPage from './Stores/Pages/AcPage';
import BooksPage from './Stores/Pages/BooksPage';
import ComputerPage from './Stores/Pages/ComputerPage';
import FridgePage from './Stores/Pages/FridgePage';
import KitchenPage from './Stores/Pages/KitchenPage';
import FurniturePage from './Stores/Pages/FurniturePage';
import MensPage from './Stores/Pages/MensPage';
import SpeakerPage from './Stores/Pages/SpeakerPage';
import TvPage from './Stores/Pages/TvPage';
import WatchPage from './Stores/Pages/WatchPage';
import LadysPages from './Stores/Pages/LadysPages';
import MobileSingle from './Singles/MobileSingle';

function App() {
  return (
    <div>

    <Routes>
      <Route path='/' element={ <LandingPage/>}/>
      <Route path='/mobiles' element={<Mobile/>}/>
      <Route path='/ac' element={<AcPage/>}/>
      <Route path='/books' element={<BooksPage/>}/>
      <Route path='/laptops' element={<ComputerPage/>}/>
      <Route path='/fridge' element={<FridgePage/>}/>
      <Route path='/kitchen' element={<KitchenPage/>}/>
      <Route path='/furniture' element={<FurniturePage/>}/>
      <Route path='/men' element={<MensPage/>}/>
      <Route path='/speakers' element={<SpeakerPage/>}/>
      <Route path='/tv' element={<TvPage/>}/>
      <Route path='/watch' element={<WatchPage/>}/>
      <Route path='/ladys' element={<LadysPages/>}/>
         <Route path='/mobiles/:id' element={<MobileSingle/>}/>
    </Routes>
    </div>
  );
}

export default App;
