module.exports = (objetoParams) => {
  for (let propriedade in objetoParams) {
    if (/Id/di.test(propriedade)) {
      objetoParams[propriedade] = Number(objetoParams[propriedade]);
    }
  }
  return this.objetoParams;
};
