const confirmHealth = (snack) => {
  let { fiber, protein, added_sugar } = snack;
  if ((protein >= 5 || fiber >= 5) && added_sugar < 5) {
    return true;
<<<<<<< HEAD
  }

  if (isNaN(protein) || isNaN(fiber) || isNaN(added_sugar)) {
    return null;
  }
  if (!protein && !fiber && !added_sugar) {
    return null;
=======
>>>>>>> 66e639e3549ad7c3092114047d526b0ad1e5a010
  }
  if (isNaN(protein) || isNaN(fiber) || isNaN(added_sugar) || (!protein && !fiber && !added_sugar)){
    return null
  }
  return false
}

module.exports = confirmHealth;
