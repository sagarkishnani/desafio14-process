process.on("message", (message) => {
  if (message === "start") {
    let result = process.cwd();
    process.send(result);
  }
});
