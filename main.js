import * as http from "http";
import * as fs from "fs";

let PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  handleRoute(req.url, res);
});

server.listen(PORT, () => {
  console.log("listening on port 3000.");
});

var handleRoute = async (route, res) => {
  var buffer;
  if (route === "/") {
    buffer = await fs.promises.readFile("./pages/index.html");
  } else if (route === "/about") {
    buffer = await fs.promises.readFile("./pages/about.html");
  } else {
    buffer = await fs.promises.readFile("./pages/404.html");
  }
  res.write(buffer);
  res.end();
};
