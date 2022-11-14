if(document.readyState !== "loading"){
    console.log("Document is ready");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Document ready after waiting!");
        initializeCode();
    })
}

function initializeCode() {

    const submitDataButton = document.getElementById("submit-data");

    submitDataButton.addEventListener("click", function() {
        const textInput = document.getElementById("input-text");

        console.log(textInput.value);

        fetch("http://localhost:3000/list", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: '{ "text": "' + textInput.value + '" }'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    });
}