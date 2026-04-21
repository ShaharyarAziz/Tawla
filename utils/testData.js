import { faker } from "@faker-js/faker";

function getRandomFoodCategory() {
  const adjectives = ["Spicy", "Grilled", "Crispy", "Hot", "BBQ", "Cheesy"];
  const foods = ["Burger", "Pizza", "Biryani", "Pasta", "Sandwich", "Fries"];

  const adj = faker.helpers.arrayElement(adjectives);
  const food = faker.helpers.arrayElement(foods);

  return `${adj} ${food}`;
}
function generateSubCategoryName() {
  const adjectives = ["Spicy", "Grilled", "Crispy", "Hot", "BBQ", "Cheesy"];
  const foods = ["Burger", "Pizza", "Biryani", "Pasta", "Sandwich", "Fries"];

  const adj = faker.helpers.arrayElement(adjectives);
  const food = faker.helpers.arrayElement(foods);

  return `${adj} ${food}`;
}
export { getRandomFoodCategory, generateSubCategoryName };
