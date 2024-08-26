
//مسك العناصر اللي هتعامل معاها
const inputelements=document.querySelectorAll(".card__input")
const btnsubmit=document.querySelector(".card__button")

//للتحقق من اليوم الذي يتم ادخاله
const validateday=(day) =>{
if(day && day>0 && day <=31){
    return true
}
};


//للتحقق من الشهر الذي يتم ادخاله
const validatemonth=(month) =>{

    if(month && month>0 && month <=12 ){
        return true
    }
    };


//للتحقق من السنة الذي يتم ادخالها
    const validateyear=(year) =>{
        const currentyear= new Date().getFullYear();
        if(year && year>0 && year <= currentyear ){
            return true
        }
        };


        //عرض رسائل لو تم ادخال بيانات خطأ
const isdatevalid=(dayelement , monthelement,yearelement)=>{
 let isvalid=[false,false,false];

if(!validateday(dayelement.value)){
      dayelement.classList.add("card__input--error");
}else{
    isvalid[0]=true;
    dayelement.classList.remove("card__input--error");
}

if(!validatemonth(monthelement.value)){
    monthelement.classList.add("card__input--error");
}else{
  isvalid[1]=true;
  monthelement.classList.remove("card__input--error");
}


if(!validateyear(yearelement.value)){
    yearelement.classList.add("card__input--error");
}else{
  isvalid[2]=true;
  yearelement.classList.remove("card__input--error");
}

return isvalid.every((item)=> item === true);
};






// الدالة اللي هتحسب العمر
const calculateage =(year,month,day)=>{
const today = new Date(); //ده التاريخ الحالي
const userbirthday=new Date(year,month-1,day) ; // ده تاريخ ميلاد المستخدم اللي هيدخله
let age=today.getFullYear() - userbirthday.getFullYear();  //حساب العمر وتخزينه في متغير
const months=today.getMonth()-userbirthday.getMonth();  
if(months<0  || (months === 0 && today.getDate() <  userbirthday.getDate())){
    age--; 
}
return age;
};



// الدالة اللي هتتنفذ عند الضغط علي الزر
const onclickcalculate=()=>{     
    const dayelement=document.getElementById("day");
    //const dayelement=document.querySelector('.card__input[name="day"]');
    const monthelement=document.getElementById("month");
    //const dayelement=document.querySelector('.card__input[name="month"]');
    const yearelement=document.getElementById("year");
    //const dayelement=document.querySelector('.card__input[name="year"]');
    const result=document.querySelector(".card__resultValue")
    
if(!isdatevalid(dayelement,monthelement,yearelement)){
    result.textContent="--";
return;
}

result.textContent=calculateage(yearelement.value,monthelement.value,dayelement.value); //استدعء دالة حساب العمر وتمرير السنة والشهر واليوم لحساب العمر
    }
btnsubmit.addEventListener("click", onclickcalculate);




// استخدام زر ال(الانتر) للادخال
inputelements.forEach(item =>{
    item.addEventListener("keydown",event =>{
event.key ==="Enter" && onclickcalculate();
    })
})
