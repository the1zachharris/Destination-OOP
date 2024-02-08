class Airport {
    #planes
    constructor(name,airportCode) {
        this.name = name
        this.#planes = []
        this.airportCode = airportCode
    }

    getPlanes() {
        return this.#planes
    }
    addPlane(plane) {
        this.#planes.push(plane)
    }
}


module.exports = Airport;