$(()=>{ 
const URL = "js/persona.json"


$("#metodoGet").on("click",function(){
    $.get(URL,function(data,status){
        console.log(`Estado: ${status}`);
        console.log (data[1].name);
 
         if(status === "success"){  
            $("#seAgrega").html(`<p>Formulario enviado con éxito! ${data[2].name} En breve nos contactaremos contigo!</p>`);
        }else{
            $("#seAgrega").html(`Tuvimos un inconveniente!`);
        }

    })
})

})

document.getElementById("Carrito").style.color="black";