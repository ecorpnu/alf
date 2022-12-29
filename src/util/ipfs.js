//using the infura.io node, otherwise ipfs requires you to run a daemon on your own computer/server. See IPFS.io docs
const ipfsClient = require('ipfs-http-client');
//use version npm i ipfs-http-client@33.0.1
//need to open an IPFS project with infura.
const projectId ='some stuff';
const projectSecret='some stuff';
const auth = 'Basic ' + Buffer.from(projectId + ':' +projectSecret).toString('base64');

const ipfs = new ipfsClient({  
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0',
    headers: {
      authorization: auth
    }
  })

//run with local daemon
// const ipfsApi = require('ipfs-api');
// const ipfs = new ipfsApi('localhost', '5001', {protocol: 'http'});

export default ipfs; 
