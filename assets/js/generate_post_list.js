let listNode = document.getElementById("posts")

posts.forEach(post => {
	let postNode = document.createElement("div")
	postNode.setAttribute("class", "post-item")

	let header = document.createElement("div")
	header.setAttribute("class", "header")

	let title = document.createElement("span")
	title.innerHTML = post["title"]
	let date = document.createElement("span")
	date.innerHTML = post["publication_date"]

	header.appendChild(title)
	header.appendChild(date)
	postNode.appendChild(header)
	
	postNode.appendChild(document.createElement("br"))

	let body = document.createElement("div")
	body.setAttribute("class", "body")

	let reading_time = document.createElement("p")
	reading_time.innerHTML = post["reading_time"]
	let preview = document.createElement("p")
	preview.innerHTML = post["body"].length > 120? post["body"].substring(0, 120) : post["body"]
	preview.innerHTML += " [...]"

	body.appendChild(reading_time)
	body.appendChild(document.createElement("br"))
	body.appendChild(preview)
	postNode.appendChild(body)

	listNode.prepend(postNode)
})
