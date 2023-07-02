let express = require('express')
let app = express();

app.use(express.static(__dirname+'/dist/my-portfolio'))

app.get('*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/my-portfolio/index.html')

})

app.listen(process.env.PORT || 8080)