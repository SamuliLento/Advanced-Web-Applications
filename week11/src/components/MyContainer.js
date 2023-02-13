import MyList from "./MyList"

function MyContainer () {
    return (
        <div>
            <MyList 
                header="Really epic list component"
                items={[
                    {id: "1", text: "This is an item"},
                    {id: "2", text: "Also this"},
                ]}
            />
        </div>
    )
}

export default MyContainer
