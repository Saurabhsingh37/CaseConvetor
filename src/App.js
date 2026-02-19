import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* <div className="bg-image"></div> */}
    <Header title ="Saurabh Singh" aboutText="About"/>
    
    <div className="container my-3">
    <TextForm heading= "Text Case Converter" />
    </div>
    <Footer/>
    
    
    </>
  );
}

export default App;
