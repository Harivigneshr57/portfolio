const sideBar = document.querySelector('#sidebar');
function ShowSidebar() {
    sideBar.style.display = 'flex';
}
function HideSidebar() {
    sideBar.style.display = 'none';
}
const techStacks = document.querySelector('.stacks');
const skillsData =
{
    skills: [
        { icon: 'https://imgs.search.brave.com/OB3KC1IycYcxgT0YAuprgRfPMTC0xAbXGxSkl5Za3yw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/Mzg2LzAwNS9zbWFs/bC90aGUtaHRtbDUt/bG9nby13aXRoLXRo/ZS1udW1iZXItNS1p/bi10aGUtY2VudGVy/LWZyZWUtcG5nLnBu/Zw', name: 'HTML5' },
        { icon: 'https://imgs.search.brave.com/6GMF8HwVKaCfbJzgPKGsx0SmGf4YMvEVi1aFlZP8BxQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQyLzIvY3NzLTMt/bG9nby1wbmdfc2Vl/a2xvZ28tNDI2MDgz/LnBuZw', name: 'CSS3' },
        { icon: 'https://imgs.search.brave.com/sR12cGfJZzDbqjyg4TAiZoqWEDh66vsw0rWA9nQpjAw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2phdmFzY3JpcHQt/cG5nL2phdmFzY3Jp/cHQtdmVjdG9yLWxv/Z28teWVsbG93LXBu/Zy10cmFuc3BhcmVu/dC1qYXZhc2NyaXB0/LXZlY3Rvci0xMi5w/bmc', name: 'JavaScript' },
        { icon: 'https://imgs.search.brave.com/eIoQJ768sZe7kdOvQMMqz22Nr-YeYcsmbUx4mC4S0d0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvUmVh/Y3QtTG9nby1QTkcu/cG5n', name: 'React JS' },
        { icon: 'https://imgs.search.brave.com/Fh4DXCDEK20AAANNX74U6_4541WQmq7hSQ8LbD2pqhc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW5vZGUtanMtaWNv/bi1zdmctZG93bmxv/YWQtcG5nLTExNzQ5/MjUucG5nP2Y9d2Vi/cCZ3PTI1Ng', name: 'Node.js' },
        { icon: 'https://imgs.search.brave.com/fzEGW05T2x0M5Ag3GZswX8C57sskLVVwlcjBo4W_U50/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/MzMyLzE1MC9zbWFs/bC9qYXZhLXByb2dy/YW1taW5nLWxhbmd1/YWdlLWphdmEtbG9n/by1mcmVlLXBuZy5w/bmc', name: 'Java' },
        { icon: 'https://imgs.search.brave.com/AU2hqEZi6P-WkXNU8Kv_QuAUx0h8I_MhENe-YodeIIE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbXlzcWwvbXlz/cWxfUE5HMjMucG5n', name: 'MySQL' },
    ],
}
skillsData.skills.forEach(skill => {
    techStacks.insertAdjacentHTML(
      "beforeend",
      `
      <div class="tech">
          <img src="${skill.icon}" alt="${skill.name}">
          <p>${skill.name}</p>
      </div>
      `
    );
  });
const project = document.querySelector('.projects');
const projects = [
    {
        img:'images/cinesync.png',
        title:'CineSync',
        techStacks:['REACT','NODE','MYSQL'],
        desc:'CineSync lets users watch movies together online with perfectly synchronized playback. It creates a shared viewing experience where everyone watches the same scene at the same time.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/Harivigneshr57/CineSync'],
        live:['<i class="fa-solid fa-share-from-square"></i>','LIVE DEMO','https://cine-sync-jade.vercel.app/'],
        category:['react','node','all','group']
    },
    {
        img:'images/onlinecourse.png',
        title:'Online Course App',
        techStacks:['JAVA','MYSQL'],
        desc:'An online learning platform where users can explore and enroll in various courses. It provides structured lessons to help users learn new skills anytime, anywhere.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/Harivigneshr57/Online-course-app'],
        category:['java','all']
    },
    {
        img:'images/haspmap.png',
        title:'HashMap',
        techStacks:['JAVA','MYSQL'],
        desc:'A password manager built with a self-implemented HashMap to securely store and manage credentials.Highlights custom data structure implementation and efficient lookup operations.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/Harivigneshr57/Password-Manger-using-Hashmap'],
        category:['java','all']
    },
    {
        img:'images/notes.png',
        title:'Notes App',
        techStacks:['NODE','MYSQL'],
        desc:'A notes management app where users can create, update, and delete notes seamlessly.Built to help users keep their ideas and tasks organized in one place.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/Harivigneshr57/Notes-App'],
        category:['node','all']
    }
    ,{
        img:'images/solarsystem.png',
        title:'Solar System',
        techStacks:['NODE'],
        desc:'An interactive website that explores the planets and structure of the solar system.Designed to present space information in a visually engaging way.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/Harivigneshr57/SolarSystem-ejs-'],
        category:['node','all']
    },
    {
        img:'images/collage.png',
        title:'Collage Craft',
        techStacks:['HTML','CSS','JAVASCRIPT'],
        desc:'An application that lets users create beautiful photo collages by arranging multiple images.Built to provide a simple and interactive collage-design experience.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/Harivigneshr57/College-Maker'],
        live:['<i class="fa-solid fa-share-from-square"></i>','LIVE DEMO','https://harivigneshr57.github.io/College-Maker/collage.html'],
        category:['javascript','all']
    },
    {
        img:'images/bank.png',
        title:'Bank Management',
        techStacks:['HTMl','CSS','JAVASCRIPT'],
        desc:'A banking system application that manages user accounts and financial transactions efficiently.Showcases structured data handling and core banking functionalities.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/Harivigneshr57/BankingApp'],
        live:['<i class="fa-solid fa-share-from-square"></i>','LIVE DEMO','https://harivigneshr57.github.io/BankingApp/Bank.html'],
        category:['javascript','all']
    },
    {
        img:'images/shopping.png',
        title:'Shopping Cart',
        techStacks:['HTMl','CSS','JAVASCRIPT'],
        desc:'A shopping cart application that handles product selection, quantity updates, and total price calculation.Showcases dynamic state management and interactive UI functionality.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/Harivigneshr57/ShoopingCart'],
        live:['<i class="fa-solid fa-share-from-square"></i>','LIVE DEMO','https://harivigneshr57.github.io/ShoopingCart/cart.html'],
        category:['javascript','all']
    },
    {
        img:'images/flight.png',
        title:'Flight Tracker',
        techStacks:['HTMl','CSS','JAVASCRIPT'],
        desc:'A flight tracking application that retrieves and displays real-time flight information.Demonstrates API integration and dynamic data visualization.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/Harivigneshr57/FlightTracker'],
        live:['<i class="fa-solid fa-share-from-square"></i>','LIVE DEMO','https://harivigneshr57.github.io/FlightTracker/flightTracker.html'],
        category:['javascript','all']
    },
    {
        img:'images/ff.png',
        title:'Free Fire Website',
        techStacks:['HTMl','CSS','REDESIGN'],
        desc:'A clone of the Free Fire website that replicates its design and user interface.Created to demonstrate front-end development and UI replication skills.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://harivigneshr57.github.io/Free-Fire-Website/homepage.html'],
        live:['<i class="fa-solid fa-share-from-square"></i>','LIVE DEMO','https://harivigneshr-5hrwoi23-8443.zcodecorp.in/HTMLCLASS/Advanced-JS/Assignment002/Assignment002-02/flightTracker.html'],
        category:['html','all']
    },
    {
        img:'images/fylo.png',
        title:'FYLO',
        techStacks:['HTML','CSS','REDESIGN'],
        desc:'A clone of the FYLO website that replicates its design and user interface.Created to demonstrate front-end development and UI replication skills.',
        git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/Harivigneshr57/Fylo'],
        live:['<i class="fa-solid fa-share-from-square"></i>','LIVE DEMO','https://harivigneshr57.github.io/Fylo/recreate.html'],
        category:['html','all']
    },
    {
        img:'images/object.png',
        title:'OBJECT FINDING',
        techStacks:['SCRATCH'],
        desc:'A project that uses computer vision to detect and locate objects within an image.Demonstrates image processing and automated object recognition.',
        live:['<i class="fa-solid fa-share-from-square"></i>','LIVE DEMO','https://scratch.mit.edu/projects/1191329105/fullscreen/'],
        category:['scratch','all']
    },
    {
        img:'images/ctach.png',
        title:'CATCH THE APPLE',
        techStacks:['SCRATCH'],
        desc:'A fun browser-based game where players control a basket to catch falling apples.Built to showcase animation, collision detection, and scoring mechanics.',
        live:['<i class="fa-solid fa-share-from-square"></i>','LIVE DEMO','https://scratch.mit.edu/projects/1191234055/fullscreen/'],
        category:['scratch','all']
    },
    {
        title: "Ram Nath Kovind",
       category: ['group'],
       desc: "A tribute webpage created for former President Ram Nath Kovind. This project was developed collaboratively with a class of 30 members and completed within a single day, focusing on clean design, responsive layout.",
       techStacks: ["JavaScript", "HTML", "CSS", "Responsive"],
       img: "images/ramnath.png",
       git:['<i class="fa-brands fa-github"></i>','CODE','https://github.com/hari786-master/Ram-Nath-Kovindh'],
       live:['<i class="fa-solid fa-share-from-square"></i>','LIVE DEMO','https://hari786-master.github.io/Ram-Nath-Kovindh/']
    }
] 

const buttons = document.querySelectorAll('.category');

buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{



        buttons.forEach(b=>b.classList.remove('active'));

        btn.classList.add('active');

        const category = btn.id;

        showProjects(category);

    })
})

function showProjects(category){

    project.innerHTML = '';

    const filtered = category === 'all'
        ? projects
        : projects.filter(p => p.category.includes(category));

    filtered.forEach(p=>{

        const stacks = p.techStacks.map(t=>`<div class="stack">${t}</div>`).join('');

        const live = p.live ? `
        <div class="live" onclick="window.open('${p.live[2]}')">
            ${p.live[0]} 
        </div>` : '';

        const git = p.git ? `
        <div class="git" onclick="window.open('${p.git[2]}')">
            ${p.git[0]}
        </div>` : '';

        project.innerHTML += `
        <div class="project" data-aos="fade-up">
            <img src="${p.img}">
            <h3>${p.title}</h3>

            <div class="techs-stack">
                ${stacks}
            </div>

            <p id="desc">${p.desc}</p>

            <hr>

            <div class="preview">
                ${git}
                ${live}
            </div>
        </div>
        `;

    })

}

showProjects('all');

const li = document.querySelectorAll('li');

li.forEach(btn=>{
    btn.addEventListener('click',()=>{

        li.forEach(b=>b.classList.remove('activeLi'));

        if(btn.innerText == "Portfolio")
            return;

        btn.classList.add('activeLi');

    })
})