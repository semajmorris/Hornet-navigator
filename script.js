console.log("Hornet Navigator script loaded");


// =====================================================
// PAGE ELEMENTS
// =====================================================

const searchInput = document.getElementById("campusSearch");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");
const campusResults = document.getElementById("campusResults");

const exploreButtons =
  document.querySelectorAll(".explore-category");

const categoryButtons =
  document.querySelectorAll(".category-button");

const resourceButtons =
  document.querySelectorAll(".resource-search");

const mobileMenuButton =
  document.getElementById("mobileMenuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


// =====================================================
// HELPER: SECTION SEARCH TEXT
// =====================================================

function getSectionSearchText(section) {
  if (!section) return "";

  return [
    section.name || "",
    section.description || "",
    section.studentTip || "",
    section.yearbook || "",
    section.room || "",

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


// =====================================================
// HELPER: FIND MATCHING FLOOR SECTIONS
// =====================================================

function findMatchingFloorSections(location, searchTerm) {
  const matches = [];

  if (!location.floors) {
    return matches;
  }

  location.floors.forEach((floor) => {
    (floor.sections || []).forEach((section) => {
      const sectionText =
        getSectionSearchText(section);

      if (sectionText.includes(searchTerm)) {
        matches.push({
          floorName: floor.name,
          section: section
        });
      }
    });
  });

  return matches;
}


// =====================================================
// HELPER: FIND MATCHING TOP-LEVEL SECTIONS
// COBA / H.C. TRENHOLM
// =====================================================

function findMatchingTopSections(location, searchTerm) {
  if (!location.sections) {
    return [];
  }

  return location.sections.filter((section) =>
    getSectionSearchText(section).includes(searchTerm)
  );
}


// =====================================================
// HELPER: COMPLETE SEARCH TEXT
// =====================================================

function getLocationSearchText(location) {
  const floorText = (location.floors || [])
    .flatMap((floor) =>
      (floor.sections || []).map((section) =>
        getSectionSearchText(section)
      )
    )
    .join(" ");

  const sectionText = (location.sections || [])
    .map((section) =>
      getSectionSearchText(section)
    )
    .join(" ");

  const academicSupportText =
    (location.academicSupport || [])
      .map((section) =>
        getSectionSearchText(section)
      )
      .join(" ");

  const specialResourceText =
    (location.specialResources || [])
      .map((resource) =>
        [
          resource.name || "",
          resource.location || "",
          resource.type || "",
          resource.description || "",
          resource.access || "",
          resource.cost || "",
          ...(resource.provides || [])
        ].join(" ")
      )
      .join(" ");

  const landmarkText =
    location.landmarkArea
      ? [
          location.landmarkArea.name || "",
          location.landmarkArea.description || ""
        ].join(" ")
      : "";

  const nearbyLandmarkText =
    location.nearbyLandmark
      ? [
          location.nearbyLandmark.name || "",
          location.nearbyLandmark.description || ""
        ].join(" ")
      : "";

  const historyText =
    location.history
      ? [
          location.history.year || "",
          location.history.artist || "",
          location.history.description || ""
        ].join(" ")
      : "";

  return [
    location.name || "",
    location.shortName || "",
    location.fullName || "",
    location.category || "",
    location.description || "",
    location.studentTip || "",
    location.funFact || "",
    location.campusLore || "",
    location.nameWarning || "",
    location.building || "",
    location.room || "",
    location.address || "",
    location.printing?.note || "",

    ...(location.keywords || []),
    ...(location.services || []),
    ...(location.specialSpaces || []),
    ...(location.nearbyBuildings || []),
    ...(location.represents || []),

    floorText,
    sectionText,
    academicSupportText,
    specialResourceText,
    landmarkText,
    nearbyLandmarkText,
    historyText
  ]
    .join(" ")
    .toLowerCase();
}


// =====================================================
// HELPER: RENDER FEATURES
// =====================================================

function renderFeatures(items) {
  if (!items || !items.length) {
    return "";
  }

  return `
    <ul>
      ${items
        .map((item) => `<li>${item}</li>`)
        .join("")}
    </ul>
  `;
}


// =====================================================
// HELPER: RENDER STUDENT TIP
// =====================================================

function renderStudentTip(tip) {
  if (!tip) {
    return "";
  }

  return `
    <div class="student-tip">
      <strong>🐝 Student Tip</strong>
      <p>${tip}</p>
    </div>
  `;
}


// =====================================================
// CREATE LOCATION CARD
// =====================================================

function createLocationCard(
  location,
  matchedFloorSections = [],
  matchedTopSections = []
) {
  return `
    <div class="search-result-card">

      <p class="search-result-category">
        ${(location.category || "").toUpperCase()}
      </p>

      <h3>${location.name}</h3>

      ${
        location.shortName &&
        location.shortName !== location.name
          ? `
            <p>
              <strong>Also known as:</strong>
              ${location.shortName}
            </p>
          `
          : ""
      }

      ${
        location.description
          ? `<p>${location.description}</p>`
          : ""
      }


      ${
        location.building
          ? `
            <p>
              <strong>Building:</strong>
              ${location.building}
            </p>
          `
          : ""
      }

      ${
        location.room
          ? `
            <p>
              <strong>Room:</strong>
              ${location.room}
            </p>
          `
          : ""
      }

      ${
        location.address
          ? `
            <p>
              <strong>Location:</strong>
              ${location.address}
            </p>
          `
          : ""
      }


      ${
        location.services &&
        location.services.length
          ? `
            <div class="location-services">

              <strong>Main Services:</strong>

              ${renderFeatures(location.services)}

            </div>
          `
          : ""
      }


      ${
        location.landmarkArea
          ? `
            <div class="landmark-area">

              <strong>📍 Area</strong>

              <p>
                ${location.landmarkArea.name || ""}
              </p>

              ${
                location.landmarkArea.description
                  ? `
                    <p>
                      ${location.landmarkArea.description}
                    </p>
                  `
                  : ""
              }

            </div>
          `
          : ""
      }


      ${
        location.nearbyBuildings &&
        location.nearbyBuildings.length
          ? `
            <div class="nearby-buildings">

              <strong>Nearby Buildings:</strong>

              ${renderFeatures(
                location.nearbyBuildings
              )}

            </div>
          `
          : ""
      }


      ${
        matchedFloorSections.length
          ? `
            <div class="matched-sections">

              <h4>Relevant Locations Inside</h4>

              ${matchedFloorSections
                .map(
                  (match) => `
                    <div class="floor-result">

                      ${
                        match.floorName
                          ? `
                            <p class="floor-label">
                              ${match.floorName}
                            </p>
                          `
                          : ""
                      }

                      <h5>
                        ${match.section.name}
                      </h5>

                      ${
                        match.section.room
                          ? `
                            <p>
                              <strong>Room:</strong>
                              ${match.section.room}
                            </p>
                          `
                          : ""
                      }

                      ${
                        match.section.description
                          ? `
                            <p>
                              ${match.section.description}
                            </p>
                          `
                          : ""
                      }

                      ${
                        match.section.locations
                          ? renderFeatures(
                              match.section.locations
                            )
                          : ""
                      }

                      ${
                        match.section.features
                          ? renderFeatures(
                              match.section.features
                            )
                          : ""
                      }

                      ${
                        match.section.steps &&
                        match.section.steps.length
                          ? `
                            <div class="floor-details">

                              <strong>
                                How It Works:
                              </strong>

                              <ol>
                                ${match.section.steps
                                  .map(
                                    (step) =>
                                      `<li>${step}</li>`
                                  )
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

                              <strong>
                                Offices Inside:
                              </strong>

                              ${match.section.officesInside
                                .map(
                                  (office) => `
                                    <div class="inside-office">

                                      <strong>
                                        ${office.name}
                                      </strong>

                                      ${
                                        office.description
                                          ? `
                                            <p>
                                              ${office.description}
                                            </p>
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
                        match.section.yearbook
                          ? `
                            <div class="yearbook-note">

                              <strong>
                                📸 Yearbook
                              </strong>

                              <p>
                                ${match.section.yearbook}
                              </p>

                            </div>
                          `
                          : ""
                      }

                      ${renderStudentTip(
                        match.section.studentTip
                      )}

                    </div>
                  `
                )
                .join("")}

            </div>
          `
          : ""
      }


      ${
        location.sections &&
        location.sections.length
          ? `
            <div class="location-sections">

              <h4>Helpful Information</h4>

              ${location.sections
                .map(
                  (section) => `
                    <div class="floor-result">

                      <h5>${section.name}</h5>

                      ${
                        section.room
                          ? `
                            <p>
                              <strong>Room:</strong>
                              ${section.room}
                            </p>
                          `
                          : ""
                      }

                      ${
                        section.description
                          ? `
                            <p>
                              ${section.description}
                            </p>
                          `
                          : ""
                      }

                      ${
                        section.features
                          ? renderFeatures(
                              section.features
                            )
                          : ""
                      }

                      ${renderStudentTip(
                        section.studentTip
                      )}

                    </div>
                  `
                )
                .join("")}

            </div>
          `
          : ""
      }


      ${
        location.academicSupport &&
        location.academicSupport.length
          ? `
            <div class="location-sections">

              <h4>Academic Support</h4>

              ${location.academicSupport
                .map(
                  (section) => `
                    <div class="floor-result">

                      <h5>${section.name}</h5>

                      ${
                        section.description
                          ? `
                            <p>
                              ${section.description}
                            </p>
                          `
                          : ""
                      }

                      ${renderStudentTip(
                        section.studentTip
                      )}

                    </div>
                  `
                )
                .join("")}

            </div>
          `
          : ""
      }


      ${
        location.specialResources &&
        location.specialResources.length
          ? `
            <div class="location-sections">

              <h4>Student Resources</h4>

              ${location.specialResources
                .map(
                  (resource) => `
                    <div class="special-resource">

                      <h5>${resource.name}</h5>

                      ${
                        resource.location
                          ? `
                            <p>
                              <strong>Location:</strong>
                              ${resource.location}
                            </p>
                          `
                          : ""
                      }

                      ${
                        resource.description
                          ? `
                            <p>
                              ${resource.description}
                            </p>
                          `
                          : ""
                      }

                      ${
                        resource.provides
                          ? renderFeatures(
                              resource.provides
                            )
                          : ""
                      }

                      ${
                        resource.access
                          ? `
                            <p>
                              <strong>How to access:</strong>
                              ${resource.access}
                            </p>
                          `
                          : ""
                      }

                      ${
                        resource.cost
                          ? `
                            <p>
                              <strong>Cost:</strong>
                              ${resource.cost}
                            </p>
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
        location.specialSpaces &&
        location.specialSpaces.length
          ? `
            <div class="location-services">

              <strong>Special Spaces:</strong>

              ${renderFeatures(
                location.specialSpaces
              )}

            </div>
          `
          : ""
      }


      ${
        location.represents &&
        location.represents.length
          ? `
            <div class="location-services">

              <strong>
                What It Represents:
              </strong>

              ${renderFeatures(
                location.represents
              )}

            </div>
          `
          : ""
      }


      ${
        location.history
          ? `
            <div class="location-history">

              <strong>📚 History</strong>

              ${
                location.history.year
                  ? `
                    <p>
                      <strong>Year:</strong>
                      ${location.history.year}
                    </p>
                  `
                  : ""
              }

              ${
                location.history.artist
                  ? `
                    <p>
                      <strong>Artist:</strong>
                      ${location.history.artist}
                    </p>
                  `
                  : ""
              }

              ${
                location.history.description
                  ? `
                    <p>
                      ${location.history.description}
                    </p>
                  `
                  : ""
              }

            </div>
          `
          : ""
      }


      ${
        location.nearbyLandmark
          ? `
            <div class="landmark-area">

              <strong>
                📍 Nearby Landmark
              </strong>

              <p>
                ${location.nearbyLandmark.name || ""}
              </p>

              ${
                location.nearbyLandmark.description
                  ? `
                    <p>
                      ${location.nearbyLandmark.description}
                    </p>
                  `
                  : ""
              }

            </div>
          `
          : ""
      }


      ${
        location.printing
          ? `
            <div class="printing-info">

              <strong>🖨 Printing</strong>

              ${
                location.printing.free
                  ? `
                    <p>
                      Free printing available.
                    </p>
                  `
                  : ""
              }

              ${
                location.printing.note
                  ? `
                    <p>
                      ${location.printing.note}
                    </p>
                  `
                  : ""
              }

            </div>
          `
          : ""
      }


      ${renderStudentTip(
        location.studentTip
      )}


      ${
        location.nameWarning
          ? `
            <div class="name-warning">

              <strong>
                ⚠️ Important
              </strong>

              <p>
                ${location.nameWarning}
              </p>

            </div>
          `
          : ""
      }


      ${
        location.campusLore
          ? `
            <div class="campus-lore">

              <strong>
                🐝 Campus Lore
              </strong>

              <p>
                ${location.campusLore}
              </p>

            </div>
          `
          : ""
      }


      ${
        location.funFact
          ? `
            <div class="fun-fact">

              <strong>
                💡 Did You Know?
              </strong>

              <p>
                ${location.funFact}
              </p>

            </div>
          `
          : ""
      }

    </div>
  `;
}


// =====================================================
// DISPLAY RESULTS
// =====================================================

function displayResults(
  results,
  searchTerm = "",
  message = ""
) {
  if (!campusResults || !searchMessage) {
    return;
  }

  if (results.length === 0) {
    campusResults.innerHTML = "";

    searchMessage.innerHTML = `
      <p>
        <strong>
          No campus locations found.
        </strong>
      </p>

      <p>
        More locations will be added as
        Hornet Navigator grows.
      </p>
    `;

    const exploreSection =
      document.getElementById("explore");

    if (exploreSection) {
      exploreSection.scrollIntoView({
        behavior: "smooth"
      });
    }

    return;
  }

  campusResults.innerHTML =
    results
      .map((location) => {
        const matchedFloorSections =
          searchTerm
            ? findMatchingFloorSections(
                location,
                searchTerm
              )
            : [];

        const matchedTopSections =
          searchTerm
            ? findMatchingTopSections(
                location,
                searchTerm
              )
            : [];

        return createLocationCard(
          location,
          matchedFloorSections,
          matchedTopSections
        );
      })
      .join("");

  searchMessage.textContent =
    message;

  campusResults.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


// =====================================================
// SEARCH CAMPUS
// =====================================================

function searchCampus(
  searchValue = searchInput?.value || ""
) {
  const searchTerm =
    searchValue
      .trim()
      .toLowerCase();

  if (searchTerm === "") {
    if (campusResults) {
      campusResults.innerHTML = "";
    }

    if (searchMessage) {
      searchMessage.textContent =
        "Type a campus location or service to search.";
    }

    return;
  }

  const results =
    campusLocations.filter((location) => {
      const searchableText =
        getLocationSearchText(location);

      return searchableText.includes(
        searchTerm
      );
    });

  displayResults(
    results,
    searchTerm,
    `${results.length} result${
      results.length === 1 ? "" : "s"
    } found for "${searchValue}".`
  );
}


// =====================================================
// FILTER BY CATEGORY
// =====================================================

function filterByCategory(category) {
  const results =
    campusLocations.filter(
      (location) =>
        location.category === category
    );

  displayResults(
    results,
    "",
    `${results.length} ${category} location${
      results.length === 1 ? "" : "s"
    } found.`
  );
}


// =====================================================
// SEARCH BUTTON
// =====================================================

if (searchButton) {
  searchButton.addEventListener(
    "click",
    () => {
      searchCampus();
    }
  );
}


// =====================================================
// ENTER KEY SEARCH
// =====================================================

if (searchInput) {
  searchInput.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Enter") {
        searchCampus();
      }
    }
  );
}


// =====================================================
// EXPLORE CATEGORY CARDS
// =====================================================

exploreButtons.forEach((button) => {
  button.addEventListener(
    "click",
    () => {
      const category =
        button.dataset.category;

      if (category) {
        filterByCategory(category);
      }
    }
  );
});


// =====================================================
// HERO CATEGORY BUTTONS
// =====================================================

categoryButtons.forEach((button) => {
  button.addEventListener(
    "click",
    () => {
      const category =
        button.dataset.category;

      if (category) {
        filterByCategory(category);
      }
    }
  );
});


// =====================================================
// RESOURCE SEARCH BUTTONS
// =====================================================

resourceButtons.forEach((button) => {
  button.addEventListener(
    "click",
    () => {
      const searchValue =
        button.dataset.search;

      if (!searchValue) {
        return;
      }

      if (searchInput) {
        searchInput.value =
          searchValue;
      }

      searchCampus(searchValue);
    }
  );
});


// =====================================================
// MOBILE MENU
// =====================================================

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener(
    "click",
    () => {
      mobileMenu.classList.toggle(
        "active"
      );
    }
  );

  const mobileLinks =
    mobileMenu.querySelectorAll("a");

  mobileLinks.forEach((link) => {
    link.addEventListener(
      "click",
      () => {
        mobileMenu.classList.remove(
          "active"
        );
      }
    );
  });
}