/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Male = { male: boolean };
type Female = { female: boolean };
type Gender = Male | Female;
const myGender: Gender = { male: true };

export { };
