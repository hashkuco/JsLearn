const {Schema,model}=require("mongoose");
const coffeeSchema=new Schema({
	title:String,
	radio:String,
	cup:String,
	description:String
})
module.export=model("coffee",coffeeSchema);