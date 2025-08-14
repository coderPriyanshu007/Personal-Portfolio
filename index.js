//projects
const projects = [
  {
    id: "ischool",
    title: "iSchool",
    brief: 'E-learning management system',
    projectImg: 'assets/images/ischool.png',
    description: `i-School is a full-stack e-learning management system offering educational video courses for students. 
  It includes user and admin login, a dashboard for managing students and courses, course purchase and video streaming features, and order transaction details.
  
  The platform is fully responsive and supports real-time management through AJAX and server-side processing.`,
    techStack: ["jQuery", "Bootstrap", "AJAX", "Apache", "MySQL", "PHP"],
    images: [
      'assets/images/elearning/elearning-1.png',
      'assets/images/elearning/elearning-2.png',
      'assets/images/elearning/elearning-3.png',
      'assets/images/elearning/elearning-4.png',
      'assets/images/elearning/elearning-5.png',
      'assets/images/elearning/elearning-6.png'
    ],
    github :`https://github.com/coderPriyanshu007/iSchool`
  },
  {
    id: "reactjobs",
    title: "React Jobs",
    brief: 'Job Portal For React Developers',
    projectImg: 'assets/images/react-jobs.png',
    description: `React Jobs is a single-page application built with React, Vite, and Tailwind CSS that allows users to browse and add job listings specifically for React developers. 
  This platform serves both job seekers looking for React-related positions and employers looking to post opportunities in the React development field.`,
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    images: [
      'assets/images/react-jobs/reactjobs-1.png',
      'assets/images/react-jobs/reactjobs-2.png',
      'assets/images/react-jobs/reactjobs-3.png',
      'assets/images/react-jobs/reactjobs-4.png'
    ],
    github : `https://github.com/coderPriyanshu007/React-Jobs-react-application`
  },
  {
    id: "anirecs",
    title: "AniRecs",
    brief: 'AI anime recommendation system',
    projectImg: 'assets/images/AniRecs.png',
    description: `AniRecs is an AI-powered anime recommendation system that suggests shows based on a user's liked anime and favorite genres. 
  It features user authentication, a dynamic recommendation engine, and an elegant modern UI with a samurai-inspired red and black theme.
  
  AniRecs also keeps users updated with the latest and upcoming anime releases, and offers real-time insights into the anime world.`,
    techStack: [
      "React",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Material UI",
      "Tailwind CSS",
    ],
    images: [
      'assets/images/anirecs/anirecs-1.png',
      'assets/images/anirecs/anirecs-2.png',
      'assets/images/anirecs/anirecs-3.png',
      'assets/images/anirecs/anirecs-4.png',
      'assets/images/anirecs/anirecs-5.png',
      'assets/images/anirecs/anirecs-6.png',
      'assets/images/anirecs/anirecs-7.png'
    ],
    github : `https://github.com/coderPriyanshu007/AniRecs`
  },
  {
    id: "tindog",
    title: "Tindog",
    brief: 'Tinder for dogs',
    projectImg: 'assets/images/tindog.png',
    description: `This is a Landing page for a conceptual startup Tindog which is basically a Tinder for dogs. 
  Where one's dog can meet other dogs and make friends with them. Comes with 3 pricing plans — Chihuahua, Labrador, and Mastiff.
  
  Landing page has beautiful UI, highlights features of the startup. Fully responsive, looks equally great on all kinds of screen sizes.`,
    techStack: ["HTML", "CSS", "Bootstrap"],
    images: [
      'assets/images/tindog/tindog-1.png',
      'assets/images/tindog/tindog-2.png',
      'assets/images/tindog/tindog-3.png',
      'assets/images/tindog/tindog-4.png'
    ],
    github : `https://github.com/coderPriyanshu007/Tindog-startup-LandingPage`
  },
  {
    id: 'simon-game',
    title : "Simon's Game",
    brief: 'A memory game',
    projectImg: 'assets/images/simon-game.png',
    description: `Simon Game is a fun and challenging memory game where players must follow an increasingly complex pattern of sounds and colors to progress through levels. The game tests your memory and concentration as the patterns get harder with each level. What's the highest level you can achieve?`,
    techStack: ["HTML", "CSS", "JavaScript"],
    images: [
      'assets/images/simon-game/simon-game-2.png',
      'assets/images/simon-game/simon-game-1.png',
    ],
    github : `https://github.com/coderPriyanshu007/Simon-Game-`
  },
  {
    id:'todo',
    title: 'Todo List',
    brief: 'A simple todo list app',
    projectImg: 'assets/images/todo.png',
    description: `A simple To-Do List application where users can add tasks for today, the current week, and the current month. Users can update task titles and mark tasks as completed to remove them from the list. The app is built using Node.js, Express, EJS templating, and PostgreSQL for data persistence. It also utilizes middlewares like body-parser from npm.`,
    techStack: ["Node.js", "Express.js", "PostgreSQL", "CSS"],
    images: [
      'assets/images/todo/todo-1.png',
      'assets/images/todo/todo-2.png',
      'assets/images/todo/todo-3.png',
    ],
    github : `https://github.com/coderPriyanshu007/todo-list-app`
  },
  {
    id:'portoflio',
    title : 'Portfolio Website',
    brief: 'Cyan themed portfolio website',
    projectImg: 'assets/images/portfolio.png',
    description : `A modern, responsive portfolio website for showcasing your skills, your work, your personal details featuring a cyan theme, built using Bootstrap, HTML, CSS, and JavaScript. The website showcases a cyan color scheme and implements Bootstrap components for a clean, professional, and visually appealing layout.`,
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    images: [
      'assets/images/portfolio/portfolio-1.png',
      'assets/images/portfolio/portfolio-2.png',
      'assets/images/portfolio/portfolio-3.png',
      'assets/images/portfolio/portfolio-4.png'
     
    ],
    github : `https://github.com/coderPriyanshu007/Portfolio-Cyan-Theme`
  }




];

// on load animations
AOS.init({ duration: 1000 }); 
let intervalID ;

//carousel logic
const activateCarousel = ()=>{
  
  const carousel = document.getElementById("carouselSlides");
  carousel.style.transform = 'translateX(0)';
  const totalSlides = carousel.children.length;
  console.log(totalSlides);
  let index = 0;

  function showSlide(i) {
    carousel.style.transform = `translateX(-${i * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }
  clearInterval(intervalID); 
  // Auto play every 3 seconds
  intervalID = setInterval(nextSlide, 3000);
}

//generate project
const showProject = () =>{
  gsap.fromTo('#project-details-nav', {
    opacity: 0,
    y: -50
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out'
  })
  gsap.fromTo('#project-content', {
    opacity: 0,
    y: 50
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out'
  })
}

//insert projects in all projects section
document.addEventListener('DOMContentLoaded',()=>{
  let projectsHTML = '';
  projects.forEach((proj)=>{
    projectsHTML+= `<div class="w-full flex-shrink-0 relative" style="margin-right: 200px;">
                      <h1 class="text-5xl text-[#c084fc] font-bold underline">${proj.title}</h1>
                      <p class="text-2xl font-thin  text-gray-500 mb-8">- ${proj.brief}</p>
                      <div  class="bg-green-200 w-96 h-80 relative cursor-pointer rounded-lg overflow-hidden">
                        <img src=${proj.projectImg} title="See project" class="h-full hover:scale-105 hover:opacity-[0.8] transition-transform duration-500 ease-in-out w-full object-cover "  alt="">
                        <p onclick="showDetails('${proj.id}')" class="absolute bottom-0 hover:underline text-white bg-black/40 backdrop-blur-sm w-full text-center p-2">Check More Details</p>
                      </div>
                      <div class="absolute hidden lg:block h-[500px] w-[600px] rounded-xl overflow-hidden right-[-60px] top-[50px] " style="box-shadow: 0 30px 30px 15px rgb(157, 155, 155);">
                        <img src=${proj.images[0]} class="w-full h-full object-cover"  alt="">
                      </div>
                    </div>`
  })
  document.querySelector('#project-slider').innerHTML = projectsHTML;
})


//show and hide next and previous project button on hover
document.querySelector('#project-slider-wrapper').addEventListener('mouseover',()=>{
  document.querySelectorAll('#nextSlide,#previousSlide').forEach(btn=>{
    btn.classList.remove('hidden')
  })
})

document.querySelector('#project-slider-wrapper').addEventListener('mouseenter',()=>{
  document.querySelectorAll('#nextSlide,#previousSlide').forEach(btn=>{
    btn.classList.remove('hidden')
  })
})
document.querySelector('#project-slider-wrapper').addEventListener('mouseleave',()=>{
  document.querySelectorAll('#nextSlide,#previousSlide').forEach(btn=>{
    btn.classList.add('hidden')
  })
})

//logic for project slides
const track = document.querySelector('#project-slider');
const next = document.querySelector('#nextSlide');
const prev = document.querySelector('#previousSlide');
let currentIndex = 0;
prev.classList.add('pointer-events-none','opacity-[0.5]')


const updatePosition = (i) =>{
  track.style.transform = `translateX(calc(${-i * 100 }% - ${i*200 }px))`;

}

next.addEventListener('click',()=>{
  prev.classList.remove('pointer-events-none','opacity-[0.5]');
  currentIndex = (currentIndex+1);
  console.log(currentIndex)
  if(currentIndex==track.children.length-1){
    next.classList.add('pointer-events-none','opacity-[0.5]');
   }else{
     next.classList.remove('pointer-events-none','opacity-[0.5');
   }

 
  updatePosition(currentIndex);
})

prev.addEventListener('click',()=>{
  next.classList.remove('pointer-events-none','opacity-[0.5]');
  currentIndex = (currentIndex-1);
  console.log(currentIndex)
  if(currentIndex==0){
    prev.classList.add('pointer-events-none','opacity-[0.5]');
   }else{
    prev.classList.remove('pointer-events-none','opacity-[0.5]');
   }
  console.log(currentIndex)
 
  updatePosition(currentIndex);
})


//logic for project slides end

//on document load animation

document.addEventListener('DOMContentLoaded', () => {
  gsap.fromTo('#about-me', { opacity: 0, x: -50 }, {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'bounce'
  })
})


//  show all projects
const showAllProjects = () => {
  
  gsap.to("#about-me", {
    keyframes: [
      { opacity: 0.5, x: -100, duration: 0.25 },
      { opacity: 0, x: -200, duration: 0.25 },
    ],
    ease: "power2.out",

    onComplete: () => {
      document.getElementById("about-me").classList.add("hidden");
      const section2 = document.getElementById("allProjects");
      document.querySelector('#all-project-content').classList.remove('hidden');
      section2.classList.remove("hidden");

      gsap.fromTo(
        "#projects-nav",
        { opacity: 0, y: -50 }, // start with hidden and slightly below
        { opacity: 1, y: 0, duration: 0.5, ease: "''power2.out" }
      );
      gsap.fromTo(
        "#all-project-content",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    },
  });
  gsap.to('#project-details-nav',{
    opacity:0,
    y:-50,
    duration:0.5,
    ease:'power2.out',
    onComplete : ()=>{
      document.querySelector('#project-details').classList.add('hidden');
      document.getElementById("allProjects").classList.remove('hidden');
      
    }
  })
  gsap.to('#project-content',{
    opacity:0,
    y: 100,
    duration:0.5,
    ease:'power2.out'
  })
  gsap.to("#portfolio", {
    keyframes: [
      { opacity: 0.5, x: 50, duration: 0.25 },
      { opacity: 0, x: 100, duration: 0.25 },
    ],
    ease: "power2.out",

    onComplete: () => {
      document.getElementById("portfolio").classList.add("hidden");
    },
  });
}



//show details of project
const showDetails = (id) => {
  const project = projects.find(proj => proj.id === id);


  document.querySelector('#project-heading').textContent = project.title;
  document.querySelector('#project-desc').textContent = project.description;
  document.querySelector('#github').setAttribute('href', project.github || '#');
  let html = ''; //innerHTML for tech stack
  let carouselHTML = '';  //innerHTML for image carousel

  //logic for generating html for tech stack
  project.techStack.forEach(stack => {
    html += `<div>
                <div
                 title=${stack}
                class="bg-gray-100 p-4 mx-auto cursor-pointer shadow-md hover:shadow-lg w-[60px] h-[60px]"
              >
                <img
                  src="assets/images/skills/${stack}.png"
                  height="28px"
                  width="28px"
                  alt=""
                 
                />
                
              </div>
              
              </div>`

  })
  //generating html for carousel
  project.images.forEach(img => {
    carouselHTML += `<img src=${img} class="w-full flex-shrink-0" />`;
  })

  document.querySelector('#tech-stack').innerHTML = html; //setting inner html of tech stack
  document.querySelector('#carouselSlides').innerHTML = carouselHTML; // setting inner html for carousel

  //activate carousel
  activateCarousel();

  


  //animation logic fade out fade in
  gsap.to('#about-me', {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: 'power2.out',
    onComplete: () => {
      document.querySelector('#about-me').classList.add('hidden');
      document.querySelector('#project-details').classList.remove('hidden');
      showProject();
    }
  })
  gsap.to('#projects-nav',{
    opacity:0,
    y:-50,
    duration:0.5,
    ease: 'power2.out',
    onComplete : ()=>{
      document.querySelector('#allProjects').classList.add('hidden');
      showProject();
    }
  })
  gsap.to('#all-project-content',{
    opacity:0,
    y:100,
    duration:0.5,
    ease: 'power2.out',
  })
  
  gsap.to('#portfolio', {
    opacity: 0,
    x: 100,
    duration: 0.5,
    ease: 'power1.out',
    onComplete: () => {

      document.querySelector('#portfolio').classList.add('hidden');
      
     
      
    }
  })
}


//project title animation
//project title animation
//project title animation
//project title animation
document.querySelectorAll("#portfolio-content > div").forEach((div) => {
  let originalHTML = '';
  div.addEventListener("mouseenter", (e) => {

    const id = e.target.id;
    const title = e.target.querySelector(".project-title");
    originalHTML = title.innerHTML;
    title.innerHTML = '<span style="font-family: Red Hat Display, sans-serif" class="py-1 rounded-sm flex justify-between items-center hover:bg-white/20 hover:w-[90px] px-2 border font-normal border-white" style="font-size: 20px;">view <i style="font-size:16px;" class="fa-solid  fa-arrow-right ms-2"></i></span>';
    gsap.to(
      title,
      {
        height: '100%',

        duration: 0.2,
        ease: "power1.out",
      }
    );
  });
  div.addEventListener("mouseleave", (e) => {
    const id = e.target.id;
    const title = e.target.querySelector(".project-title");
    title.innerHTML = originalHTML;
    gsap.to(title, {
      height: 'auto',
      duration: 0.5,
      ease: "bounce",
    });
  });
});

//switch tabs in about us section
function showTab(id) {
  document
    .querySelectorAll(".tab-content")
    .forEach((t) => t.classList.add("lg:hidden"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active-tab"));
  document.getElementById(id).classList.remove("lg:hidden");
  gsap.fromTo(
    "#" + id,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8 }
  );
  const tabIndex = ["summary", "education", "skills", "contact"].indexOf(id);
  document.querySelectorAll(".tab-btn")[tabIndex].classList.add("active-tab");
}

//open about me dedecated section hides about me and portfolio
function openAboutMe() {
  gsap.to("#about-me", {
    keyframes: [
      { opacity: 0.5, x: -100, duration: 0.25 },
      { opacity: 0, x: -200, duration: 0.25 },
    ],
    ease: "power1.out",

    onComplete: () => {
      document.getElementById("about-me").classList.add("hidden");
      const section2 = document.getElementById("about");
      section2.classList.remove("hidden");

      gsap.fromTo(
        "#navigation-tabs",
        { opacity: 0, y: -50 }, // start with hidden and slightly below
        { opacity: 1, y: 0, duration: 0.8, ease: "''power2.out" }
      );
      gsap.fromTo(
        "#tab-content",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8 }
      );
    },
  });
  gsap.to("#portfolio", {
    keyframes: [
      { opacity: 0.5, x: 50, duration: 0.25 },
      { opacity: 0, x: 100, duration: 0.25 },
    ],
    ease: "power1.out",

    onComplete: () => {
      document.getElementById("portfolio").classList.add("hidden");
    },
  });
}

//home button functionality
//home button functionality
//home button functionality
//home button functionality
document.querySelectorAll(".go-to-home").forEach(btn => {
  
  btn.addEventListener("click", () => {
    clearInterval(intervalID); 
    gsap.to(["#navigation-tabs", '#project-details-nav', '#projects-nav'], {
      opacity: 0,
      y: -50,
      duration: 0.5,
      onComplete: () => {
        document.querySelector('#allProjects').classList.add('hidden');
        document.getElementById("about").classList.add("hidden");

        document.getElementById("project-details").classList.add("hidden");
        document.getElementById("about-me").classList.remove("hidden");
        document.getElementById("portfolio").classList.remove("hidden");
        gsap.fromTo(
          "#about-me",
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power1.out" }
        );
        gsap.fromTo(
          "#portfolio",
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
        );
      },
    });
    gsap.to(["#tab-content", '#all-project-content','#project-content'], {
      opacity: 0,
      y: 100,
      duration: 0.5,
    });
  })
});

//emailjs setup to receive message from contact us section
//emailjs setup to receive message from contact us section
//emailjs setup to receive message from contact us section
//emailjs setup to receive message from contact us section

emailjs.init("mumVDtZebZRGtvCWr");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  const message = document.querySelector("#warning");
  const sendBtn = document.querySelector("#sendMessage");

  e.preventDefault();
  let allFieldsSet = true;
  const inputFields = document.querySelectorAll("input");
  console.log(inputFields);
  inputFields.forEach((input) => {
    if (input.value === "") {
      allFieldsSet = false;

      message.className = "text-red-500";
      message.textContent = "! All Fields are necessary.";
    }
  });
  setTimeout(() => {
    message.classList.add("hidden");
  }, 5000);

  if (allFieldsSet) {
    sendBtn.textContent = "Sending...";
    emailjs.sendForm("service_drcqoum", "template_bms7fqt", this).then(
      function () {
        sendBtn.textContent = "Send Message";
        message.className = "text-green-500";
        message.textContent = "✅ Message sent successfully!";
        document.getElementById("contactForm").reset();
      },
      function (error) {
        message.className = "text-green-500";
        message.textContent = "❌ Failed to send message. Please try again.";
      }
    );
  }
});
