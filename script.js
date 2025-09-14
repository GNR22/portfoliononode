function toggleEdit(button) {
  // Put all 4 sections into an array
  let sections = [
    document.getElementById("about"),
    document.getElementById("projects"),
    document.getElementById("skills"),
    document.getElementById("contact")
  ];

  // Check first section to see if currently editable
  let isEditable = sections[0].contentEditable === "true";

  // Loop through each section and toggle edit mode
  sections.forEach(section => {
    section.contentEditable = isEditable ? "false" : "true";
  });

  // Update button text
  button.innerText = isEditable ? "Edit Sections" : "Done Editing";
}

function toggleMode() {
  document.body.classList.toggle("light-mode");

  const button = document.getElementById("dark-mode");
  if (document.body.classList.contains("light-mode")) {
    button.textContent = "Switch to Dark Mode";
  } else {
    button.textContent = "Switch to Light Mode";
  }
}

