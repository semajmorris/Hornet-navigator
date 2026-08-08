console.log("Hornet Navigator script loaded");

const searchInput = document.getElementById("campusSearch");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");
const campusResults = document.getElementById("campusResults");

const exploreButtons = document.querySelectorAll(".explore-category");
const categoryButtons = document.querySelectorAll(".category-button");
const resourceButtons = document.querySelectorAll(".resource-search");

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");


function createLocationCard(location, matchedSections = []) {
  return `
    <div class="search-result-card">

      <p class="search-result-category">
        ${location.category.toUpperCase()}
      </p>

      <h3>${location.name}</h3>

      <p>${location.description}</p>

      ${
        location.building
          ? `<p><strong>Building:</strong> ${location.building}</p>`
          : ""
      }

      ${
        location.room
          ? `<p><strong>Room:</strong> ${location.room}</p>`
          : ""
      }

      ${
        location.address
          ? `<p><strong>Location:</strong> ${location.address}</p>`
          : ""
      }

      ${
        location.services && location.services.length
          ? `
            <div class="location-services">
              <strong>Main Services:</strong>

              <ul>
                ${location.services
                  .map((service) => `<li>${service}</li>`)
                  .join("")}
              </ul>
            </div>
          `
          : ""
      }

      ${
        matchedSections.length
          ? `
            <div class="matched-sections">

              <h4>Relevant Locations Inside</h4>

              ${matchedSections
                .map(
                  (match) => `
                    <div class="floor-result">

                      <p class="floor-label">
                        ${match.floorName}
                      </p>

                      <h5>${match.section.name}</h5>

                      <p>
                        ${match.section.description || ""}
                      </p>

                      ${
                        match.section.features &&
                        match.section.features.length
                          ? `
                            <div class="floor-details">
                              <strong>What You'll Find:</strong>

                              <ul>
                                ${match.section.features
                                  .map((feature) => `<li>${feature}</li>`)
                                  .join("")}
                              </ul>
                            </div>
                          `
                          : ""
                      }

                      ${
                        match.section.locations &&
                        match.section.locations.length
                          ? `
                            <div class="floor-details">
                              <strong>Locations:</strong>

                              <ul>
                                ${match.section.locations
                                  .map((item) => `<li>${item}</li>`)
                                  .join("")}
                              </ul>
                            </div>
                          `
                          : ""
                      }

                      ${
                        match.section.steps &&
                        match.section.steps.length
                          ? `
                            <div class="floor-details">
                              <strong>How It Works:</strong>

                              <ol>
                                ${match.section.steps
                                  .map((step) => `<li>${step}</li>`)
                                  .join("")}
                              </ol>
                            </div>
                          `
                          : ""
                      }

                      ${
                        match.section.officesInside &&
                        match.section.officesInside.length
                          ? `
                            <div class="floor-details">
                              <strong>Also Located Here:</strong>

                              ${match.section.officesInside
                                .map(
                                  (office) => `
                                    <div class="inside-office">
                                      <strong>${office.name}</strong>
                                      <p>${office.description}</p>
                                    </div>
                                  `
                                )
                                .join("")}
                            </div>
                          `
                          : ""
                      }

                      ${
                        match.section.yearbook
                          ? `
                            <div class="yearbook-note">
                              <strong>📸 Yearbook</strong>
                              <p>${match.section.yearbook}</p>
                            </div>
                          `
                          : ""
                      }

                      ${
                        match.section.studentTip
                          ? `
                            <div class="student-tip">
                              <strong>🐝 Student Tip</strong>
                              <p>${match.section.studentTip}</p>
                            </div>
                          `
                          : ""
                      }

                    </div>
                  `
                )
                .join("")}

            </div>
          `
          : ""
      }

      ${
        location.printing
          ? `
            <div class="printing-info">
              <strong>🖨 Printing</strong>

              <p>
                ${
                  location.printing.free
                    ? "Free printing available."
                    : location.printing.note
                }
              </p>
            </div>
          `
          : ""
      }

      ${
        location.specialResources && location.specialResources.length
          ? location.specialResources
              .map(
                (resource) => `
                  <div class="special-resource">

                    <p class="special-resource-label">
                      STUDENT RESOURCE
                    </p>

                    <h4>${resource.name}</h4>

                    <p>${resource.description}</p>

                    <p>
                      <strong>Location:</strong>
                      ${resource.location}
                    </p>

                    <p>
                      <strong>Cost:</strong>
                      ${resource.cost}
                    </p>

                    <p>
                      <strong>How to access:</strong>
                      ${resource.access}
                    </p>

                    <div class="resource-provides">
                      <strong>Available Resources:</strong>

                      <ul>
                        ${resource.provides
                          .map((item) => `<li>${item}</li>`)
                          .join("")}
                      </ul>
                    </div>

                  </div>
                `
              )
              .join("")
          : ""
      }

      ${
        location.studentTip
          ? `
            <div class="student-tip">
              <strong>🐝 Student Tip</strong>
              <p>${location.studentTip}</p>
            </div>
          `
          : ""
      }

      ${
        location.funFact
          ? `
            <div class="fun-fact">
              <strong>💡 Did You Know?</strong>
              <p>${location.funFact}</p>
            </div>
          `
          : ""
      }

    </div>
  `;
}


function getSectionSearchText(section) {
  return [
    section.name || "",
    section.description || "",
    section.studentTip || "",
    section.yearbook || "",
    ...(section.keywords || []),
    ...(section.features || []),
    ...(section.locations || []),
    ...(section.steps || []),

    ...(section.officesInside || []).flatMap((office) => [
      office.name || "",
      office.description || ""
    ])
  ]
    .join(" ")
    .toLowerCase();
}


function findMatchingSections(location, searchTerm) {
  const matches = [];

  if (!location.floors) {
    return matches;
  }

  location.floors.forEach((floor) => {
    floor.sections.forEach((section) => {
      const sectionText = getSectionSearchText(section);

      if (sectionText.includes(searchTerm)) {
        matches.push({
          floorName: floor.name,
          floorNumber: floor.floor,
          section: section
        });
      }
    });
  });

  return matches;
}


function getLocationSearchText(location) {
  const specialResourceText = (location.specialResources || [])
    .map((resource) => [
      resource.name,
      resource.location,
      resource.type,
      resource.description,
      resource.access,
      resource.cost,
      ...(resource.provides || [])
    ].join(" "))
    .join(" ");

  const floorText = (location.floors || [])
    .flatMap((floor) =>
      floor.sections.map((section) => getSectionSearchText(section))
    )
    .join(" ");

  return [
    location.name,
    location.shortName || "",
    location.fullName || "",
    location.category || "",
    location.description || "",
    location.studentTip || "",
    location.funFact || "",
    location.building || "",
    location.room || "",
    location.printing?.note || "",
    specialResourceText,
    floorText,
    ...(location.keywords || []),
    ...(location.services || [])
  ]
    .join(" ")
    .toLowerCase();
}


function displayResults(results, searchTerm = "", message = "") {
  if (results.length === 0) {
    campusResults.innerHTML = "";

    searchMessage.innerHTML = `
      <p><strong>No campus locations found.</strong></p>
      <p>More locations will be added as Hornet Navigator grows.</p>
    `;

    document
      .getElementById("explore")
      .scrollIntoView({
        behavior: "smooth"
      });

    return;
  }

  campusResults.innerHTML = results
    .map((location) => {
      const matchedSections =
        searchTerm !== ""
          ? findMatchingSections(location, searchTerm)
          : [];

      return createLocationCard(
        location,
        matchedSections
      );
    })
    .join("");

  searchMessage.textContent = message;

  document
    .getElementById("campusResults")
    .scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
}


function searchCampus(searchValue = searchInput.value) {
  const searchTerm = searchValue
    .trim()
    .toLowerCase();

  if (searchTerm === "") {
    campusResults.innerHTML = "";

    searchMessage.textContent =
      "Type a campus location or service to search.";

    return;
  }

  const results = campusLocations.filter((location) => {
    const searchableText =
      getLocationSearchText(location);

    return searchableText.includes(searchTerm);
  });

  displayResults(
    results,
    searchTerm,
    `${results.length} result${results.length === 1 ? "" : "s"} found for "${searchValue}".`
  );
}


function filterByCategory(category) {
  const results = campusLocations.filter(
    (location) => location.category === category
  );

  displayResults(
    results,
    "",
    `${results.length} ${category} location${results.length === 1 ? "" : "s"} found.`
  );
}


searchButton.addEventListener("click", () => {
  searchCampus();
});


searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchCampus();
  }
});


exploreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category =
      button.dataset.category;

    filterByCategory(category);
  });
});


categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category =
      button.dataset.category;

    filterByCategory(category);
  });
});


resourceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const searchValue =
      button.dataset.search;

    searchInput.value =
      searchValue;

    searchCampus(searchValue);
  });
});


if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  const mobileLinks =
    mobileMenu.querySelectorAll("a");

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}