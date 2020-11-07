function backToTop(){
    document.documentElement.scrollIntoView({
        behavior: "smooth"
    });
}
window.onscroll = function(){
    var scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
	var totopBtn = this.document.getElementById("totop");
    if(scrollTop < 200){
		totopBtn.style.opacity=scrollTop/200;
    }
	else
	{
		totopBtn.style.opacity=scrollTop/200;
		totopBtn.style.display="inline";
        totopBtn.addEventListener('click',this.backToTop,false);
	}
}