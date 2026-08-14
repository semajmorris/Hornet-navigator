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
    section.extraTip || "",
    section.yearbook || "",
    section.room || "",
    section.imageCaption || "",

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
      const sectionText = getSectionSearchText(section);

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
    location.imageCaption || "",
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
// HELPER: RENDER EXTRA TIP
// =====================================================

function renderExtraTip(tip) {
  if (!tip) {
    return "";
  }

  return `
    <div class="student-tip">
      <strong>⚠️ Extra Tip</strong>
      <p>${tip}</p>
    </div>
  `;
}


// =====================================================
// HELPER: RENDER IMAGE
// =====================================================

function renderImage(image, caption = "", altText = "Campus image") {
  if (!image) {
    return "";
  }

  return `
    <figure class="location-image-container">
      <img
        src="${image}"
        alt="${altText}"
        class="location-image"
        loading="lazy"
      >

      ${
        caption
          ? `<figcaption>${caption}</figcaption>`
          : ""
      }
    </figure>
  `;
}


// =====================================================
// HELPER: RENDER A STANDARD SECTION
// =====================================================

function renderSection(section) {
  if (!section) {
    return "";
  }

  return `
    <div class="floor-result">

      <h5>${section.name || ""}</h5>

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
          ? `<p>${section.description}</p>`
          : ""
      }

      ${
        section.image
          ? renderImage(
              section.image,
              section.imageCaption || "",
              section.name || "Campus image"
            )
          : ""
      }

      ${
        section.features
          ? renderFeatures(section.features)
          : ""
      }

      ${
        section.locations
          ? renderFeatures(section.locations)
          : ""
      }

      ${
        section.steps && section.steps.length
          ? `
            <div class="floor-details">
              <strong>How It Works:</strong>

              <ol>
                ${section.steps
                  .map((step) => `<li>${step}</li>`)
                  .join("")}
              </ol>
            </div>
          `
          : ""
      }

      ${
        section.officesInside &&
        section.officesInside.length
          ? `
            <div class="floor-details">

              <strong>Offices Inside:</strong>

              ${section.officesInside
                .map(
                  (office) => `
                    <div class="inside-office">
                      <strong>${office.name}</strong>

                      ${
                        office.description
                          ? `<p>${office.description}</p>`
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
        section.yearbook
          ? `
            <div class="yearbook-note">
              <strong>📸 Yearbook</strong>
              <p>${section.yearbook}</p>
            </div>
          `
          : ""
      }

      ${renderStudentTip(section.studentTip)}
      ${renderExtraTip(section.extraTip)}

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


      <!-- ============================================= -->
      <!-- MAIN LOCATION IMAGE -->
      <!-- ============================================= -->

      ${
        location.image
          ? renderImage(
              location.image,
              location.imageCaption || "",
              location.name || "Campus location"
            )
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

              ${renderFeatures(location.nearbyBuildings)}

            </div>
          `
          : ""
      }


      <!-- ============================================= -->
      <!-- MATCHED FLOOR SECTIONS -->
      <!-- ============================================= -->

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

                      ${renderSection(match.section)}

                    </div>
                  `
                )
                .join("")}

            </div>
          `
          : ""
      }


      <!-- ============================================= -->
      <!-- HELPFUL INFORMATION / TOP LEVEL SECTIONS -->
      <!-- ============================================= -->

      ${
        location.sections &&
        location.sections.length
          ? `
            <div class="location-sections">

              <h4>Helpful Information</h4>

              ${location.sections
                .map((section) =>
                  renderSection(section)
                )
                .join("")}

            </div>
          `
          : ""
      }


      <!-- ============================================= -->
      <!-- ACADEMIC SUPPORT -->
      <!-- ============================================= -->

      ${
        location.academicSupport &&
        location.academicSupport.length
          ? `
            <div class="location-sections">

              <h4>Academic Support</h4>

              ${location.academicSupport
                .map((section) =>
                  renderSection(section)
                )
                .join("")}

            </div>
          `
          : ""
      }


      <!-- ============================================= -->
      <!-- STUDENT RESOURCES -->
      <!-- ============================================= -->

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
                          ? `<p>${resource.description}</p>`
                          : ""
                      }

                      ${
                        resource.provides
                          ? renderFeatures(resource.provides)
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

              ${renderFeatures(location.specialSpaces)}

            </div>
          `
          : ""
      }


      ${
        location.represents &&
        location.represents.length
          ? `
            <div class="location-services">

              <strong>What It Represents:</strong>

              ${renderFeatures(location.represents)}

            </div>
          `
          : ""
      }


      <!-- ============================================= -->
      <!-- HISTORY -->
      <!-- ============================================= -->

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
                  ? `<p>${location.history.description}</p>`
                  : ""
              }

            </div>
          `
          : ""
      }


      <!-- ============================================= -->
      <!-- NEARBY LANDMARK -->
      <!-- ============================================= -->

      ${
        location.nearbyLandmark
          ? `
            <div class="landmark-area">

              <strong>📍 Nearby Landmark</strong>

              <p>
                ${location.nearbyLandmark.name || ""}
              </p>

              ${
                location.nearbyLandmark.description
                  ? `<p>${location.nearbyLandmark.description}</p>`
                  : ""
              }

            </div>
          `
          : ""
      }


      <!-- ============================================= -->
      <!-- PRINTING -->
      <!-- ============================================= -->

      ${
        location.printing
          ? `
            <div class="printing-info">

              <strong>🖨 Printing</strong>

              ${
                location.printing.free
                  ? `<p>Free printing available.</p>`
                  : ""
              }

              ${
                location.printing.note
                  ? `<p>${location.printing.note}</p>`
                  : ""
              }

            </div>
          `
          : ""
      }


      ${renderStudentTip(location.studentTip)}


      ${
        location.nameWarning
          ? `
            <div class="name-warning">

              <strong>⚠️ Important</strong>

              <p>${location.nameWarning}</p>

            </div>
          `
          : ""
      }


      ${
        location.campusLore
          ? `
            <div class="campus-lore">

              <strong>🐝 Campus Lore</strong>

              <p>${location.campusLore}</p>

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
        <strong>No campus locations found.</strong>
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

  searchMessage.textContent = message;

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

      return searchableText.includes(searchTerm);
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
        searchInput.value = searchValue;
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
      mobileMenu.classList.toggle("active");
    }
  );

  const mobileLinks =
    mobileMenu.querySelectorAll("a");

  mobileLinks.forEach((link) => {
    link.addEventListener(
      "click",
      () => {
        mobileMenu.classList.remove("active");
      }
    );
  });
}

// =====================================================
// INTERACTIVE CAMPUS MAP
// =====================================================

const mapFilterButtons =
  document.querySelectorAll(".map-filter");

const campusMapMarkersContainer =
  document.getElementById("campusMapMarkers");

const mapLocationName =
  document.getElementById("mapLocationName");

const mapLocationDescription =
  document.getElementById("mapLocationDescription");

const mapLocationActions =
  document.getElementById("mapLocationActions");

const mapLocationSelect =
  document.getElementById("mapLocationSelect");


// =====================================================
// NORMALIZE MAP CATEGORIES
// =====================================================

function normalizeMapCategory(category) {

  if (category === "student-services") {
    return "services";
  }

  return category || "other";
}


// =====================================================
// LOCATIONS THAT BELONG ON THE MAP
// =====================================================

const campusMapLocations =
  typeof campusLocations !== "undefined"
    ? campusLocations.filter((location) => {

        // Generic housing summary is not a building
        if (
          location.name === "Residential Halls"
        ) {
          return false;
        }


        // Offices inside another building
        // should not become separate map markers
        if (location.building) {
          return false;
        }


        return true;

      })
    : [];


// =====================================================
// MAP CATEGORY ICONS
// =====================================================

const mapCategoryIcons = {

  academic: "🎓",

  housing: "🛏️",

  dining: "🍽️",

  services: "🧭",

  athletics: "🏟️",

  parking: "🅿️",

  landmark: "📍",

  other: "🐝"

};


// =====================================================
// GOOGLE MAPS URL
// =====================================================

function createGoogleMapsUrl(location) {

  const destination =
    location.address
      ? `${location.name}, ${location.address}`
      : `${location.name}, Alabama State University, Montgomery, Alabama`;


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(destination)
  );

}


// =====================================================
// APPLE MAPS URL
// =====================================================

function createAppleMapsUrl(location) {

  const destination =
    location.address
      ? `${location.name}, ${location.address}`
      : `${location.name}, Alabama State University, Montgomery, Alabama`;


  return (
    "https://maps.apple.com/?q=" +
    encodeURIComponent(destination)
  );

}


// =====================================================
// POPULATE LOCATION DROPDOWN
// =====================================================

function populateMapLocationSelect() {

  if (!mapLocationSelect) {
    return;
  }


  const sortedLocations =
    [...campusMapLocations]
      .sort((a, b) =>
        a.name.localeCompare(b.name)
      );


  sortedLocations.forEach(
    (location) => {

      const option =
        document.createElement("option");


      option.value =
        String(location.id);


      option.textContent =
        location.shortName &&
        location.shortName !== location.name
          ? `${location.shortName} — ${location.name}`
          : location.name;


      mapLocationSelect.appendChild(
        option
      );

    }
  );

}


// =====================================================
// FIND MAP LOCATION BY ID
// =====================================================

function getMapLocationById(id) {

  return campusMapLocations.find(
    (location) =>
      String(location.id) === String(id)
  );

}


// =====================================================
// UPDATE INFORMATION PANEL
// =====================================================

function updateMapLocationPanel(location) {

  if (!location) {
    return;
  }


  if (mapLocationName) {

    mapLocationName.textContent =
      location.name;

  }


  if (mapLocationDescription) {

    mapLocationDescription.textContent =
      location.description ||
      "Campus location information.";

  }


  const googleMapsUrl =
    createGoogleMapsUrl(location);

  const appleMapsUrl =
    createAppleMapsUrl(location);


  if (mapLocationActions) {

    mapLocationActions.innerHTML = `

      <a
        href="${googleMapsUrl}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open ${location.name} in Google Maps"
      >
        Google Maps
      </a>


      <a
        href="${appleMapsUrl}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open ${location.name} in Apple Maps"
      >
        Apple Maps
      </a>


      <button
        type="button"
        class="map-details-button"
        data-location-id="${location.id}"
      >
        View Full Details
      </button>

    `;


    const detailsButton =
      mapLocationActions.querySelector(
        ".map-details-button"
      );


    if (detailsButton) {

      detailsButton.addEventListener(
        "click",
        () => {

          if (searchInput) {

            searchInput.value =
              location.name;

          }


          searchCampus(
            location.name
          );

        }
      );

    }

  }


  if (mapLocationSelect) {

    mapLocationSelect.value =
      String(location.id);

  }

}


// =====================================================
// SELECT ONE MARKER
// =====================================================

function selectMapMarker(locationId) {

  const markers =
    document.querySelectorAll(
      ".campus-map-marker"
    );


  markers.forEach((marker) => {

    marker.classList.toggle(
      "selected",
      marker.dataset.locationId ===
        String(locationId)
    );

  });

}

// =====================================================
// POSITION MAP MARKERS USING CAMPUS MAP DATA
// =====================================================

function positionVisibleMarkers(markers) {

  const visibleMarkers =
    [...markers].filter(
      (marker) =>
        !marker.classList.contains("hidden")
    );


  if (!visibleMarkers.length) {
    return;
  }


  // ===================================================
  // LOCATIONS WITHOUT A CUSTOM MAP POSITION
  // ===================================================

  const fallbackMarkers = [];


  visibleMarkers.forEach((marker) => {

    const locationId =
      marker.dataset.locationId;


    const position =
      typeof campusMapPositions !== "undefined"
        ? campusMapPositions[locationId]
        : null;


    // =================================================
    // USE CUSTOM CAMPUS POSITION
    // =================================================

    if (
      position &&
      typeof position.x === "number" &&
      typeof position.y === "number"
    ) {

      marker.style.left =
        `${position.x}%`;

      marker.style.top =
        `${position.y}%`;

    } else {

      fallbackMarkers.push(
        marker
      );

    }

  });


  // ===================================================
  // IF EVERY VISIBLE LOCATION HAS A POSITION,
  // WE ARE DONE
  // ===================================================

  if (!fallbackMarkers.length) {
    return;
  }


  // ===================================================
  // FALLBACK GRID
  //
  // Any future location without map coordinates
  // still appears instead of disappearing.
  // ===================================================

  const columns =
    Math.ceil(
      Math.sqrt(
        fallbackMarkers.length
      )
    );


  const rows =
    Math.ceil(
      fallbackMarkers.length /
      columns
    );


  fallbackMarkers.forEach(
    (marker, index) => {

      const column =
        index % columns;


      const row =
        Math.floor(
          index / columns
        );


      const x =
        columns === 1
          ? 50
          : 12 +
            column *
            (76 / (columns - 1));


      const y =
        rows === 1
          ? 50
          : 15 +
            row *
            (70 / (rows - 1));


      marker.style.left =
        `${x}%`;


      marker.style.top =
        `${y}%`;

    }
  );

}



// =====================================================
// CREATE ALL CAMPUS MAP MARKERS
// =====================================================

function renderCampusMapMarkers(
  selectedCategory = "all"
) {

  if (!campusMapMarkersContainer) {
    return;
  }


  campusMapMarkersContainer.innerHTML =
    "";


  const sortedLocations =
    [...campusMapLocations]
      .sort((a, b) => {

        const categoryA =
          normalizeMapCategory(
            a.category
          );


        const categoryB =
          normalizeMapCategory(
            b.category
          );


        const categoryCompare =
          categoryA.localeCompare(
            categoryB
          );


        if (categoryCompare !== 0) {
          return categoryCompare;
        }


        return a.name.localeCompare(
          b.name
        );

      });


  sortedLocations.forEach(
    (location) => {

      const category =
        normalizeMapCategory(
          location.category
        );


      const marker =
        document.createElement(
          "button"
        );


      marker.type =
        "button";


      marker.className =
        "campus-map-marker";


      marker.dataset.locationId =
        String(location.id);


      marker.dataset.category =
        category;


      marker.title =
        location.name;


      marker.setAttribute(
        "aria-label",
        location.name
      );


      marker.textContent =
        mapCategoryIcons[category] ||
        mapCategoryIcons.other;


      if (
        selectedCategory !== "all" &&
        category !== selectedCategory
      ) {

        marker.classList.add(
          "hidden"
        );

      }


      marker.addEventListener(
        "click",
        () => {

          selectMapMarker(
            location.id
          );


          updateMapLocationPanel(
            location
          );

        }
      );


      campusMapMarkersContainer
        .appendChild(marker);

    }
  );


  const markers =
    campusMapMarkersContainer
      .querySelectorAll(
        ".campus-map-marker"
      );


  positionVisibleMarkers(
    markers
  );

}


// =====================================================
// CATEGORY FILTER BUTTONS
// =====================================================

mapFilterButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        const selectedCategory =
          button.dataset.mapCategory ||
          "all";


        mapFilterButtons.forEach(
          (filterButton) => {

            filterButton.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );


        if (mapLocationSelect) {

          mapLocationSelect.value =
            "";

        }


        renderCampusMapMarkers(
          selectedCategory
        );

      }
    );

  }
);


// =====================================================
// LOCATION DROPDOWN
// =====================================================

if (mapLocationSelect) {

  mapLocationSelect.addEventListener(
    "change",
    () => {

      const location =
        getMapLocationById(
          mapLocationSelect.value
        );


      if (!location) {
        return;
      }


      const category =
        normalizeMapCategory(
          location.category
        );


      mapFilterButtons.forEach(
        (button) => {

          button.classList.toggle(
            "active",
            button.dataset.mapCategory ===
              category
          );

        }
      );


      renderCampusMapMarkers(
        category
      );


      selectMapMarker(
        location.id
      );


      updateMapLocationPanel(
        location
      );

    }
  );

}


// =====================================================
// INITIALIZE INTERACTIVE MAP
// =====================================================

populateMapLocationSelect();

const isMobileMap =
  window.matchMedia("(max-width: 600px)").matches;

if (isMobileMap) {

  // Keep the phone map clean on first load.
  // Students can choose a category or a location.
  renderCampusMapMarkers("__none__");

} else {

  // Desktop shows the full campus overview.
  renderCampusMapMarkers("all");

}