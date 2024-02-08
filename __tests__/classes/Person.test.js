const Person = require('../../classes/Person')

describe('Person', () => {
    let person

    beforeEach(() => {
        person = new Person('John Doe', 'New York')
    })

    it('should initialize with an empty array of bags', () => {
        expect(person.getBags()).toEqual([])
    })

    it('should add a bag to the person', () => {
        const bag = { id: 1, color: 'black' }
        person.addBag(bag)
        expect(person.getBags()).toContain(bag)
    })
})
