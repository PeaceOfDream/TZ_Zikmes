import { useForm } from 'react-hook-form';
import './App.scss';
import { fetchFunc } from './fetchFunc';
import { FormComponent } from './FormComponent';

function App() {
  return (
    <div className="App">
      <FormComponent />
    </div>
  );
}

export default App;
