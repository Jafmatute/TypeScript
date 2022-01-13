(() => {
  type Avenger = { name: string; weapon: string };

  const ironman: Avenger = { name: "Iron Man", weapon: "Armorsuit" };
  const hulk: Avenger = { name: "Hulk", weapon: "Force" };
  const spiderman: Avenger = { name: "SpiderMan", weapon: "Spider webs" };

  const avengers: Avenger[] = [ironman, hulk, spiderman];

  for (const avenger of avengers) {
    console.log(avenger.name);
  }
})();
