import {useState, useEffect} from 'react';

function About () {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setData(data.title))
    },);

    console.log(data);

    return (
        <div>
            About
            <ul>

            </ul>
        </div>
    )
}

export default About
