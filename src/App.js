import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import UserSearch from "./components/SearchUser";
import BasicExample from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <>
        <BasicExample />
        </>
        <UserSearch />
      </div>
    </div>
  );
}

export default App;
