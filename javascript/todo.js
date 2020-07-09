var todos = [];
var input = prompt("what you like to do?");
while (input !== "quit") {
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    var newtodo = prompt("enter a new todo");
    todos.push(newtodo);
  }

  input = prompt("what you like to do?");


}
console.log("ok quit");