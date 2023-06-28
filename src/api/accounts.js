const accountsData = [
  {
    id: 0,
    name: "Akun Gaji",
    color: "whitesmoke",
    gaji: "",
    hasSlider: false
  },
  {
    id: 1,
    name: "Account 1",
    color: "rgb(255, 0, 0)",
    gaji: 500012,
    hasSlider: true
  },
  {
    id: 2,
    name: "Account 2",
    color: "rgb(255, 128, 0)",
    gaji: 1500012,
    hasSlider: true
  },
  {
    id: 3,
    name: "Account 3",
    color: "rgb(255, 255, 0)",
    gaji: 800012,
    hasSlider: true
  },
  {
    id: 4,
    name: "Account 4",
    color: "rgb(128, 255, 0)",
    gaji: 200012,
    hasSlider: true
  },
  {
    id: 5,
    name: "Account 5",
    color: "rgb(0, 255, 0)",
    gaji: 1000012,
    hasSlider: true
  },
  {
    id: 6,
    name: "Account 6",
    color: "rgb(0, 255, 128)",
    gaji: 50012,
    hasSlider: true
  },
  {
    id: 7,
    name: "Account 7",
    color: "rgb(0, 255, 255)",
    gaji: 30012,
    hasSlider: true
  },
];

export const fetchAccounts = async () => {
  try {
    // Simulate an asynchronous operation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(accountsData);
      }, 200); // Delayed response for demonstration purposes
    });
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return [];
  }
};
