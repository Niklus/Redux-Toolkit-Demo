import './App.css'
import MoviePlaylist from "./components/MoviePlaylist.jsx";
import SongPlaylist from "./components/SongPlaylist.jsx";

function App() {

  // TODO: Reset State
  const handleResetClick = () => {
    
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

export default App
