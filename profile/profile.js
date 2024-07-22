// var typingeffect =new Typed(".multiText",{
//     strings :["Java Full Stack Developer"],
//     loop : true,
//     typeSpeed : 200,
//     backSpeed : 80,
//     backDelay : 1500
// })

const toTop=document.querySelector(".to-top")

window.addEventListener("scroll",()=>{
  if(window.pageYOffset>100){
    toTop.classList.add("active")
  }else{
    toTop.classList.remove("active")
  }
})


let sections=document.querySelectorAll('section')
let navLinks =document.querySelectorAll(".navbar-a a")


window.onscroll =()=>{
    sections.forEach(sec =>{
        let top=window.scrollY
        let offset=sec.offsetTop - 150
        let height=sec.offsetHeight
        let id= sec.getAttribute('id')

        if(top >=offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('.navbar-a a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}


// const TypeWriter = function(txtElement, words, wait = 3000) {
//       this.txtElement = txtElement;
//       this.words = words;
//       this.txt = '';
//       this.wordIndex = 0;
//       this.wait = parseInt(wait, 10);
//       this.type();
//       this.isDeleting = false;
//     }


// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 200;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 200;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }