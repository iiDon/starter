type Payment = {
  id: string;
  amount: number;
  status: "بالانتظار" | "تحت المعالجة" | "مدفوع" | "مرفوض";
  email: string;
};

function getRandomId() {
  return Math.random().toString(36).substring(7);
}

function getRandomPayment(): Payment {
  const statuses: Payment["status"][] = [
    "بالانتظار",
    "تحت المعالجة",
    "مدفوع",
    "مرفوض",
  ];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  return {
    id: getRandomId(),
    amount: Math.floor(Math.random() * 1000) + 1,
    status: randomStatus,
    email: Math.random().toString(36).substring(2, 10) + "@example.com",
  };
}

export function getData(): Payment[] {
  const data: Payment[] = [];
  for (let i = 0; i < 24; i++) {
    data.push(getRandomPayment());
  }
  return data;
}
