$(document).ready(function() {
	/*自制的小屏下拉菜单*/
	$("#menu").click(function() {
		/*$("#show").toggleClass("none");*/
		$("#show").slideToggle("slow");
	});

	var btn = document.getElementById("btn"); //按钮
	btn.onclick = function() {
		if(btn.innerHTML == "查看更多&nbsp;+") {
			$(".over").css("display", "block");
			btn.innerHTML = "关闭";
		} else {
			$(".over").css("display", "none");
			btn.innerHTML = "查看更多&nbsp;+";
		}
	}
	var buttom = document.getElementById("buttom"); //按钮
	buttom.onclick = function() {
		if(buttom.innerHTML == "查看更多&nbsp;+") {
			$(".hidden").css("display", "block");
			buttom.innerHTML = "关闭";
		} else {
			$(".hidden").css("display", "none");
			buttom.innerHTML = "查看更多&nbsp;+";
		}
	}
	var fastener = document.getElementById("fastener"); //按钮
	fastener.onclick = function() {
		if(fastener.innerHTML == "查看更多&nbsp;+") {
			$(".conceal").css("display", "block");
			fastener.innerHTML = "关闭";
		} else {
			$(".conceal").css("display", "none");
			fastener.innerHTML = "查看更多&nbsp;+";
		}
	}
	var normal = document.getElementById("normal"); //按钮
	normal.onclick = function() {
		if(normal.innerHTML == "查看更多&nbsp;+") {
			$(".none").css("display", "block");
			normal.innerHTML = "关闭";
		} else {
			$(".none").css("display", "none");
			normal.innerHTML = "查看更多&nbsp;+";
		}
	}
});