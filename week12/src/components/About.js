import {useState, useEffect} from 'react';

function About () {

    let [data, setData] = useState([])

    useEffect(() => {

        let mounted = true;

        async function doStuff() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const json = await response.json()

            if (mounted) {
                setData(json);
            }
        }
        doStuff();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default About
