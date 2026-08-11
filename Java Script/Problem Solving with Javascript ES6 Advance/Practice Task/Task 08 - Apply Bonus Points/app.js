const applyBonusPoints = (users, bonus) => {
  const totalPoints = users.map((item) => {
    return {
      ...item,
      points: item.points + bonus,
    };
  });

  return totalPoints;
};

const users = [{ name: "Rafi", points: 20 }];
const bonus = 5;

console.log(users);

console.log(applyBonusPoints(users, bonus));

console.log(users);
