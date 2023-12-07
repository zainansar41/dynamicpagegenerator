import mongoose from "mongoose";
const URI = "mongodb+srv://zainansari:zain123@cluster1.mlcu8.mongodb.net/"

mongoose.set('strictQuery', true);
async function connect(){

    const db = await mongoose.connect(URI)
    console.log("database Connected ")
    return db
}

export default connect