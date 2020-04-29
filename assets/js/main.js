let listNode = document.getElementById("project-list")

projects.forEach(proj => {
    let outer = document.createElement("div")
    outer.setAttribute("class", "mainlistview")

    let imgContainer = document.createElement("div")
    let img = document.createElement("img")
    imgContainer.setAttribute("class", "left-div")
    img.src = proj["thumbnail"]
    imgContainer.appendChild(img)

    let descriptionContainer = document.createElement("div")
    let title = document.createElement("h3")
    let link = document.createElement("a")
    let description = document.createElement("p")
    let languages = document.createElement("p")
    descriptionContainer.className = "right-div-content"
    description.innerHTML = proj["description"]
    link.href = proj["src"]
    link.innerHTML = proj["title"]
    languages.innerHTML = "Languages used: " + proj["lang"]
    title.appendChild(link)
    descriptionContainer.appendChild(title)
    descriptionContainer.appendChild(description)
    descriptionContainer.appendChild(languages)

    outer.appendChild(imgContainer)
    outer.appendChild(descriptionContainer)
    listNode.appendChild(outer)
})