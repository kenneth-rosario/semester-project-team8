
let env = "PROD"
export const HOST = env==="PROD"?'https://flovver-api.herokuapp.com/v1/':'http://10.0.2.2:9000/v1/'
