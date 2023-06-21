import './App.css';
import Navigation from './components/navigation/Navigation';
import Player from './components/player/Player';

import { Routes, Route } from 'react-router-dom';
import Details from './components/shared/Details';
import Contact from './components/shared/Contact';

function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Player />}></Route>
                <Route path="/detail/:id" element={<Details />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    );
}

export default App;
