class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        // initialize the adjacent list with a
        // null array
        let key = v;
        this.AdjList.set(key, []);
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

for (let i = 0; i < chessboard.length; i++) {
    g.addVertex(chessboard[i]);
}

for(i = 0; i < chessboard.length; i++) {
    const arr = chessboard[i].toString().split(",");
    const x = parseInt(arr[0]);
    const y = parseInt(arr[1]);

    const array = g.AdjList.get(chessboard[i]);
    //console.log(Array.isArray(array));
    array.push([x + 1, y + 2]);
    array.push([x + 2, y + 1]);
    array.push([x + 2, y - 1]);
    array.push([x + 1, y - 2]);
    array.push([x - 1, y - 2]);
    array.push([x - 2, y - 1]);
    array.push([x - 2, y + 1]);
    array.push([x - 1, y + 2]);
    
    for(let j = array.length-1; j >= 0; j--) { //must interate backwards or splice will skip indexes
        if(array[j].includes(-2) || array[j].includes(-1) || array[j].includes(0)
        || array[j].includes(9) || array[j].includes(10)) {
        array.splice(j, 1);
        }  
    }
} 

function bfs(root, goal) {
    let adj = g.AdjList;
    console.log(adj);
    const queue = [];
    queue.push(root);

    const discovered = [];
    discovered[root] = true;

    const edges = [];
    edges[root] = 0;

    while(queue.length) {
        let v = queue.shift();
        console.log(v);

        if (v === goal) {
            return edges;
        }

        for (let i = 0; i < adj[v].length; i++) {
            if (!discovered[adj[v][i]]) {
                discovered[adj[v][i]] = true;
                queue.push(adj[v][i]);
            }
        }
    }

    return false;
}

//console.log(g.AdjList.get([1,2]));
bfs(chessboard[1], chessboard[3]);

//g.printGraph();