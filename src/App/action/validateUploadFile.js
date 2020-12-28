export const validateUploadFile = function(file){
    console.log(file);
    const validTypes = 'application/json';
    return validTypes.indexOf(file.type) !== -1;
}
