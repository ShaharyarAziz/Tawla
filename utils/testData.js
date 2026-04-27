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
function generateRandomPrice() {
  const price = Math.floor(Math.random() * (500 - 100) + 100).toFixed(2);
  return price.toString();
}
function generateFoodDescription() {
  const dishes = ["pizza", "burger", "pasta", "biryani", "sandwich", "steak"];
  const adjectives = ["spicy", "crispy", "juicy", "flavorful", "delicious"];
  const extras = [
    "served hot",
    "with fresh herbs",
    "with special sauce",
    "chef special",
  ];

  return `A ${faker.helpers.arrayElement(adjectives)} ${faker.helpers.arrayElement(dishes)} ${faker.helpers.arrayElement(extras)}.`;
}
export { getRandomFoodCategory, generateSubCategoryName, generateRandomPrice, generateFoodDescription };
