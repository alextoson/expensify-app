import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expense", () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test("should return add up of a single expense", () => {
  const total = selectExpensesTotal([expenses[0]]);
  expect(total).toBe(195);
});

test("should return add up of multiple expenses", () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(114195);
});
