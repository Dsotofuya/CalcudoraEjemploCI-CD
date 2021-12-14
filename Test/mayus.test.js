const mayus = require('../Funtions/Pruebas Unitarias')
const resolver = require('../Funtions/funcionalidad')


describe('Paso a mayusculas', () => {
    test('prueba debería ser PRUEBA', () => {
        const result = mayus('prueba')
        expect(result).toBe('PRUEBA')
    })
})


describe('Suma numeros', () => {
    test('prueba debería ser 2 + 2 = 4', () => {
        const result = resolver("+", '2','2')
        expect(result).toBe(4)
    })
})

describe('resta numeros', () => {
        test('prueba debería ser 6 - 3 = 3', () => {
            const result = resolver("-", '6','3')
            expect(result).toBe(3)
    })
})

describe('resta numeros erronea ', () => {
    test('prueba debería ser 6 - 3 = 3', () => {
        const result = resolver("-", '6','3')
        expect(result).toBe(88)
})
})