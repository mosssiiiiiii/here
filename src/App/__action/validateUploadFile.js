export const validateUploadFile = function(file){
    const validTypes = 'application/json';
    return validTypes.indexOf(file.type) !== -1;
}
