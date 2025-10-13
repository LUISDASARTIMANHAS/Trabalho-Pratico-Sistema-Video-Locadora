const atoresArray = store.getBanco("atores");

console.log("[DB CONTROLLER ATORES]: ", store);
console.log("atoresArray", atoresArray);
if (!atoresArray || atoresArray.length === 0) {
  console.log("Usando dados locais para atores.js");
  atoresArray = [
    {
      _id: 1,
      name: "ator 1",
      nacionalidade: "brasileiro",
    },
    {
      _id: 2,
      name: "ator 2",
      nacionalidade: "americano",
    },
  ];
}

export { atoresArray };
