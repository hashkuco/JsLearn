const fastify=require("fastify")({
	logger:true;
})
//定义路由
fastify.get("/",async(request,reply)=>{
	return {message:"hello restful api"}
})
//启动服务
const start= async()=>{
	try{
		await fastify.listen(8100);
		fastify.log.info('服务运行端口：${fastify.server.address().port}');
}catch(err){
	fastify.log.error(err);
	process.exit(1);
}
};
start();

const mongoose=require("mongoose")
mongoose.connect("mongoose://localhost/crayon-restful-service")
.then(()=>console.log("mongodb已连接"))
.catch((err)=>console.log(err));


