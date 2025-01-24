function bmi(weight, height) {
  const bmi = (weight / height**2).toFixed(5);
  console.log(bmi)
  const res = bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese"
  return [res, `For weight = ${weight} and height = ${height}"`];
}
console.log(bmi(86.7, 1.7))
console.log(bmi(74, 2.00))