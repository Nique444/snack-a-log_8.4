const confirmHealth = (snack) => {
  if (
    (snack.fiber > 5 && snack.added_sugar < 5) ||
    (snack.protein > 5 && snack.added_sugar < 5) ||
    (snack.fiber > 5 || snack.protein > 5 && snack.added_sugar < 5)
  ) {
    snack.is_healthy === true;
  } else if (
    (snack.fiber > 5 && snack.added_sugar > 5) ||
    (snack.protein > 5 && snack.added_sugar > 5) ||
    (snack.fiber > 5 || snack.protein > 5 && snack.added_sugar > 5)
  ) {
    snack.is_healthy === false;
  } else if (snack.fiber > 5 && snack.protein > 5 && snack.added_sugar > 5) {
    snack.is_healthy === false;
  } else if (snack.protein > 5 && snack.fiber > 5 && snack.added_sugar > 5) {
    snack.is_healthy === false;
  } else {
    null;
  }
};

module.exports = confirmHealth;
