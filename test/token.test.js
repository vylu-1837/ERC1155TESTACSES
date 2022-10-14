const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC1155 TOKEN", function () {
    let Token;
    let hardhatToken;

    beforeEach(async () => {
        Token = await ethers.getContractFactory("Token");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        hardhatToken = await Token.deploy();
    });

    describe("Deployment", function () {

        it("Should check for the owner", async function () {

            expect(await hardhatToken.owner()).to.equal(owner.address);
        });


        it("Total Supply", async function () {
            expect(await hardhatToken.totalSupply()).to.equal(10000);

        });

        it("Checks the Name of NFT with the assigned ID", async function () {
            expect(await hardhatToken.NEZUKO()).to.equal(0);
            expect(await hardhatToken.TANJIRO()).to.equal(1);
            expect(await hardhatToken.NARUTO()).to.equal(2);
            expect(await hardhatToken.FRIENDS()).to.equal(3);
            expect(await hardhatToken.RACHEL()).to.equal(4);
            expect(await hardhatToken.ROSS()).to.equal(5);
            expect(await hardhatToken.MONIKA()).to.equal(6);
            expect(await hardhatToken.CHANDLER()).to.equal(7);
            expect(await hardhatToken.PHOEBE()).to.equal(8);
            expect(await hardhatToken.JOEY()).to.equal(9);

        });

        it("Should check if the nft is successfully minted between accounts", async function () {

            let tokenId = 4;
            let amount = 10;
            let addr1Balance = await hardhatToken._balanceOf(addr1.address, tokenId) + amount;
            await hardhatToken.mint(addr1.address, tokenId, amount);
            expect(await hardhatToken._balanceOf(addr1.address, tokenId)).to.equal(addr1Balance);
        });


    });

    describe("Mint", function () {
        it("Checks if the NFT are minted successfully", async function () {
            it("NFT is minted successfully", async function () {

                expect(await hardhatToken.balanceOf(owner.address, 0)).to.equal(10);
                expect(await hardhatToken.balanceOf(owner.address, 1)).to.equal(120);
                expect(await hardhatToken.balanceOf(owner.address, 2)).to.equal(160);
                expect(await hardhatToken.balanceOf(owner.address, 3)).to.equal(190);
                expect(await hardhatToken.balanceOf(owner.address, 4)).to.equal(310);
                expect(await hardhatToken.balanceOf(owner.address, 5)).to.equal(910);
                expect(await hardhatToken.balanceOf(owner.address, 6)).to.equal(170);
                expect(await hardhatToken.balanceOf(owner.address, 7)).to.equal(810);
                expect(await hardhatToken.balanceOf(owner.address, 8)).to.equal(170);
                expect(await hardhatToken.balanceOf(owner.address, 9)).to.equal(510);


            });



        });
        describe("Should verify if the address is valid", function () {

            it("Check Address", async function () {
                expect(await owner.address).to.be.a.properAddress;
            });
        });

        describe("Burn", function () {

            it("Should burn the specific amount of tokens", async function () {
                const tokenId = 5;
                const amount = 20;
                const burnTokens = await hardhatToken._balanceOf(owner.address, tokenId) - amount;
                await hardhatToken.burn(owner.address, tokenId, amount);
                expect(await hardhatToken._balanceOf(owner.address, tokenId)).to.equal(burnTokens);
            });




        });

        describe("URI Check", function () {
            it("Should check if the uri is set successfully", async function () {

                expect(await hardhatToken.uri(0)).to.equal("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/0.json");
                expect(await hardhatToken.uri(1)).to.equal("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/1.json");
                expect(await hardhatToken.uri(2)).to.equal("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/2.json");
                expect(await hardhatToken.uri(3)).to.equal("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/3.json");
                expect(await hardhatToken.uri(4)).to.equal("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/4.json");
                expect(await hardhatToken.uri(5)).to.equal("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/5.json");
                expect(await hardhatToken.uri(6)).to.equal("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/6.json");
                expect(await hardhatToken.uri(7)).to.equal("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/7.json");
                expect(await hardhatToken.uri(8)).to.equal("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/8.json");
                expect(await hardhatToken.uri(9)).to.equal("https://gateway.pinata.cloud/ipfs/Qmf94ie2nRkK9NynaKfzPz7LfBDqq8NXpfuaed54P9PJBw/9.json");
            });
        });

    });


});