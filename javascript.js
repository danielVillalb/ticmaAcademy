/*
import data from './jason.json';

console.log(data);*/
/*
document.getElementById("boton").onclick=function(){

    console.log("hiciste click en el boton")
    
    const persona='{"nombre":"Carlos Daniel","apellido":"Villalba","nacionalidad":"Argentino","edad":"25","celular":"1151387649","direccion":"Carlos Alberto Becu 3041","email":"villalbacarlosd97@gmail.com"}';
    const obj=JSON.parse(persona)
    console.log(persona)
    /*
    const x=document.getElementById("container");
    const y=document.getElementById("nombre");
    *//*
    document.getElementById("nombre").innerHTML="Nombre:" + obj.nombre  ;
    document.getElementById("apellido").innerHTML="Apellido:" + obj.apellido;
    document.getElementById("nacionalidad").innerHTML="Nacionalidad:" + obj.nacionalidad;
    document.getElementById("edad").innerHTML="Edad:" + obj.edad;
    document.getElementById("direccion").innerHTML="Direccion:" + obj.direccion;
    document.getElementById("celular").innerHTML="Celular:" + obj.celular;
    document.getElementById("email").innerHTML="Correo Electronico:" + obj.email;
}*/
document.getElementById("boton").onclick=function traerDatos(){
$.ajax({
    url: 'https://randomuser.me/api/?inc=gender,name,location,email,dob,phone,cell,picture',
    dataType: 'json',
    success:function(data) { 
      for (let item of data.results){
        document.getElementById("nombre").innerHTML="Nombre: "+item.name.first;
        document.getElementById("apellido").innerHTML="Apellido: " + item.name.last;
        document.getElementById("nacionalidad").innerHTML="Nacionalidad :" + item.location.country;
        document.getElementById("edad").innerHTML="Edad: " + item.dob.age;
        document.getElementById("direccion").innerHTML="Direccion: " + item.location.street.name +" "+ item.location.street.number;
        document.getElementById("celular").innerHTML="Celular: " + item.cell +" "+ "telefono: "+ item.phone;
        document.getElementById("email").innerHTML="Correo Electronico: " + item.email;
        document.getElementById("retrato").innerHTML="<img src='"+item.picture.large +"'>"

};
}
})
var i;
var trabajos2=[];
console.log(i);
/*
$.ajax({
    url: 'https://api.generadordni.es/v2/profiles/company?results=5&include_fields=nif,name,activity,email,phonenumber',
    dataType: 'json',
    success: function(data2) {
            for (let item of data2){
                var trabajo=trabajos2.push(item.activity)
                
            }
            for(i=0;i<=3;i++){
                console.log(trabajo);
                }
                document.getElementById("trabajo1").innerHTML="Primera experiencia: "+trabajo[0];
                document.getElementById("trabajo2").innerHTML="Segunda experiencia: "+trabajo[1];
                document.getElementById("trabajo3").innerHTML="Tercera experiencia: "+trabajo[2];
                document.getElementById("trabajo4").innerHTML="Cuarta experiencia: "+trabajo[3];}
           

        })
*/
$.ajax({
    url:'jason.json',
    dataType:'json',
    success:function(data3){
        for (let item of data3.resultados){
            document.getElementById("secundaria").innerHTML="secundaria:"+item.nombre
        }
    }
})
       



}

