class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      //to ensure that the vertex has not been added before
      // ..now we will initialzed vertex adjaceny list to empty list/arr
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    //this function will add edges b/w two vertices and if vertices don't exists we will first add them to graph
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2); // add method exists on Set ds of js and since ajacency list of each vertex is a new Set we can use Set built in methods
    this.adjacencyList[vertex2].add(vertex1); // athis is to ensure that vertex 2 and vertex 1 are both adjacent to each other since we are working with undirected graphs  //for example if we Have A --B so adjaceny list of A will have B and list of B wil have A
    // in general it mean that edges exists b/w A to B and B to A in undirected graphs
  }
  display() {
    //it will display all the vertices' adjaceny list
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->", [...this.adjacencyList[vertex]]); //we are using spread operator b/c the adjacency list of vertex is Set
    }
  }
  hasEdge(v1, v2) {
    // ..this will check if an edge exists b/w two vertices or not
    return this.adjacencyList[v1].has(v2); //has method is Set builtin method
    // we can also check for this.adjacencyList[v1].has(v2) but since our add edge works correctly there is no need
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("D", "E");
graph.display();
console.log(graph.hasEdge("A", "B"));
console.log(graph.hasEdge("C", "B"));
console.log(graph.hasEdge("C", "E"));
