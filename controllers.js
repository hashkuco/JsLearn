const boom=require("boom");
//导入数据models
const Coffee=require("../models/Coffee");
//获取所有的coffees
export.getList=async(req,res)=>{
	try{
		const coffees=await Coffee.find();
		return coffees;
	}catch(err){
		throw boom.boomify(err);
	}
}

//通过id获取单个coffee信息
export.get=async(req,req)=>{
	try{
		const id=req.params.id;
		const coffee=await Coffee.findById(id);
		return coffee;
	}catch(err){
		throw boom.boomify(err);
	}
}

//新增
export.add=async(req,res)=>{
	try{
		const coffee=new Coffee(req.body);
		return coffee.save();
	}catch(err){
		throw boom.boomify(err);
}
}
//更新
exports.update=async(req,res)=>{
	try{
		const id=res.params.id;
		const coffee=req.body;
		const {...updateData}=coffee;
		const update=await Coffee.findByIdAndUpdate(id,updateData,{
			new:true;
		});
		return update;
	}catch(err){
		throw boom.boomify(err);
	}
}

//删除
exports.delete=async(req,res)=>{
	try{
		const id=req.params.id;
		const coffee=await Coffee.findByIdAndRemove(id);
		return coffee;
	}catch(err){
		throw boom.boomify(err);
	}
}

