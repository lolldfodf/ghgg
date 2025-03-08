let targets = [];
let score = 0;

// Create a target
function createTarget() {
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const target = new THREE.Mesh(geometry, material);

    target.position.set(Math.random() * 10 - 5, Math.random() * 5 - 2, Math.random() * 10 - 5);
    scene.add(target);
    targets.push(target);
}

// Check for collisions between projectiles and targets
function checkCollisions() {
    projectiles.forEach((projectile, index) => {
        targets.forEach(target => {
            const distance = projectile.position.distanceTo(target.position);
            if (distance < 1) {  // Check if close enough
                scene.remove(projectile);
                scene.remove(target);
                targets = targets.filter(t => t !== target);
                projectiles = projectiles.filter(p => p !== projectile);
                score++;
            }
        });
    });
}
