let currentCapsule = 0;
let totalCapsules;

function changePage() {
    const buttons = document.querySelectorAll('.page-numbers button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            currentCapsule = button.getAttribute('data-id') - 1;
            loadCapsuleData();
        });
    });
    loadCapsuleData();
}

function next() {
    const buttons = document.querySelectorAll('.page-numbers button');
    let count = Number(buttons[0].getAttribute('data-id'));
    let max = Number(buttons[3].getAttribute('data-id'));

    if (max < totalCapsules) {
        for (let i = 0; i < buttons.length; i++) {
            count++;
            buttons[i].setAttribute('data-id', count);
            buttons[i].innerText = count;
        }
    }
}

function prev() {
    const buttons = document.querySelectorAll('.page-numbers button');
    let count = Number(buttons[0].getAttribute('data-id'));

    if (count > 1) {
        for (let i = buttons.length - 1; i >= 0; i--) {
            count--;
            buttons[i].setAttribute('data-id', count);
            buttons[i].innerText = count;
        }
    }
}

function loadCapsuleData() {
    fetch("https://api.spacexdata.com/v4/capsules/")
        .then(response => response.json())
        .then(capsules => {
            totalCapsules = capsules.length;
            displayCapsuleInfo(capsules[currentCapsule]);
        });
}

function displayCapsuleInfo(capsule) {
    document.querySelector('.content').innerHTML = `
        <h2>Capsule Info</h2>
        <p>Reuse Count: ${capsule.reuse_count}</p>
        <p>Water Landings: ${capsule.water_landings}</p>
        <p>Land Landings: ${capsule.land_landings}</p>
        <p>Serial: ${capsule.serial}</p>
        <p>Status: ${capsule.status}</p>
        <p>Type: ${capsule.type}</p>
    `;
    document.querySelector('.last-update').innerHTML = `
        <h4>Last Update:</h4>
        <p>${capsule.last_update}</p>
    `;
    loadLaunches(capsule.launches);
}

function loadLaunches(launchIds) {
    const launchList = document.getElementById('left');
    launchList.innerHTML = '';  // Clear previous launches
    launchIds.forEach(id => {
        fetch(`https://api.spacexdata.com/v4/launches/${id}`)
            .then(response => response.json())
            .then(launch => {
                launchList.innerHTML = `
                    <div class="launch-item">
                        <h3>${launch.name}</h3>
                        <p>${launch.details || 'Details not available'}</p>
                        <img src="${launch.links.patch.small || '../imagen/default.png'}" alt="${launch.name}">
                    </div>
                `;
            });
    });
}

loadCapsuleData(); // Cargar datos iniciales
