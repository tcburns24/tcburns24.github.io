var proj = document.getElementsByClassName('project-thumb');

for (var x=0; x<proj.length; x++) {
	proj[x].addEventListener("mouseover", function() {
		this.style.opacity="0.5";
	});
	proj[x].addEventListener("mouseout", function() {
		this.style.opacity = "1.0";
	});
}


