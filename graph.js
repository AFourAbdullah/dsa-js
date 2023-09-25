const adjacenyMatrix = [
  // adjacency matirx is 2d array of size VxV where V is number of vertices in graphs
  //A B  C
  [0, 1, 0], //A
  [1, 0, 1], //B
  [0, 1, 0], //C
];
console.log(adjacenyMatrix[0][1]);
console.log(adjacenyMatrix[1][2]);

const adjacenyList = {
  // adjacency matirx is 2d array of size VxV where V is number of vertices in graphs
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};
console.log(adjacenyList["A"]); //to get adjacency list of A
console.log(adjacenyList["B"]); //to get adjacency list of B
console.log(adjacenyList["C"]); //to get adjacency list of C

//in list we only have to store the values of edges that exist whereas in matrix we have to store the values of edges wether they exists or not so list is more efficient storage wise
//in list inserting and finding adjacent nodes is constant time complexity whereas in matrix it is linear time complexity
// list allows you to store values of additional values with edge such as weight of edge but in matrix such info is stored externally
