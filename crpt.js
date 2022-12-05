// Importa a biblioteca de criptografia do Node.js.
const crypto = require("crypto");

// Criptografa a entrada de dados usando o algoritmo AES-256 em modo CTR.
function encryptData(data, password) {
  // Cria um novo objeto de criptografia usando o algoritmo AES-256 e o modo CTR.
  let cipher = crypto.createCipher("aes-256-ctr", password);

  // Criptografa os dados de entrada e retorna o resultado como uma string hexadecimal.
  let encryptedData = cipher.update(data, "utf8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
}
