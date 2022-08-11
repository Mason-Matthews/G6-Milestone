import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

function App() {
  return (
  <div className="App">
    <div className="container mx-auto max-w-10xl text-center text-black">
      <h1 className="header">E x p e n s e T r a c k e r</h1>
      <div className="grid md:grid-cols-2 gap-3 display:block">
        {}
          <Graph></Graph>
        {}
          <Form></Form>
      </div>
    </div>
  </div>
  );
}

export default App;