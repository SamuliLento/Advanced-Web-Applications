if (document.readyState !== "loading") {
    console.log("Document is ready!");
    initializeCode();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      console.log("Document is ready after waiting!");
      initializeCode();
    });
  }

function initializeCode() {

    async function generateWikiItem(breed) {

        const container = document.getElementById("container");

        const url = ("https://dog.ceo/api/breed/" + breed + "/images/random");
        console.log(url)
        const imagePromise = await fetch(url);
        const imageJSON = await imagePromise.json();

        console.log(imageJSON);

        const url2 = ("https://en.wikipedia.org/api/rest_v1/page/summary/" + breed);
        const textPromise = await fetch(url2);
        const textJSON = await textPromise.json();

        console.log(textJSON);

        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let div2 = document.createElement("div");
        let p = document.createElement("p");
        let div3 = document.createElement("div");
        let img = document.createElement("img");

        div.classList.add("wiki-item");
        h1.classList.add("wiki-header");
        div2.classList.add("wiki-content");
        p.classList.add("wiki-text");
        div3.classList.add("img-container");
        img.classList.add("wiki-img");

        h1.innerText = breed;
        p.innerText = textJSON.extract;
        img.src = imageJSON.message;

        div.appendChild(h1);
        div.appendChild(div2);
        div2.appendChild(p);
        div2.appendChild(div3);
        div3.appendChild(img);

        container.appendChild(div);
    }

    generateWikiItem("affenpinscher");
    generateWikiItem("rottweiler");
    generateWikiItem("husky");
    generateWikiItem("pug");
    generateWikiItem("shihtzu");
}