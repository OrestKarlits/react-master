import './App.css';
import Users from "./Components/Users/Users";
import Comentari from "./Components/Comments/Comments";
import Posts from "./Components/Posts/Posts";

function App() {
  return (
      <>
    <div className={'app'}>
      <Users/>
      <Posts/>
    </div>
        <div className={'com'}>
      <Comentari/>
        </div>
      </>
  );
}

export default App;
