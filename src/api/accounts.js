const accountsData = [
  {
    id: 1,
    name: "Account 1",
    color: "rgb(255, 0, 0)",
    gaji: 500012,
  },
  {
    id: 2,
    name: "Account 2",
    color: "rgb(255, 128, 0)",
    gaji: 1500012,
  },
  {
    id: 3,
    name: "Account 3",
    color: "rgb(255, 255, 0)",
    gaji: 300012,
  },
  {
    id: 4,
    name: "Account 4",
    color: "rgb(128, 255, 0)",
    gaji: 200012,
  },
  {
    id: 5,
    name: "Account 5",
    color: "rgb(0, 255, 0)",
    gaji: 100012,
  },
  {
    id: 6,
    name: "Account 6",
    color: "rgb(0, 255, 128)",
    gaji: 50012,
  },
  {
    id: 7,
    name: "Account 7",
    color: "rgb(0, 255, 255)",
    gaji: 30012,
  },
];

export const fetchAccounts = async () => {
  try {
    // Simulate an asynchronous operation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(accountsData);
      }, 1000); // Delayed response for demonstration purposes
    });
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return [];
  }
};
