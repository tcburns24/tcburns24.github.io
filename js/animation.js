var proj = document.getElementsByClassName('project-thumb');

var colors = ["#a9f7ff", "#89e8f7", "#6fe4ff", "#6bdcff", "#69caf1", "#6399d1"];


for (var x=0; x<proj.length; x++) {
	proj[x].addEventListener("mouseover", function() {
		this.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
		this.style.borderWidth = "12px";
	});
	proj[x].addEventListener("mouseout", function() {
		this.style.borderColor = "black";
		this.style.borderWidth = "thick";
	});
}


