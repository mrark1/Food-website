const mobileMenu=document.querySelector('.mobile-menu');
const scrollBtn=document.querySelector('.scroll-top');
mobileMenu.addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('show')

});
window.addEventListener('scroll',function(){
    if(this.document.body.scrollTop>200||this.document.documentElement.scrollTop>200){
        scrollBtn.style.display="block"
    }
    else{
        scrollBtn.style.display="none"
    }
});

scrollBtn.addEventListener('click',()=>{
    document.documentElement.scrollTop=0;
});


const searchInput = document.getElementById('searchInput');
const blogList = document.getElementById('blogList');

if (searchInput && blogList) {
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const posts = blogList.getElementsByClassName('blog-post');
        for (let post of posts) {
            const title = post.querySelector('h3').innerText.toLowerCase();
            const paragraph = post.querySelector('p').innerText.toLowerCase();
            if (title.includes(filter) || paragraph.includes(filter)) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        }
    });
}

