let currentPage = 1;
const totalPages = 3;

function loadCompanyData() {
    fetch("https://api.spacexdata.com/v4/company")
        .then(response => response.json())
        .then(company => {
            displayCompanyInfo(company, currentPage);
            createPagination(totalPages);
            handlePagination(company);
        });
}

function displayCompanyInfo(company, page) {
    const content = document.querySelector('.content');
    if (page === 1) {
        content.innerHTML = `
            <h2>${company.name}</h2>
            <div class="cohete">
                <img src="/storage/img/icons/cohete.jpg" alt="Cohete SpaceX">
            </div>
            <div class="info-grid">
                <div class="info-item">
                    <p><strong>Description:</strong> ${company.summary}</p>
                </div>
                <div class="info-item">
                    <p><strong>Founded:</strong> ${company.founded}</p>
                </div>
                <div class="info-item2">
                    <p><strong>Employees:</strong> ${company.employees}</p>
                </div>
            </div>
        `;
    } else if (page === 2) {
        content.innerHTML = `
            <div class="info-grid">
                <div class="info-item">
                    <p><strong>Founder:</strong> ${company.founder}</p>
                </div>
                <div class="info-item">
                    <p><strong>CEO:</strong> ${company.ceo}</p>
                </div>
                <div class="info-item">
                    <p><strong>COO:</strong> ${company.coo}</p>
                </div>
                <div class="info-item">
                    <p><strong>CTO:</strong> ${company.cto}</p>
                </div>
                <div class="info-item2">
                    <p><strong>CTO Propulsion:</strong> ${company.cto_propulsion}</p>
                </div>
            </div>
        `;
    } else if (page === 3) {
        content.innerHTML = `
            <div class="info-grid">
                <div class="info-item">
                    <p><strong>Vehicles:</strong> ${company.vehicles}</p>
                </div>
                <div class="info-item">
                    <p><strong>Launch Sites:</strong> ${company.launch_sites}</p>
                </div>
                <div class="info-item">
                    <p><strong>Test Sites:</strong> ${company.test_sites}</p>
                </div>
                <div class="info-item">
                    <p><strong>Headquarters:</strong> ${company.headquarters.address}, ${company.headquarters.city}, ${company.headquarters.state}</p>
                </div>
                <div class="info-item">
                    <p><strong>Valuation:</strong> ${company.valuation}</p>
                </div>
                <div class="info-item">
                    <p><strong>Website:</strong> <a href="${company.links.website}" target="_blank">Visit</a></p> 
                    <p><strong>Twitter:</strong> <a href="${company.links.twitter}" target="_blank">Twitter</a></p> <!-- Añadido el enlace de Twitter -->
                    </div>
            </div>
        `;
    }
}

function createPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.setAttribute('data-page', i);
        button.classList.add('page-button');
        pagination.appendChild(button);
    }
}

function handlePagination(company) {
    const buttons = document.querySelectorAll('.page-button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            currentPage = Number(event.target.getAttribute('data-page'));
            displayCompanyInfo(company, currentPage);
            updateActiveButton();
        });
    });
}

function updateActiveButton() {
    const buttons = document.querySelectorAll('.page-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (Number(button.getAttribute('data-page')) === currentPage) {
            button.classList.add('active');
        }
    });
}

// Initial call to load data
loadCompanyData();
