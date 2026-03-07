 /* JavaScript Scope হলো — কোন জায়গা থেকে একটি variable (চলক) access বা ব্যবহার করা যাবে তার সীমা।// 
 
JavaScript-এ Scope সাধারণত ৩ প্রকার।

1️⃣ Glo bal Scope
👉 যখন কোনো variable function বা block এর বাইরে declare করা হয়, তখন সেটা program-এর যেকোনো জায়গা থেকে access করা যায়।

2️⃣ Function Scope
👉 যখন কোনো variable function এর ভিতরে declare করা হয়, তখন সেটা শুধু ওই function এর ভিতরেই access করা যায়।

3️⃣ Block Scope
👉 যখন variable {} block এর ভিতরে let বা const দিয়ে declare করা হয়, তখন সেটা শুধু ওই block এর ভিতরেই কাজ করে।

  4.  Lexical Scope (বা Static Scope)

👉 Lexical Scope মানে হলো variable কোন জায়গা থেকে access হবে তা code কোথায় লেখা আছে (position) তার উপর নির্ভর করে।

সহজ করে:
Inner function outer function এর variable use করতে পারে।
  */
 

 let pi = 3.14;

 function add(a,b){
    const factor = 0.5;
    const result = a + b * factor;
    return result;
 }

 console.log(factor, pi);

 const multiply = (a,b) => {
   console.log(result) 
   // TDZ: Temporer DATE ZONE. // refferrence error // 
   const result = a*b;
   return result;
 }
   multiply(2,5);

// agula block scope toiri kore 
   if(true){

   }
   for(){

   }
   while(){

   }