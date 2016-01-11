var fake=require('faker');
var data=function retornarData(){
var fid=fake.random.uuid();
var fnombre=fake.name.findName();
var fcontenido=fake.lorem.sentence();
var ffecha=fake.date.weekday();
var fimagen=fake.image.avatar();

return {id:fid,nombre:fnombre,contenido:fcontenido,fecha:ffecha,imagen:fimagen};
}

module.exports={
data:data
};
