let ball = +prompt("Nechi bal topladingiz ?" );
let tittle = document.querySelector('.tittle');

if(ball<80){
    tittle.textContent = "Siz oqishga kira olmadingiz"
}else if(ball>=80&&ball<100){
    let confirmStudent = confirm(' Siz super kontrakt asosida o\'qishga tavsiya qilindingiz kontrakt miqdori 3000$ \n Rozimisiz ?')
    if(confirm){
         let supercontract = +prompt ("Qancha pulingiz bor ?");
    if(supercontract>=3000){
        tittle.textContent = "O'qishga qabul qilindingiz"
    }else{
        tittle.textContent = "Pulingiz yetmas ekan"
    }
    }
   
}else if(ball>=100&&ball<150){
    let confirmStudent = confirm('Siz kontrakt asosida o\'qishga tavsiya qilindingiz kontrakt miqdori 2000$ \n Rozimisiz ?')
    if(confirm){
        let kontrakt =  +prompt ("Qancha pulingiz bor ?");
    if(kontrakt>=2000){
        tittle.textContent = "O'qishga qabul qilindingiz"
    }else{
        tittle.textContent = "Pulingiz yetmas ekan"
    } 
    }
   
}else if(ball>=150&&ball<=200){
    tittle.textContent = "Siz grant asosida o'qishga qabul qilindingiz"
}else{
    tittle.textContent = "Xatolik yuz berdi";
}
