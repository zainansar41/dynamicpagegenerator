import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const navbarSchema = new Schema({
    logoClass: String,
    linkName: String,
    linkAddress: String,
    linkParentClass: String,
    linkCode:String,
    htmlCode:String,
    cssCode:String,
    image:String
})

export default mongoose.model('Navbar', navbarSchema);