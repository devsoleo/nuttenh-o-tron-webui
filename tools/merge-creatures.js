const fs = require("fs")

const data = require(process.argv[2])

const creatures = data.filter((item, index, self) => {
  // Crée une clé unique pour chaque combinaison de locale et name
  const uniqueKey = `${item[".local"]}-${item[".name"]}`;

  // Vérifie si une combinaison locale-name a déjà été rencontrée
  return self.findIndex(i => `${i[".local"]}-${i[".name"]}` === uniqueKey) === index;
});

fs.writeFileSync('./src/data/creatures-unique.json', JSON.stringify(creatures));