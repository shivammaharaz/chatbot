const express = require('express')
const app = express()
const PORT = 5050
const cors = require('cors')
const path = require('path')
const fp = path.join(__dirname, "/public")
// console.log(fp)

const { WebhookClient } = require('dialogflow-fulfillment')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(fp))

app.get('/', async (req, resp) => {
    resp.send("index.html")
})

app.post('/', async (req, res) => {
    console.log("first")

    let agent = new WebhookClient({ request: req, response: res })
    let intentMap = new Map()

    const demo = async (agent) => {
        agent.add("sending respnse from backendx")
    }
    const demo2 = async (agent) => {
        agent.add("KNVDNDKJJKD")
    }
    intentMap.set("webhook", demo)
    intentMap.set("Ambuja", demo2)
    agent.handleRequest(intentMap)

})


app.listen(PORT, () => {
    console.log("CONNECTED")
})