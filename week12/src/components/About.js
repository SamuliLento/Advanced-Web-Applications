import {useState, useEffect} from 'react';

function About () {

    const [data, setData] = useState(null)

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setData(json))

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
