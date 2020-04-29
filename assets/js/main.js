let listNode = document.getElementById("project-list")

projects.forEach(proj => {
    let outer = document.createElement("div")
    outer.setAttribute("class", "project-item")

    let imgContainer = document.createElement("div")
    let img = document.createElement("img")
    imgContainer.setAttribute("class", "img-div")
    img.src = proj["thumbnail"]
    imgContainer.appendChild(img)

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
    languages.innerHTML = "<b>Languages</b>: " + proj["languages"]
    tools.innerHTML = "<b>Tools</b>: " + proj["tools"]
    title.appendChild(link)
    textContainer.appendChild(title)
    textContainer.appendChild(description)
    if (proj["languages"]) {
        textContainer.appendChild(languages)
    }
    if (proj["tools"]) {
        textContainer.appendChild(tools)
    }

    outer.appendChild(imgContainer)
    outer.appendChild(textContainer)
    listNode.appendChild(outer)
})