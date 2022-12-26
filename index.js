const express = require('express')
const app = express()
const PORT = 5050
const cors = require('cors')
const { WebhookClient } = require('dialogflow-fulfillment')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, resp) => {
    resp.json({ msg: "hello from server" })
})

app.post('/', async (req, res) => {
    console.log("first")

    let agent = new WebhookClient({ request: req, response: res })
    let intentMap = new Map()

    const demo = async (agent) => {
        agent.add("sending respnse from backend")
    }
    intentMap.set("webhook", demo)
    agent.handleRequest(intentMap)

})


app.listen(PORT, () => {
    console.log("CONNECTED")
})