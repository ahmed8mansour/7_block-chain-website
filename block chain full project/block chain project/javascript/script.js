// search start 

const searchInput1 = document.getElementsByClassName('nav-search')[0];
const titles = document.getElementsByClassName('section-title');
const subtitles = document.getElementsByClassName('section-subtitle');
const contents = document.getElementsByClassName("card1");
const sections = document.getElementsByTagName("section");
const homesection = document.getElementById("home-section2");

const section1 = document.getElementById("About");
const section2 = document.getElementById("objectives");
const section3 = document.getElementById("Future-work");
const section4 = document.getElementById("Contact");

// console.log(contents)

 function search() {

 input1= searchInput1.value.toLowerCase();

 // titles-search

for (var i = 0 ; i < titles.length ; i++){
  if(titles[i].textContent.toLowerCase().includes(input1)){
     console.log("ok")
     console.log(i)
    //  var selected_section ;
     switch (i){
      case 0 : 
      section1.scrollIntoView({behavior: 'smooth'}, true);
      break;
      case 1 : 
      section2.scrollIntoView({behavior: 'smooth'}, true);
      break;
      case 2 : 
      section3.scrollIntoView({behavior: 'smooth'}, true);
      break;
      case 3 : 
      section4.scrollIntoView({behavior: 'smooth'}, true);
      break; 
     }
  }


}
// subtitles-search

for (var i = 0 ; i < subtitles.length ; i++){
  if(subtitles[i].textContent.toLowerCase().includes(input1)){
     console.log("ok55")
     console.log(i)
     switch (i){
      case 0 : 
      section1.scrollIntoView({behavior: 'smooth'}, true);
      break;
      case 1 : 
      section3.scrollIntoView({behavior: 'smooth'}, true);
      break;
      case 2 : 
      section4.scrollIntoView({behavior: 'smooth'}, true);
      break;
      case 3 : 
      section4.scrollIntoView({behavior: 'smooth'}, true);
      break; 
      case 4 : 
      section4.scrollIntoView({behavior: 'smooth'}, true);
      break; 
     }
  }


}

// cards-search
for (var i = 0 ; i < contents.length ; i++){
  if(contents[i].textContent.toLowerCase().includes(input1)){
     console.log("ok55")
     console.log(i)
     switch (i){
      case 0 : 
      section2.scrollIntoView({behavior: 'smooth'}, true);
      break;
      case 1 : 
      section2.scrollIntoView({behavior: 'smooth'}, true);
      break;
      case 2 : 
      section2.scrollIntoView({behavior: 'smooth'}, true);
      break;
      case 3 : 
      section2.scrollIntoView({behavior: 'smooth'}, true);
      break; 
      case 4 : 
      section2.scrollIntoView({behavior: 'smooth'}, true);
      break; 
     }
  }


}


}


searchInput1.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      search();
  }
});





// search end




// objectives start
card_group2 = document.getElementsByClassName("card-content-group2")[0];
card_group1 = document.getElementsByClassName("card-content-group1")[0];
 
while (window.innerWidth < 992){
 card_group1.appendChild(card_group2.childNodes[1])
 card_group1.appendChild(card_group2.childNodes[2])
 card_group2.remove();
}



// objectives end
