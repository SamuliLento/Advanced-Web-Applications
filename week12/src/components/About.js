import {useState, useEffect} from 'react';

function About () {

    const [data, setData] = useState(null)

    useEffect(() => {
        async function doStuff() {
            const url = "https://jsonplaceholder.typicode.com/posts"
            const stuffPromise = await fetch(url);
            const stuffJSON = await stuffPromise.json();

            setData(stuffJSON);
        }
        doStuff();

        console.log(data);

    });


    return (
        <div>
            About
            <ul>
                {data.map((item) => (
                    <React.Fragment key={item.id}>
                        <li>
                            {item.title}
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}

export default About
