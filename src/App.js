import './App.css';
import Navigation from './components/navigation/Navigation';
import Player from './components/player/Player';

function App() {
    return (
        <div className="App">
            <div>
                <Navigation />
                <Player />
            </div>
        </div>
    );
}

export default App;
