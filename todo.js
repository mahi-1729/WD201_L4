const listtdoo = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const mark = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");

  const due = () => {
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const due2day = () => {
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const duelaterr = () => {
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const show = (list) => {
    return list
      .map((todo) => {
        show_status = todo.completed ? "[x]" : "[ ]";
        show_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${show_status} ${todo.title} ${show_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    mark,
    due,
    due2day,
    duelaterr,
    show,
  };
};

module.exports = listtdoo;

