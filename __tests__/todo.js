const listtdoo = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, mark, add, due, due2day, duelaterr } = listtdoo();

describe("Testing doto list", () => {
  beforeAll(() => {
    add({
      title: "Dancing",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add Your new todolist ", () => {
    let length = all.length;

    add({
      title: "Complete the works",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Mark todo as done", () => {
    expect(all[0].completed).toBe(false);
    mark(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieve all todos which are not yet completed", () => {
    let todolist = due();

    expect(
      todolist.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrieve all todos which are not yet completed for today", () => {
    let todolist = due2day();

    expect(
      todolist.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrieve all todos which are due for later", () => {
    let todolist = duelaterr();

    expect(
      todolist.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
