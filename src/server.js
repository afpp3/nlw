const express = require("express")
const server = express()

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("index.html", {
        title: "Um título"
    })
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")

})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//Start the server in 3000 port
server.listen(process.env.PORT || 3000);
