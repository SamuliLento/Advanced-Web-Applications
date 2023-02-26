import './App.css';
import Index from './components/Index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Books</h1>
                <Routes>
                    <Route path="/" element={ <Index /> } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
