'use strict';

{
    const result=document.getElementById('result');
    const btn=document.getElementById('btn');

    const res=['先攻','後攻'];
    let state=false;
    let i;
    

    function show(){
        const n = Math.floor(Math.random() * 2);
        result.textContent=res[n];
        setTimeout(()=>{
            if(i===100){
                state=false;
                btn.classList.remove('disable');
                return;
            }
            show();
            i++;
        },10);
    }

    btn.addEventListener('click',()=>{
        if(!state){
            state=true;
            btn.classList.add('disable');
            i=0;
            show();
        }else{
            return;
        }
    });
}