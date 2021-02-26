var users = [
  {
    id: 1,
    username: "goldroger",
    name: "Gol D. Roger",
    position: "Pirate King",
  },
  {
    id: 2,
    username: "mrzero",
    name: "Sir Crocodile",
    position: "Former-Shichibukai",
  },
  {
    id: 3,
    username: "luffy",
    name: "Monkey D. Luffy",
    position: "Captain",
  },
  {
    id: 4,
    username: "kuzan",
    name: "Aokiji",
    position: "Former Marine Admiral",
  },
  {
    id: 5,
    username: "shanks",
    name: "'Red-Haired' Shanks",
    position: "The 4 Emperors",
  },
];

exports.findAll = () => {
  return users;
};

exports.findById = (id) => {
  return users.find((item) => {
    return item.id ==id;
  });
};
exports.save = (user) => {
    users.push(user);
    return user;
};
// console.log(this.findById(1)); 