$(()=>{ 
const URL = "js/persona.json"
/* 
let datosEnvio = {
    nombre : data[1].name},
    celular :$(".celular").val(),
    mail: $(".mail").val(),
    comentario:$(".coment").val(),
 
} */

$("#metodoPost").on("click",function(){
    $.get(URL,function(data,status){
        console.log(`Estado: ${status}`);
        console.log (data[1].name);
/*         $("#seAgrega").html(`<p>Formulario enviado con éxito!Gracias ${data.nombre}! En breve nos contactaremos contigo!</p>`);
 */     
         if(status === "success"){  
            $("#seAgrega").html(`<p>Formulario enviado con éxito! ${data[2].name} En breve nos contactaremos contigo!</p>`);
        }else{
            $("#seAgrega").html(`Tuvimos un inconveniente!`);
        }

    })
})

})