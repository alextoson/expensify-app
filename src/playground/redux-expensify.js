import { createStore, combineReducers } from "redux";

const demoState = {
  expense: [
    {
      id: "kjsdvbkjsvbb",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "date", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};