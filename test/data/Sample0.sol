pragma solidity ^0.4.0;

contract Sample {
  constructor() public {
    int a = 10;
    int b = a * 10;
    if (a > 100) {
      b = 11;
    }
  }
}
