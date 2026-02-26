
// const sections = document.getElementsByTagName("section");
const sections = document.querySelectorAll('section')
console.log(sections);
for (const section of sections){
    console.log(section);
    section.style.backgroundColor = 'lightblue';
    section.style.border = '2px solid green';
    section.style.padding = '20px';
    section.style.borderRadius = '15px';
}

