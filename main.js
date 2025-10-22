














// let numberOne = Number(prompt("Enter first number"));
// let numbertwo = Number(prompt("Enter first number"));



// let total1 = numberOne + numbertwo ;

// let total2 = numberOne - numbertwo ;

// let total3 = numbertwo * numberOne ;

// let total4 = numbertwo / numberOne ;




// _______

// document.write(`
//     <div class="box">

//     <h1>
//     the total is : ${total1}
//     </h1>
//     <h1>
//     the total is : ${total2}
//     </h1>
//     <h1>
//     the total is : ${total3}
//     </h1>
//     <h1>
//     the total is : ${total4}
//     </h1>
//     </div>
// `)







// اطلب من المستخدم إدخال القيم الثلاث باستخدام prompt()، على أن تكون كل قيمة من 0 إلى 100.


let commit1 = Number(prompt('من فضلك أدخل قيمة الانتاجيه من 0 إلى 100'));
if (commit1 > 100) {
    let commit1 = 100
    console.log(commit1)
}else {
  
  console.log(commit1)
}

let commit2 = Number(prompt('من فضلك أدخل قيمة الالتزام من 0 إلى 100'));
if (commit2 > 100) {
    let commit2 = 100
    console.log(commit2)
}else {
  
  console.log(commit2)
}
let commit3 = Number(prompt('من فضلك أدخل قيمة روح التعاون مع الفريق من 0 إلى 100'));
if (commit3 > 100) {
    let commit3 = 100
    console.log(commit3)
}else {
  
  console.log(commit3)
}



// احسب متوسط الأداء من خلال جمع القيم الثلاث وقسمتها على 3.

let total = commit1 + commit2 + commit3 ;

let averagePerformance = total / 3 ;
console.log(averagePerformance);


// ------------------------------------------------




 if ( commit1 < 50 ){
    console.log("راسب")
}

 if ( commit2 < 50 ){
    console.log("راسب")
}

 if ( commit3 < 50 ){
    console.log("راسب")
}








// ------------------------------------------------







// إذا كان المتوسط 90 فأكثر → "ممتاز جدًا 💎"

if ( averagePerformance === 90 ){
    
    console.log("ممتاز جدًا 💎")
}
else if ( averagePerformance > 90 ){
    
    console.log("ممتاز جدًا 💎")
}





// إذا كان المتوسط 75 فأكثر → "جيد جدًا 👍"
else if ( averagePerformance === 75 ){
console.log("جيد جدًا 👍")
}
else if ( averagePerformance > 75 ){
console.log("جيد جدًا 👍")
}






// إذا كان المتوسط 60 فأكثر → "مقبول 🙂"
else if ( averagePerformance === 60 ){
console.log("مقبول 🙂")
}
else if ( averagePerformance > 60 ){
console.log("مقبول 🙂")
}



// إذا كان المتوسط 50 فأكثر → "ضعيف ⚠️
else if ( averagePerformance === 50 ){
console.log("ضعيف ⚠️")
}
else if ( averagePerformance > 50 ){
console.log("ضعيف ⚠️")
}




// أقل من 50 → "راسب ❌"
else if ( averagePerformance < 50 ){
console.log("راسب ❌")
}








document.write(`
    <div class="boxes">
    <h3>نظام تقييم اداء الموظفين</h3>
<p>ادخل درجات الموظف للحصول علي تقييم</p>
<div class="box"> 
  <div class="f1">
  <div><p>الانتاجيه</p> ${commit1} </div>
  <div> <p>الالتزام</p> ${commit2}</div>
  <div><p>روح التعاون مع الفريق</p> ${commit3} </div>
  <div> <p>المتوسط</p> ${averagePerformance}</div>
</div>
</div>
 <hr>
<div class="f2">
<div><p>المتوسط العام</p> ${averagePerformance}</</div>
<div><p>نتيجه التقييم</p> </div>
</div>
     </div>
    `)











               


































    
// إذا كان المتوسط 90 فأكثر → "ممتاز جدًا 💎"

 if ( averagePerformance === 90 ){
    
    document.write(`<p class="green">ممتاز جدًا 💎</p>`)
}
else if ( averagePerformance > 90 ){
    
    document.write(`<p class="green">ممتاز جدًا 💎</p>`)
}
// لو قدرت تضيف شرط إن أي درجة أقل من 50 تجعل النتيجة "راسب 

else if( commit1 < 50 ){
    document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب">راسب ❌</p>`)
}
else if( commit1 === 50 ){
    document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب">راسب ❌</p>`)
}




else if( commit2 < 50 ){
    document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب" >راسب ❌</p>`)
}
else if( commit2 === 50 ){
    document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب" >راسب ❌</p>`)
}




else if( commit3 < 50 ){
    document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب">راسب ❌</p>`)
}
else if( commit3 === 50 ){
    document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب">راسب ❌</p>`)
}






















// إذا كان المتوسط 75 فأكثر → "جيد جدًا 👍"
else if ( averagePerformance === 75 ){
document.write(`<p class="blue">جيد جدًا 👍</p>`)
}
else if ( averagePerformance > 75 ){
document.write(`<p class="blue">جيد جدًا 👍</p>`)
}
// لو قدرت تضيف شرط إن أي درجة أقل من 50 تجعل النتيجة "راسب 







// إذا كان المتوسط 60 فأكثر → "مقبول 🙂"
else if ( averagePerformance === 60 ){
document.write(`<p class="orange">مقبول 🙂</p>`)
}
else if ( averagePerformance > 60 ){
document.write(`<p class="orange">مقبول 🙂</p>`)
}



// إذا كان المتوسط 50 فأكثر → "ضعيف ⚠️
else if ( averagePerformance === 50 ){
document.write(`<p class="brown">ضعيف ⚠️</p>`)
}
else if ( averagePerformance > 50 ){
document.write(`<p class="brown">ضعيف ⚠️</p>`)
}
// لو قدرت تضيف شرط إن أي درجة أقل من 50 تجعل النتيجة "راسب 



// أقل من 50 → "راسب ❌"
else if ( averagePerformance < 50 ){
document.write(`<p class="red">راسب ❌</p>`)

}

















// else if( commit1 < 50 ){
//     document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب">راسب ❌</p>`)
// }
// else if( commit1 === 50 ){
//     document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب">راسب ❌</p>`)
// }




// else if( commit2 < 50 ){
//     document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب" >راسب ❌</p>`)
// }
// else if( commit2 === 50 ){
//     document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب" >راسب ❌</p>`)
// }




// else if( commit3 < 50 ){
//     document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب">راسب ❌</p>`)
// }
// else if( commit3 === 50 ){
//     document.write(`<p class="redd" title="بسبب ضعف في أحد الجوانب">راسب ❌</p>`)
// }






