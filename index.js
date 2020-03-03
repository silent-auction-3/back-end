require("dotenv").config();
const server = require("./api/server");
const portNum = process.env.PORT || isDebug() ? 6061 : 6060;

server.listen(portNum, () =>
  console.log(`** Express Running on ${portNum} **`)
);

function isDebug() {
  const argv = process.execArgv.join();
  const isDebug = argv.includes("inspect") || argv.includes("debug");
  
  return isDebug;
}