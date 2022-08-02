import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

function App() {
  return (
  <div className="App">
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-black">
      <h1 className="header">Expense Tracker</h1>
      <div className="grid md:grid-cols-2 gap-3">
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