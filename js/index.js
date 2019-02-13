//banner下side-right下的头条
let userul = document.querySelector(".banner-bigbox .side-right .toutiao ul");
let userMiddle = document.querySelector(".banner-bigbox .side-right .toutiao");
let userN = 0;

userMiddle.onmouseover = function() {
	clearInterval(usertime)
}
userMiddle.onmouseout = function() {
	usertime = setInterval(function() {
		userN++;
		usermove();
	}, 1000)
}
let usertime = setInterval(function() {
	userN++;
	usermove();
}, 1000)

function usermove() {
	userul.classList.add("active")
	userul.style.marginTop = -userN * 145 + "px";
	if (userN > 1) {
		setTimeout(function() {
			userul.style.marginTop = "0px";
			userul.classList.remove("active");
			userN = 0;
		}, 1000)
	}
}
//轮播图右
let bannerimgs = document.querySelectorAll(".banner-box img");
let bannerright = document.querySelector(".banner-box");
let bannerleftbtn = document.querySelector(".banner-box .left-btn");
let bannerrightbtn = document.querySelector(".banner-box .right-btn");
let bannerdian = document.querySelectorAll(".banner-box .dian>div");
let bannerN = 0;
let bannerSize = bannerimgs.length - 1;

bannerright.onmouseover = function() {
	clearInterval(time);
}
bannerright.onmouseout = function() {
	time = setInterval(function() {
		bannerN++;
		Move();
	}, 2000)
}
let time = setInterval(function() {
	bannerN++;
	Move();
}, 2000)
bannerrightbtn.onclick = function() {
	bannerN++;
	Move();
}
bannerleftbtn.onclick = function() {
	bannerN--;
	Move();
}
bannerdian.forEach(function(value, key) {
	value.onmouseover = function() {
		bannerN = key;
		Move();
	}
})

function Move() {

	bannerimgs.forEach(function(val, index) {
		val.classList.remove("active");
	})
	if (bannerN > bannerSize) {
		bannerN = 0;
	}
	if (bannerN < 0) {
		bannerN = bannerSize;
	}
	bannerdian.forEach(function(ele) {
		ele.classList.remove("active")
	})
	bannerdian[bannerN].classList.add("active");
	bannerimgs[bannerN].classList.add("active");
}