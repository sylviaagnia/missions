Let LastImage = document.getElementsByClassName("last-img")[0];
Let MidImage = document.getElementsByClassName("mid-img")[0];
Let PohonImage = document.getElementsByClassName("pohon-img")[0];
Let Cloud1Image = document.getElementsByClassName("cloud1-img")[0];
Let FocusImage = document.getElementsByClassName("focus-img")[0];
Let PagerImage = document.getElementsByClassName("pager-img")[0];
Let Bakugo = document.querySelector("#landing h1");
Let Button = document.querySelector(".btn");

window.addEventListener('scroll', function(){
    Let value = window.scrollY;
    
    PohonImage.style.left = value * 0.9 + 'px';
    PohonImage.style.top = value * 0.7 + 'px';
    PagerImage.style.top = value * 0.9 + 'px';
    PagerImage.style.top = value * 0.7 + 'px';
    LastImage.style.top = value * 0.7 + 'px';
    MidImage.style.top = value * 0.3 + 'px';

    FocusImage.style.top = value * 0 + 'px';
    Bakugo.style.right = value * 0.5 + 'px';
    Button.style.right = value * 0.1 + 'px';

})
