const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name

	await fs.writeFile(fileName, fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name

	await fs.readFile(fileName, { encoding: "utf-8" }).then((data) => {

		console.log(data)
	})
	console.log("reading");
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name

	await fs.appendFile(fileName, fileContent)

}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name

	await fs.unlink(fileName).then((er) => {
		if (er) {
			console.log(err);
		}
		else {
			console.log("Deleted...");
		}
	})

}


myFileWriter('File.txt', 'Hello')
myFileReader("File.txt", { encoding: "utf-8" })
myFileUpdater('File.txt', ' World')
myFileDeleter("File.txt")



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }