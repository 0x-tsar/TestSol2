// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract HelloWorld {
  string olamundo = 'Olá mundo!!';

  constructor() public {
  }

  function get_msg()public view returns(string){
    return olamundo;
  }
}
