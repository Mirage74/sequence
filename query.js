const axios = require('axios')
let pathServer = "http://localhost:4000/api/get"

axios.get(
    pathServer
)
    .then(res => {
        console.log(res.data)
    })


