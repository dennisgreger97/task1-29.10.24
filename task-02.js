const tasks = [
  {
    task: "clean apartment",
    priority: 5,
  },
  {
    task: "learn objects",
    priority: 2,
  },
  {
    task: "practice JavaScript",
    priority: 1,
  },
];

const finishTask = (tasks) => {
  return tasks.slice(0, -1);
};

console.log(finishTask(tasks));
console.log(tasks);
