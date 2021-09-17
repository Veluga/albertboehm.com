/* 
Every time I have to look at this abomination I have to laugh a little bit.
*/

let listNode = document.getElementById("project-list")

projects.forEach(proj => {
    let outer = document.createElement("div")
    outer.setAttribute("class", "project-item")

    let imgContainer = document.createElement("div")
    let img = document.createElement("img")
    imgContainer.setAttribute("class", "img-div")
    img.src = proj["thumbnail_1"]
    img.classList.add("bottom")


    imgContainer.appendChild(img)
    if (proj["thumbnail_2"]) {
        let img2 = document.createElement("img")
        img2.src = proj["thumbnail_2"]
        img2.classList.add("top")
        imgContainer.appendChild(img2)
    }

    let textContainer = document.createElement("div")
    let title = document.createElement("h3")
    let link = document.createElement("a")
    let description = document.createElement("p")
    let languages = document.createElement("p")
    let tools = document.createElement("p")
    textContainer.className = "text-div"
    description.innerHTML = proj["description"]
    link.href = proj["src"]
    link.innerHTML = proj["title"]
    languages.innerHTML = "<b>Language" + (proj["languages"].length > 1 ? "s" : "") + "</b>: " + proj["languages"].join(", ")
    tools.innerHTML = "<b>Tool" + (proj["tools"].length > 1 ? "s" : "") + "</b>: " + proj["tools"].join(", ")
    title.appendChild(link)
    textContainer.appendChild(title)
    textContainer.appendChild(description)
    if (proj["languages"].length > 0) {
        textContainer.appendChild(languages)
    }
    if (proj["tools"].length > 0) {
        textContainer.appendChild(tools)
    }

    outer.appendChild(imgContainer)
    outer.appendChild(textContainer)
    listNode.prepend(outer)
})