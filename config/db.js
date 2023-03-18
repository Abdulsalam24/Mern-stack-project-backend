const { mongoose } = require("mongoose");
require('dotenv').config()


const connectDb = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGOURL}`)
        console.log(process.env.MONGOURL , 'process.env.MONGOURLprocess.env.MONGOURL')
        console.log(`Conn  :${conn}`.green.underline.bold )
    } catch (error) {
        console.log(`Error  :${error.message}`.yellow.underline.bold)
    }
}


module.exports = connectDb
