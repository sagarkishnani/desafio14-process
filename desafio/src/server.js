const express = require("express");
const http = require("http");
const { fork } = require("child_process");
const yargs = require("yargs/yargs")(process.argv.slice(2));

const args = yargs
  .default({
    modo: "prod",
    puerto: 8080,
    debug: false,
  })
  .alias({ m: "modo", p: "puerto", d: "debug" }).argv;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/info", function (req, res) {
  res.send(
    `Los argumentos de entrada son: ${process.argv} <br>
    El nombre de la plataforma es: ${process.platform} <br>
    La versión de node es: ${process.version} <br>
    Uso de memoria: ${process.memoryUsage} <br>
    El path de ejecución es: ${process.execPath} <br>
    Id del proceso: ${process.pid} <br>
    El directorio actual es: ${process.cwd()}`
  );
});

// server.on("request", (req, res) => {
//   let { url } = req;
//   if (url === "/info") {
//     res.send(process.cwd());
//     res.send(process.pid);
//   }
// });
const server = app.listen(args.puerto, () => {
  console.log(`Servidor http escuchando en el puerto ${args.puerto}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
