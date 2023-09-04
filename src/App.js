
import './App.css';

import Header from './component/Header';
import Movielist from './component/Movielist';
import movie from './movie.json'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        
          {movie.map((element)=>{
            return(
            <Movielist title={element.Title}
            year={element.Year} 
            img={element.Poster}/>
            )
        }
        )

        }
    
        
        
     
      </div>
     
    </div>
  );
}

export default App;
