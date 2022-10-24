const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 0)
});
const octokit = new Octokit({
    auth: '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'
  })
  
  await octokit.request('GET /repos/VitaminaNescau/TestandoAPI', {
    owner: 'VitaminaNescau',
    repo: 'TestandoAPI'
  })