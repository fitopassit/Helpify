// Создать массив с ролями
import prisma from "@/lib/prisma";

const roles = ["Admin", "Curator", "Editor", "User"];

// Функция для генерации случайного имени
function getRandomName() {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Heidi",
    "Ivan",
    "Judy",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

// Функция для генерации случайной роли
function getRandomRole() {
  return roles[Math.floor(Math.random() * roles.length)];
}

// Функция для генерации случайного изображения
function getRandomImage() {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];
  return images[Math.floor(Math.random() * images.length)];
}

// Создать 10 пользователей с разными ролями
const users = [];
for (let i = 0; i < 10; i++) {
  const user = {
    name: getRandomName(),
    role: getRandomRole(),
    image: getRandomImage(),
  };
  users.push(user);
}

// Использовать Prisma для создания пользователей
export async function createUsers() {
  users.map(async (user) => {
    await prisma.user.create({
      data: {
        name: user.name,
        role: user.role,
        image: user.image,
      },
    });
  });
  console.log('User create')
}
