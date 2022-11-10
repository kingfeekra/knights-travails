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
    
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            chessboard.push([i, j]);
        } 
    }
}

var g = new Graph(chessboard.length);

for (let i = 0; i < chessboard.length; i++) {
    g.addVertex(chessboard[i]);
}
/*
function possibleMoves(board = squares(8)) {
    for(i = 0; i < board.length; i++) {
        const arr = board[i].split(",");
        const x = parseInt(arr[0]);
        const y = parseInt(arr[1]);

        const moves = {
            1: [x + 1, y + 2],
            2: [x + 2, y + 1],
            3: [x + 2, y - 1],
            4: [x + 1, y - 2],
            5: [x - 1, y - 2],
            6: [x - 2, y - 1],
            7: [x - 2, y + 1],
            8: [x - 1, y + 2]
        }
    }
    
}

document.write(squares(8));*/