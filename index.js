function depthFirstSearch(rootNode, vertices, edges) {
    let stack = []
    stack.push(rootNode)
    let visited = [rootNode]

    while (stack.length !== 0) {
        let vertice = stack.pop()
        if (!vertice.discovered) {
            vertice.discovered = true

            let adjacent = findAdjacent(vertice.name, vertices, edges)
            adjacent.forEach((node) => {
                visited.push(node)
                stack.push(node)
            })
        }
    }
    return visited;
}

function findAdjacent(nodeName, vertices, edges) {
    let adjacentEdges = []
    adjacentEdges = edges.filter((edge) => {
        return edge.includes(nodeName)
    })
    adjacentEdges = adjacentEdges.map((edge) => {
        return edge.find((node) => {
            return (node !== nodeName)
        })
    })
    adjacentEdges = adjacentEdges.map((name) => {
        return vertices.find((vertex) => {
            return vertex.name == name
        })
    })
    adjacentEdges = adjacentEdges.filter((node) => {
        return !node.discovered
    })
    return adjacentEdges
}