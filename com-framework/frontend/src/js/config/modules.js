// src/config/modules.js

import { atoresArray } from "../../assets/database/atores";
import { classesArray } from "../../assets/database/classes";
import { diretoresArray } from "../../assets/database/diretores";

const modules = [
  {
    name: "atores",
    label: "Atores",
    data: atoresArray,
    fields: ["id", "nome", "nacionalidade"], // usado para a DynamicTable
  },
  {
    name: "classes",
    label: "Classes",
    data: classesArray,
    fields: ["id", "descricao"],
  },
  {
    name: "diretores",
    label: "Diretores",
    data: diretoresArray,
    fields: ["id", "nome", "idade"],
  },
];

export default modules;
