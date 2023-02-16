const MyHOC = (OriginalComponent) => {
    const NewComponent = (name) => {

        return (
            <div class="wrapper">
                <OriginalComponent name={name}/>
            </div>
        )
    }
    return NewComponent
}

export default MyHOC