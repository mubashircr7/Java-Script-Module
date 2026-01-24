 
// ইনপুট দেওয়া আছে (এক লাইনে কমা সেপারেটেড)
let marks = "75.25, 65, 80, 35.45, 99.50";

// ১. স্ট্রিংকে অ্যারেতে কনভার্ট করো
let marksArray = marks.split(", ");

// ২. স্ট্রিংকে নাম্বারে কনভার্ট করো
let math = parseFloat(marksArray[0]);     // 75.25
let biology = parseFloat(marksArray[1]);  // 65
let chemistry = parseFloat(marksArray[2]); // 80
let physics = parseFloat(marksArray[3]);  // 35.45
let bangla = parseFloat(marksArray[4]);   // 99.50

// ৩. যোগ করো
let totalMarks = math + biology + chemistry + physics + bangla;

// ৪. গড় বের করো
let average = totalMarks / 5;

// ৫. ২ দশমিক স্থান পর্যন্ত প্রিন্ট করো
console.log(average.toFixed(2));  // 71.04