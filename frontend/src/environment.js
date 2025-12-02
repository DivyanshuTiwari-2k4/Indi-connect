let IS_PROD = true;
const server = IS_PROD ?
    "https://indi-connect-1.onrender.com" :

    "http://localhost:8000"


export default server;