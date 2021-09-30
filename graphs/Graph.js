class Graph {
    constructor() {
        // Create a property called `nodes` and set it equal to an empty object.
        // This will be our adjacency list.
        this.nodes = {};
    }
  
    addNode(node) {
        // If the node value passed in does not already exist in our adjacency
        // list, then add it as a key and set it equal to an empty array.
        if (!this.nodes[node]) return this.nodes[node] = [];
        // if it's already there, return it to make this method a little bit more handy
        return this.nodes[node];
    }
  
    addEdge(node, edge) {
        // If the node exists in our adjacency list, then push the edge into the
        // array of edges for that node.
        // this.addNode will return an array to push to (thanks to our tinkering)
        // so just push the edge to that node
        return this.addNode(node).push(edge);
    }
}
  
  module.exports = { Graph };