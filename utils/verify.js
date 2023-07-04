const { run } = require("hardhat")

async function verify(contractAddress) {
	console.log("Verifying contract...")
	try {
		await run("verify:verify", {
			address: contractAddress,
		})
	} catch (e) {
		if (e.message.toLowerCase().includes("already verified")) {
			console.log("Already Verified!")
		} else {
			console.log(e)
		}
	}
}

module.exports = { verify }