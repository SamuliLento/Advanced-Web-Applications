import './App.css';
import {useState} from 'react'

function App() {

    const [bookData, setBookData] = useState({})

    const submit = (e) => {
        e.prevetDefault()
        console.log("Getting here")

        fetch("/api/book/", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookData),
            mode: "cors"
        })
            .then(response => response.json())
    }

    const handleChange = (e) => {
        setBookData({...bookData, [e.target.id]: e.target.value})
    }

    return (
        <div className="App">
            <h1>Books</h1>
            <form onSubmit={submit} onChange={handleChange}>
                <input id="name" type="string"></input>
                <input id="author" type="string"></input>
                <input id="pages" type="number"></input>
                <input id="submit" type="submit"></input>
            </form>
        </div>
    );
}

export default App;
