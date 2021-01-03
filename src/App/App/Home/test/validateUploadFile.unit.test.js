const {validateUploadFile} = require('../action/validateUploadFile');

//file upload mocks
const json = {
    lastModified: 1608656985362,
    lastModifiedDate: 'Tue Dec 22 2020 20:39:45 GMT+0330 (Iran Standard Time)',
    name: "data.json",
    size: 976,
    type: "application/json",
    webkitRelativePath: "",
}
const image = {
    lastModified: 1608615771220,
    lastModifiedDate: 'Tue Dec 22 2020 20:39:45 GMT+0330 (Iran Standard Time)',
    name: "photo_2020-05-03_07-58-43.jpg",
    size: 39470,
    type: "image/jpeg",
    webkitRelativePath: "",
}


describe('validate files', () => {
    test('is json', () => {
        expect(validateUploadFile(json)).toBe(true);
    });

    test('is not json', () => {
        expect(validateUploadFile(image)).toBe(false);
    });
});



