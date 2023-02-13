import {useState} from "react"
import MyList from "./MyList"

function MyContainer () {

    const [items, setItems] = useState([
        { id: "1", text: "This is an item" },
        { id: "2", text: "Also this" },
    ])

    const [text, setText] = useState('')

    const addItem = (text) => {
        const id = "3"
        const newItem = {id, ...text}
        setItems([...items, newItem])
    }

    const onClick = (e) => {
        e.preventDefault()

        addItem(text)

        setText("")
    }

    return (
        <div>
            <MyList 
                header="Really epic list component"
                items={items}
            />
            <textarea onChange={(e) => setText(e.target.value)} value={text}></textarea>
            <button onClick={onClick}>Submit</button>
        </div>
    )
}

export default MyContainer
