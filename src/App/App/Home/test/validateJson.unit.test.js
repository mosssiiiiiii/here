const {validateJson} = require('../action/validateJson');

const data1 = [];
const data2 = JSON.stringify({name: 'test'})
const data3 = JSON.stringify([{Name: 'test', Longitude: 52.12}])
const data4 = JSON.stringify([{Name: 'test', Longitude: 52.12, Latitude: 13.25, Family: 'test'}]);

describe('validate json file', () => {
    test('is empty', () => {
        expect(validateJson(data1)).toBe(false);
    });

    test('is not array', () => {
        expect(validateJson(data2)).toBe(false);
    });

    test('data does not have latitude ', () => {
        expect(validateJson(data3)).toBe(false);
    })

    test('correct json file ', () => {
        expect(validateJson(data4)).toBe(true);
    })

});

