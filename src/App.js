import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column w-100 vh-100 bg-black">
       <div className='d-flex justify-content-center align-items-center flex-column p-5 rounded' style={{backgroundColor:'white'}}>
          <h3 className='text-primary'>Counter Application</h3>
         <Counter/>
        </div>
    </div>
  );
}

export default App;
