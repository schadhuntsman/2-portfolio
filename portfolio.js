var aboutMe = document.getElementById("about-me");
console.log(aboutMe);
var aboutMeLink = document.getElementById("aboutSection")
console.log(aboutSection)
var pastProjects = document.getElementById("past-projects")
console.log(pastProjects)
var pastProjectsLink = document.getElementById("pastSection")
console.log(pastSection)
var whatImDoing = document.getElementById("what-im-doing")
console.log(whatImDoing)
var whatImDoingLink = document.getElementById("doingSection")
console.log(doingSection)


function aboutClick () {

    aboutMe.style.display = "block";
    pastProjects.style.display = "none"
    whatImDoing.style.display = "none"
}
function pastClick () {
    pastProjects.style.display = "none"
    pastProjects.style.display = "block";
   aboutMe.style.display = "none"
    whatImDoing.style.display = "none"   
} 
  
function doingClick () {
   whatImDoing.style.display = "block"
    aboutMe.style.display = "none"
    pastProjects.style.display = "none"   
} 


aboutMeLink.addEventListener("click", aboutClick)
pastProjectsLink.addEventListener("click", pastClick) 
whatImDoingLink.addEventListener("click", doingClick)


addEventListener;flk
