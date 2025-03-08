const scoreElement = document.createElement('div');
scoreElement.style.position = 'absolute';
scoreElement.style.top = '10px';
scoreElement.style.left = '10px';
scoreElement.style.color = 'white';
document.body.appendChild(scoreElement);

function updateUI() {
    scoreElement.textContent = `Score: ${score}`;
}

// Main animation loop
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    updateProjectiles();
    checkCollisions();
    updateUI();

    renderer.render(scene, camera);
}
animate();
