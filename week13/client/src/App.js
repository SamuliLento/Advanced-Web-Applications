import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './components/Index';
import Book from './components/Book';
import NotFoundPage from './components/NotFoundPage';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Books</h1>
                <Routes>
                    <Route path="/" element={ <Index /> } />
                    <Route path="/book/:name" element={ <Book /> } />
                    <Route path="*" element={ <NotFoundPage /> }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
