"use strict";
const edgesOfEvery = require("./edgesOfEvery");
const isEqual = require("lodash.is-equal");

module.exports = (centers) => (options) => {
    const edges = edgesOfEvery(centers)(options)
    
    const boundaryEdges = []
    edges.forEach(edge => {
        const count = 0
        
        for(let edge of edges) {
            if(isEqual(edge,_edge)) {
                count++
                if(count > 1) {
                    return // not a boundary
                }
            }
        }
        boundaryEdges.push(edge)
    })

    return boundaryEdges

}