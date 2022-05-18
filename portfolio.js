var aboutMe = document.getElementById("about-me");
console.log(aboutMe);
var aboutMeLink = document.getElementById("aboutSection")
console.log(aboutSection)
var pastProjects = document.getElementById("past-projects")
console.log(pastProjects)
var whatImDoing = document.getElementById("what-im-doing")
console.log(whatImDoing)
function aboutClick () {
    aboutMe.style.display = "block";
    pastProjects.style.display = "none"
    whatImDoing.style.display = "none"
    
    
}

aboutMeLink.addEventListener("click", aboutClick)