function loadCompanyData() {
    fetch("https://api.spacexdata.com/v4/company")
        .then(response => response.json())
        .then(company => {
            displayCompanyInfo(company);
        });
}

function displayCompanyInfo(company) {
    const content = document.querySelector('.content');
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
            <div class="info-item">
                <p><strong>Employees:</strong> ${company.employees}</p>
            </div>
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
            <div class="info-item">
                <p><strong>CTO Propulsion:</strong> ${company.cto_propulsion}</p>
            </div>
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
                <p><strong>Twitter:</strong> <a href="${company.links.twitter}" target="_blank">Twitter</a></p>
            </div>
        </div>
    `;
}

loadCompanyData();
