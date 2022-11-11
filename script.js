class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        // initialize the adjacent list with a
        // null array
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        // get the list for vertex v and put the
        // vertex w denoting edge between v and w
        this.AdjList.get(v).push(w);
    
        // Since graph is undirected,
        // add an edge from w to v also
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        // get all the vertices
        var get_keys = this.AdjList.keys();
    
        for(let i of get_keys) {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";
    
            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";
    
            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }
}

let chessboard = [];
function squares(size = 8) {
    for(let i = 1; i <= size; i++) {
        for(let j = 1; j <= size; j++) {
            chessboard.push([i, j]);
        } 
    }
}

squares(8);

var g = new Graph(chessboard.length);

for (let i = 1; i < chessboard.length; i++) {
    g.addVertex(chessboard[i]);
}

for(i = 0; i < chessboard.length; i++) {
    const arr = chessboard[i].split(",");
    const x = parseInt(arr[0]);
    const y = parseInt(arr[1]);

    g.addEdge(board[i],[x + 1, y + 2]) 
    g.addEdge(board[i],[x + 2, y + 1]) 
    g.addEdge(board[i],[x + 2, y - 1]) 
    g.addEdge(board[i],[x + 1, y - 2]) 
    g.addEdge(board[i],[x - 1, y - 2]) 
    g.addEdge(board[i],[x - 2, y - 1]) 
    g.addEdge(board[i],[x - 2, y + 1]) 
    g.addEdge(board[i],[x - 1, y + 2]) 
    
} 
console.log(chessboard);
g.printGraph();