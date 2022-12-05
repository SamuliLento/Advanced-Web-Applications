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

    const addIngredientButton = document.getElementById("add-ingredient");

    let ingredients = [];

    addIngredientButton.addEventListener("click", function() {
        const ingredientText = document.getElementById("ingredients-text");

        ingredients.push(ingredientText.value);
        console.log(ingredients);
    });

    const addInstructionButton = document.getElementById("add-instruction");

    let instructions = [];

    addInstructionButton.addEventListener("click", function() {
        const instructionText = document.getElementById("instructions-text");

        instructions.push(instructionText.value);
        console.log(instructions);
    });

    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function() {
        const nameText = document.getElementById("name-text");

        console.log(nameText.value);
        console.log(ingredients);
        console.log(instructions);

        fetch("http://localhost:3000/recipe", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: '{ "name": "' + nameText.value + '", "ingredients": "' + ingredients + '", "instructions": "' + instructions + '" }'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    });

}