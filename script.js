//Made With Love // Maanasa Prasad
document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});
	const allAnimatedElements = document.querySelectorAll('.animate');
	allAnimatedElements.forEach((element) => observer.observe(element));
});

const stickySections = [...document.querySelectorAll('.sticky_wrap')]
window.addEventListener('scroll', (e) => {
    for(let i = 0; i < stickySections.length; i++){
        transform(stickySections[i])
    }
})
function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.horizontal_scroll')
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}

function opennav(){
    document.getElementById("menu").style.width="20vw";
}
function closenav(){
    document.getElementById("menu").style.width="0vw";
}