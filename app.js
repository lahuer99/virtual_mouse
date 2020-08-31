const express = require("express");
const app = express();
const fs = require('fs');
// const file = fs.createWriteStream('./storage/app/xy.txt');
const file = fs.createWriteStream('/sys/devices/platform/virmouse/vmevent');


const outfile = "./storage/app/xy.txt"
app.use(express.json());
app.use("/ui", express.static("public"));
app.get("/", (req, response) => {
    response.writeHead(302, {
        'Location': '/ui/joystick.html'
      });
    response.end()
})
app.post("/co-ordinates", async (req, res, next) => {
    res.json();
    let { rel_x, rel_y, btn } = req.body;
    rel_x = rel_x;
    rel_y = rel_y;
    file.write(`${rel_x} ${rel_y} ${btn}\n`)
})

app.listen(8080, function() {
    console.log("Server started at port 8080");
})
