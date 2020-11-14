// module.exports = function(_deployer) {
//   // Use deployer to state migration tasks.
// };

const HelloWorld = artifacts.require("./HelloWorld.sol");

// this is instantiating my smart contract to blockchain
// im not taking any parameters in deploy function, that why is not like this..
// module.exports = function (deployer, PARAM HERE) {}....
module.exports = function (deployer) {
  deployer.deploy(HelloWorld);
};


