
import './App.css'
import MenuBar from './comp/MenuBar'
import Midi from './comp/Midi'
import Rgt from './comp/Rgt'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const Separator = () => {
    return <div className="separator"></div>;
  };
  return (
    <div className='container'>
    
      <MenuBar></MenuBar>
      <Separator />
      <Midi></Midi>
      <Separator />
      <Rgt></Rgt>
    </div>
  )
}

export default App
