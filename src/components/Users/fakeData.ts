export type User = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};

function getRandomId() {
  return Math.random().toString(36).substring(7);
}

function getRandomUser(): User {
  const randomisActive = Math.random() > 0.5;

  const name = Math.random().toString(36).substring(2, 10);

  return {
    id: getRandomId(),
    name,
    email: Math.random().toString(36).substring(2, 10) + "@example.com",
    isActive: randomisActive,
  };
}

export function getData(): User[] {
  const data: User[] = [];
  for (let i = 0; i < 24; i++) {
    data.push(getRandomUser());
  }
  return data;
}
