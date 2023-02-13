function MyList (props) {
    return (
        <div>
            <h1>{props.header}</h1>
            <ol>
                <li>
                    {props.items[0].text}
                </li>
                <li>
                    {props.items[1].text}
                </li>
            </ol>
        </div>
    )
}

export default MyList
