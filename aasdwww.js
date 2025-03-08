let projectiles = [];

function createProjectile() {
    const geometry = new THREE.SphereGeometry(0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const projectile = new THREE.Mesh(geometry, material);

    // Set the initial position of the projectile
    projectile.position.set(camera.position.x, camera.position.y, camera.position.z);

    scene.add(projectile);
    projectiles.push(projectile);
}

// Shooting event (mouse click)
document.addEventListener('mousedown', () => {
    createProjectile();
});

// Update projectiles' positions
function updateProjectiles() {
    projectiles.forEach(projectile => {
        projectile.position.z -= 0.1; // Move the projectile forward
    });
}
