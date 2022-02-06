const BASE_IMAGE_URL = process.env.BASE_IMAGE_URL || 'http://localhost:7000/file/file/serve';

export const makeFileUrl = function(filename : String):String {
    if (filename) {
        return `${BASE_IMAGE_URL}/${filename}`;
    }
    return null;
}