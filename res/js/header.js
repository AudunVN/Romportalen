// fancy header function
$(document).ready(function(){
	document.querySelector(".frontPageContainer").style.top = "0px";
	document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
	$(".frontPageContainer .tile-image").show();
	$(window).scroll(function() {
		if ($(window).scrollTop() == 0) {
			document.querySelector(".frontPageContainer").style.top = "0px";
			document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
			$(".frontPageContainer .tile-image").show();
			console.log("scrolled to top");
		} else if ($(window).scrollTop() < $(".frontPageContainer").height()/10*5 ) {
			document.querySelector(".frontPageContainer").style.top = -$(window).scrollTop()+"px";
			document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
			$(".frontPageContainer .tile-image").show();
			console.log("transitioning start");
		} else if ($(window).scrollTop() < $(".frontPageContainer").height()-$(".frontPageContainer ul li.preStudentLink a h3").height() ) {
			document.querySelector(".frontPageContainer").style.top = -$(window).scrollTop()+"px";
			document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
			$(".frontPageContainer .tile-image").hide();
			console.log("transitioning mid");
		} else {
			document.querySelector(".frontPageContainer").style.top = -($(".frontPageContainer").height()-$(".frontPageContainer ul li a h3").height())+"px";
			document.querySelector(".frontPageContainer .tileNav").style.height = $(".frontPageContainer ul li.preStudentLink a h3").height()+"px";
			$(".frontPageContainer .tile-image").hide();
			console.log("navbar state");
		}
		if($(window).scrollTop() > $(".postStudent").offset().top) {
			document.querySelector(".postStudentLink.tileButton h3").style.textDecoration = "underline";
			document.querySelector(".generalLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".preStudentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".studentLink.tileButton h3").style.textDecoration = "none";
		} else if($(window).scrollTop() > $(".student").offset().top) {
			document.querySelector(".studentLink.tileButton h3").style.textDecoration = "underline";
			document.querySelector(".generalLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".preStudentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".postStudentLink.tileButton h3").style.textDecoration = "none";
		} else if($(window).scrollTop() > $(".preStudent").offset().top) {
			document.querySelector(".preStudentLink.tileButton h3").style.textDecoration = "underline";
			document.querySelector(".generalLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".studentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".postStudentLink.tileButton h3").style.textDecoration = "none";
		} else if($(window).scrollTop() > $(".generalInfo").offset().top) {
			document.querySelector(".generalLink.tileButton h3").style.textDecoration = "underline";
			document.querySelector(".preStudentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".studentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".postStudentLink.tileButton h3").style.textDecoration = "none";
		} else {
			document.querySelector(".generalLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".preStudentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".studentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".postStudentLink.tileButton h3").style.textDecoration = "none";
		}
	});
});