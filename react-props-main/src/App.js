import Profile from './profile/Profile';
import { Card } from 'react-bootstrap';

function App() {
  const handleName = (name = "User Name") => alert(name);
  return (
    <div className="App">
      <Profile name="Chayma Jday" bio="I'm a Full-Stack JS student in Go My Code" profession="Student" handleName={handleName}>
        <Card.Img variant="top" src="./chaymajd.jpg" alt="profile pic" style={{ height: 300, width: '26rem' }} />
      </Profile>
    </div>
  );
}

export default App;
