// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Token is ERC1155{
    
    address public owner;
    uint256 public constant totalSupply=10000;
    uint256 public constant NEZUKO=0;
    uint256 public constant TANJIRO=1;
    uint256 public constant NARUTO=2;
    uint256 public constant FRIENDS=3;
    uint256 public constant RACHEL=4;
    uint256 public constant ROSS=5;
    uint256 public constant MONIKA=6;
    uint256 public constant CHANDLER=7;
    uint256 public constant PHOEBE=8;
    uint256 public constant JOEY=9;

    mapping(address=>uint) balances;

    constructor() public ERC1155("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw"){


        balances[msg.sender]=totalSupply;
        owner = msg.sender;
        _mint(msg.sender, NEZUKO, 10, "" );
        _mint(msg.sender, TANJIRO, 120, "" );
        _mint(msg.sender, NARUTO, 160, "" );
        _mint(msg.sender, FRIENDS, 190, "" );
        _mint(msg.sender, RACHEL, 310, "" );
        _mint(msg.sender, ROSS, 910, "" );
        _mint(msg.sender, MONIKA, 170, "" );
        _mint(msg.sender, CHANDLER, 810, "" );
        _mint(msg.sender, PHOEBE, 170, "" );
        _mint(msg.sender, JOEY, 510, "" );
    }

    function uri(uint _tokenId) override public view returns (string memory)
    {
        return string(
            abi.encodePacked("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/",
            Strings.toString(_tokenId),".json")
        );

    }

    function mint(address account, uint id, uint amount) public 
    {
        _mint(account, id, amount, "");
    }

    function burn(address account, uint id, uint amount) public returns(uint)
    {
        require(msg.sender == account);
        _burn(account, id, amount);
        return balanceOf(account, id);

    }

    function burnBatch(uint[] memory _ids, uint[] memory _amounts)  external {
    _burnBatch(msg.sender, _ids, _amounts);
  }

    function _balanceOf(address _account, uint _id) public view returns(uint)
    {
        return balanceOf(_account, _id);
    }

     function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        
    {
        _mintBatch(to, ids, amounts, data);
    }
    





}