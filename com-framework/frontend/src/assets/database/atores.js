import apiData from "../../service/api.js";

let atoresArray = apiData.atoresArray; // cria cópia local mutável
if (!atoresArray || atoresArray.length === 0) {
  console.log("Usando dados locais para atores.js");
  atoresArray = [
    {
      _id: 1,
      name: "ator 1",
    },
  ];
}

export { atoresArray };