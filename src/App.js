
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
import AcSinglePage from './Singles/AcSinglePage';
import ComputerSingle from './Singles/ComputerSingle';
import BooksSingle from './Singles/BooksSingle';
import FridgeSingle from './Singles/FridgeSingle';
import FurnitureSingle from './Singles/FurnitureSingle';
import KitchenSingle from './Singles/KitchenSingle';
import TvSingelPage from './Singles/TvSingelPage';
import WatchSinglePage from './Singles/WatchSinglePage';
import LadysSingle from './Singles/LadysSingle';
import MenSinglePage from './Singles/MenSinglePage';
import SpeakerSingle from './Singles/SpeakerSingle';

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
         <Route path='/ac/:id' element={<AcSinglePage/>}/>
         <Route path='/laptops/:id' element={<ComputerSingle/>}/>
        <Route path='/books/:id' element={<BooksSingle/>}/>
         <Route path='/fridge/:id' element={<FridgeSingle/>}/>
         <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
         <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
         <Route path='/tv/:id' element={<TvSingelPage/>}/>
         <Route path='/watch/:id' element={<WatchSinglePage/>}/>
         <Route path='/ladys/:id' element={<LadysSingle/>}/>
         <Route path='/mens/:id' element={<MenSinglePage/>}/>
         <Route path='/speakers/:id' element={<SpeakerSingle/>}/>
    </Routes>
    </div>
  );
}

export default App;
