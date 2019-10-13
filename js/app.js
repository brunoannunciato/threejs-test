const THREE = require('three');
const OrbitControls = require('three-orbitcontrols');

const planets = [
	{
		name: 'earth',
		texture: '../textures/grandient-01.png',
		ratio: 1,
		horizontalPolly: 6,
		vericalPolly: 6,
		xPosition: 2,
		yPosition: 2,
		zPosition: 7
	}, {
		name: 'pluto',
		texture: '../textures/grandient-02.png',
		ratio: 1,
		horizontalPolly: 15,
		vericalPolly: 15,
		xPosition: 2,
		yPosition: 2,
		zPosition: -7
	}, {
		name: 'Bruno',
		texture: '../textures/grandient-03.png',
		ratio: 1,
		horizontalPolly: 15,
		vericalPolly: 15,
		xPosition: 4,
		yPosition: 6,
		zPosition: -7
	}, {
		name: 'Bruno',
		texture: '../textures/grandient-05.png',
		ratio: 1,
		horizontalPolly: 6,
		vericalPolly: 6,
		xPosition: 12,
		yPosition: 10,
		zPosition: 12
	}, {
		name: 'earth',
		texture: '../textures/grandient-04.png',
		ratio: 1,
		horizontalPolly: 15,
		vericalPolly: 15,
		xPosition: 7,
		yPosition: 7,
		zPosition: 7
	}, {
		name: 'earth',
		texture: '../textures/grandient-06.png',
		ratio: 1,
		horizontalPolly: 6,
		vericalPolly: 6,
		xPosition: 12,
		yPosition: 12,
		zPosition: 3
	}, {
		name: 'earth',
		texture: '../textures/grandient-07.png',
		ratio: 1,
		horizontalPolly: 6,
		vericalPolly: 6,
		xPosition: 15,
		yPosition: 30,
		zPosition: -20
	}, {
		name: 'earth',
		texture: '../textures/grandient-08.png',
		ratio: 1,
		horizontalPolly: 15,
		vericalPolly: 15,
		xPosition: 20,
		yPosition: -20,
		zPosition: 10
	}, {
		name: 'earth',
		texture: '../textures/grandient-09.png',
		ratio: 1,
		horizontalPolly: 15,
		vericalPolly: 15,
		xPosition: 30,
		yPosition: 2,
		zPosition: 1
	}
]

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

let renderer = new THREE.WebGLRenderer();
// renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = .25
controls.enableZoom = true

camera.position.z = 70;
camera.position.y = 10;
camera.position.x = 7;

const renderPlanet = planets => {

	planets.forEach(planet => {
		let geometry = new THREE.SphereGeometry(planet.ratio, planet.horizontalPolly, planet.vericalPolly);
		var texture = new THREE.TextureLoader().load(planet.texture);
		var material = new THREE.MeshBasicMaterial({ map: texture });
		let sphere = new THREE.Mesh(geometry, material);
		sphere.position.set(planet.xPosition, planet.yPosition, planet.zPosition)
		scene.add(sphere);
	});

}

const animate = () => {
	requestAnimationFrame( animate );

	scene.children.forEach(planet => {
		planet.rotation.y += 0.03;
	})


	renderer.render( scene, camera );
};

renderPlanet(planets)
animate();