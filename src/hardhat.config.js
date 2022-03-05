require('@nomiclabs/hardhat-waffle');

const fs = require('fs');
const privatekey = fs.readFileSync('.secret').toString();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	networks: {
		hardhat: {
			chainId: 1337,
		},
		mumbai: {
			url: `https://polygon-mumbai.infura.io/v3/f3ded5320995443b8fa3f4770956d`,
			// url: 'https://polygon-mainnet.g.alchemy.com/v2/-mKgiUM3STJKGpEg80rR3ztDR6tsNlAJ',
			accounts: [privatekey],
		},
	},
	solidity: '0.8.4',
};
