let container = document.querySelector('main');

let imageClassName = ["img1", "img2", "img3", "img4", "img5"]

let randomIndex = parseInt(Math.random()*5);
let randomClassName = imageClassName[randomIndex];
imageClassName.push(randomClassName);

let count = 0;
for (let i = 0; count < 6; i++) {
	let imgTag = document.createElement('img');
	let randomIndex = parseInt(Math.random()*6);
	if (imageClassName[randomIndex] == 1) {
		continue;
	}
	imgTag.className = imageClassName(randomIndex);
	count++;
	imageClassName[randomIndex] = -1;
	container.append(imgTag);
}
