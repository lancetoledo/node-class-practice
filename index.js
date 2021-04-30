// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class Node {
  constructor(element, next) {
    this.element = element;
    this.next = null || null;
  }
}

let node1 = new Node(2);
let node2 = new Node(5);

node1.next = node2;

let node3 = new Node(9);

node2.next = node3;

console.log(node1.next.next);
