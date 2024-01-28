let skillContainer = document.querySelector(".skills-content")

const skills = [
    {
        id: 1,
        title: "HTML and CSS",
        progress: "58%"
    }, 
    {
        id: 2,
        title: "Javascript",
        progress: "39%"
    }, 
    {
        id: 2,
        title: "Pixel Art",
        progress: "39%"
    }, 
    {
        id: 2,
        title: "Graphics Design",
        progress: "39%"
    }, 
    {
        id: 2,
        title: "Java",
        progress: "19%"
    }, 
    {
        id: 2,
        title: "UI/UX Design",
        progress: "14%"
    }
]


window.addEventListener("DOMContentLoaded", () => {
    displaySkillsItems(skills);
    displayProjectsItem(projects);
});

//display skills function

function displaySkillsItems(skillItem){
    let displaySkills = skillItem.map(item =>{
        
        return `<div class="skills-item">
                    <h2 id="skill-title">${item.title}</h2>
                    <img src="" alt="">
                    
                    <div class="progress-bar-container">
                        <div class="progress-bar-bg">
                            <div class="progress-bar" style="width: ${item.progress};">
                                <div class="progress-bar-item"></div>
                                <div class="progress-bar-item"></div>
                                <div class="progress-bar-item"></div>
                                <div class="progress-bar-item"></div>
                                <div class="progress-bar-item"></div>
                            </div>
                        </div>
                    </div>
                </div>`
    });
    displaySkills = displaySkills.join("");
    
    skillContainer.innerHTML = displaySkills;
}


//display projects

let projectContainer = document.querySelector('.projects-container');

// const projects = [
//     {
//         id: 1,
//         title: "Meme Generator",
//         desc: "A simple meme generator using the meme API.",
//         img: "",
//         link: ""
//     }
// ]

// function displayProjectsItem(projectItem){
//     let projects;


//     if (projectItem.length == 0){
//         projects = [];
//     } else if(projectItem.length > 0) {
//         projects = projectItem.map(item => {
//             return `<div class="project-item">
//         <div class="project-description">
//             <h2 class="project-title">${item.title}<span></span></h2>
//             <p class="color-black">${item.desc}</p>
//             <a href="${item.link}"><button><p>Visit</p></button></a>
//         </div>
//     </div>`
//     });
//     } 

    
//     projects = projects.join("");
//     projectContainer.innerHTML = projects;
// } 