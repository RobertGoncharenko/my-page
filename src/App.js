import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import UserSearch from "./components/SearchUser";
import Example from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Example />
      
      <div>
        
        <UserSearch />
      </div>
    </div>
  );
}

export default App;
