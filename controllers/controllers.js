//TABLAS
const productos = require('../models/productos.js');
const categorias = require('../models/categorias.js');

categorias.hasMany(productos,{
  foreignKey:'categoriaId',
  as:'productos'
});

productos.belongsTo(categorias,{
  foreignKey:'categoriaId',
  as:'categorias'
});

/////////////////////////////////////////////////
const index = (req,res)=>{
try{
res.render('index');
}catch(error){
console.error(error.message);
res.status(500).send('Error en el servidor');
}
}
//////////////////////////////////////////////////
/////////////////////////////////////////////
const Productos = async(req,res)=>{
try{
const p = await productos.findAll();
res.render("productos",{p});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}

//////////////////////////////////////////////
const agregarProducto = async(req,res)=>{
try{
const p = await categorias.findAll();
res.render("agregarProducto",{p});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const agregarProductoPost = async(req,res)=>{
try{
const {codigo,producto,categoria_id,existencia_actual,precio} = req.body;

await productos.create({codigo,producto,categoriaId:categoria_id,existenciaActual:existencia_actual,precio});

res.redirect("/productos");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const updateProducto = async(req,res)=>{
try{
const id = req.params.id;
const p = await productos.findOne({where:{id}});
res.render("updateProducto",{p});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const updateProductoPost = async(req,res)=>{
try{
const id = req.params.id;
const {codigo,producto,categoria_id,existencia_actual,precio} = req.body;
const p = await productos.update({codigo,producto,categoriaId:categoria_id,existenciaActual:existencia_actual,precio},{where:{id}});
res.redirect("/productos");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const deleteProducto = async(req,res)=>{
try{
const id = req.params.id; 
await productos.destroy({where:{id}});
res.redirect('/productos');
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const Categorias = async(req,res)=>{
try{ 
const c = await categorias.findAll();
res.render("categorias",{c});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const agregarCategoria = async(req,res)=>{
try{
res.render("agregarCategoria");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const agregarCategoriaPost = async(req,res)=>{
try{
const {categoria} = req.body;
await categorias.create({categoria});
res.redirect("/categorias");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const updateCategoria = async(req,res)=>{
try{
const id = req.params.id;
const c = await categorias.findOne({where:{id}});
res.render("updateCategoria",{c});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const updateCategoriaPost = async(req,res)=>{
try{
const id = req.params.id;
const {categoria} = req.body;
const p = await categorias.update({categoria},{where:{id}});
res.redirect("/categorias");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const deleteCategoria = async(req,res)=>{
try{
const id = req.params.id; 
await categorias.destroy({where:{id}});
res.redirect('/categorias');
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
module.exports={
  index,
  Productos,
  agregarProducto,
  updateProducto,
  agregarProductoPost,
  updateProductoPost,
  deleteProducto,
  Categorias,
  agregarCategoria,
  agregarCategoriaPost,
  updateCategoria,
  updateCategoriaPost,
  deleteCategoria
}





