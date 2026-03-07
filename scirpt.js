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
    
]