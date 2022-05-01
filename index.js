const express = require ('express')
const app = express()


//middelware
const workingDate = (req , res, next)=>{
    const day = new Date().getDay()
    const hours = new Date().getHours
    if((day===0) || (day===6) || (hours<9) || (hours >17)) {
        res.sendFile(__dirname + "/views/close.html")
}

else {
    next()
    }
}


app.use(workingDate)
app.use(express.static('views'))

//server
app.listen(5000, ()=>{
    console.log('server is running on port : 5000')
})