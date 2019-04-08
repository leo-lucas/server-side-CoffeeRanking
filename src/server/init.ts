import server from "./server";
server.listen(5000, () => {
  console.log(`[SERVER] Pode pedir votar no seu café`);
  console.log(`[SERVER] Running at http://localhost:5000`);
});
