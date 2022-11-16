const btn_letras = document.querySelectorAll( ".btn button" );
let tiempoInicio=Date.now(),par=0;


const play=document.getElementById('Play');
play.addEventListener('click',()=>{
let pares=[1,2,3,4,5,6,1,2,3,4,5,6];
let a=0;
for (let index = 1; index < 13; index++) {
    document.getElementById("c"+index).style.display='block';
    document.getElementById("c"+index).style.background='#247fbb';
    document.getElementById("c"+index).disabled=false;
}
pares.sort(()=>Math.random()-0.5);
while (a<12) {
    document.getElementById('c'+(a+1)).innerHTML=pares[a];
    a++;
}
play.style.display='none';
});


for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}


let aux=0;let a1,b1;
function click_letras(event){
    
    const button = event.target; 
    button.style.background ='#fff';
   if (aux==0) {
    a1=button;a1.disabled=true;aux=1;
   } else {if (aux==1) {
    b1=button;b1.disabled=true;
    if(a1.innerHTML===b1.innerHTML){par++;aux=0;
    }else{
        b1.style.background='#247fbb';b1.disabled=false;
        a1.style.background='#247fbb';a1.disabled=false;
        aux=0;
    };
   }
   }
   if(par==6){par=0,aux=0;
    for (let index = 1; index < 13; index++) {
        document.getElementById("c"+index).style.display='none';
    }
    play.style.display='block'
   }
};
