const confirmHealth = (snack) => {
  let { fiber, protein, added_sugar } = snack;
  if ((protein >= 5 || fiber >= 5) && added_sugar < 5) {
    return true;
  }
  if (isNaN(protein) || isNaN(fiber) || isNaN(added_sugar) || (!protein && !fiber && !added_sugar)){
    return null
  }
  return false
}

module.exports = confirmHealth;
