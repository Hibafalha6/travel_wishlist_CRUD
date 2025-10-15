let destinations = JSON.parse(localStorage.getItem("destinations")) || [];

function displayCards() {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";
  destinations.forEach((d, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="${d.image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800'}" alt="${d.place}">
        <div class="card-content">
          <h3>${d.place}</h3>
          <p>${d.desc}</p>
          <span class="priority ${d.priority.toLowerCase().split(' ')[0]}">${d.priority}</span>
          <div>
            <button class="action-btn edit" onclick="editDestination(${index})">Edit</button>
            <button class="action-btn delete" onclick="deleteDestination(${index})">Delete</button>
          </div>
        </div>
      </div>
    `;
  });
}

function addDestination() {
  const place = document.getElementById("place").value;
  const image = document.getElementById("image").value;
  const desc = document.getElementById("desc").value;
  const priority = document.getElementById("priority").value;

  if (place && desc) {
    destinations.push({ place, image, desc, priority });
    localStorage.setItem("destinations", JSON.stringify(destinations));
    displayCards();
    document.getElementById("place").value = "";
    document.getElementById("image").value = "";
    document.getElementById("desc").value = "";
  } else {
    alert("Please fill all fields!");
  }
}

function deleteDestination(index) {
  destinations.splice(index, 1);
  localStorage.setItem("destinations", JSON.stringify(destinations));
  displayCards();
}

function editDestination(index) {
  const d = destinations[index];
  document.getElementById("place").value = d.place;
  document.getElementById("image").value = d.image;
  document.getElementById("desc").value = d.desc;
  document.getElementById("priority").value = d.priority;
  deleteDestination(index);
}

displayCards();
