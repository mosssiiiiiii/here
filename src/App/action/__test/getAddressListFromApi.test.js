const axios = require('axios');
const MockAdapter = require('axios-mock-adapter')
const {getAddressListFromApi} = require('./../getAddressListFromApi')
const {api} = require('./../../../setup/api');

const lat = 52.56222;
const long = 13.35125;

const response = {
    status: 200,
    data: {
        items: [
            {
                title: 'Landsberger Allee 8, 10249 Berlin, Germany',
            }
        ]
    }
}

describe('getAddressList', () => {
    test('object', () => {
        let mock = new MockAdapter(axios);

        mock.onGet(api.address(lat, long, process.env.TOKEN)).reply(200, response);

        getAddressListFromApi(lat, long,)
            .then(response => {
                expect(response).toEqual(response);
            })
            .catch(err => console.log(err));
    });
});

