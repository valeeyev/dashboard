const dynamicContent = document.getElementById("dynamicContent");

// Set default content for the "home" section
const defaultContent = `
      <div class="title"><h1>Default</h1></div>
      <div class="content">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, modi quibusdam eveniet consectetur maiores commodi laboriosam ad tenetur id debitis!
        </p>
      </div>
    `;

dynamicContent.innerHTML = defaultContent;

// Event listener for the "home" button
const homeButton = document.getElementById("home");
homeButton.addEventListener("click", function () {
  // Example content, replace this with your actual content
  const content = `
        <div class="title"><h1>Home</h1></div>
        <div class="content">
          <p>
            contents of home section
          </p>
        </div>
      `;

  // Set the innerHTML of dynamicContent to the new content
  dynamicContent.innerHTML = content;
});
const questionButton = document.getElementById("question");
questionButton.addEventListener("click", function () {
  // Example content, replace this with your actual content
  const content = `
        <div class="title"><h1>Question</h1></div>
        <div class="content">
          <p>
            Question section content goes here.
          </p>
        </div>
      `;

  // Set the innerHTML of dynamicContent to the new content
  dynamicContent.innerHTML = content;
});
const studentButton = document.getElementById("student");
studentButton.addEventListener("click", function () {
  // Example content, replace this with your actual content
  const student = `
        <div class="title"><h1>Student</h1></div>
        <div class="content">
          <p>
            Student section content goes here.
          </p>
        </div>
      `;

  // Set the innerHTML of dynamicContent to the new content
  dynamicContent.innerHTML = student;
});

const resultButton = document.getElementById("result");
resultButton.addEventListener("click", function () {
  // Example content, replace this with your actual content
  const result = `
        <div class="title"><h1>Result</h1></div>
        <div class="content">
          <p>
            Result section content goes here.
          </p>
        </div>
      `;

  // Set the innerHTML of dynamicContent to the new content
  dynamicContent.innerHTML = result;
});
const addButton = document.getElementById("add");
addButton.addEventListener("click", function () {
  // Example content, replace this with your actual content
  const add = `
        <div class="title"><h1>Add</h1></div>
        <div class="content">
          <p>
            Add section content goes here.
          </p>
        </div>
      `;

  // Set the innerHTML of dynamicContent to the new content
  dynamicContent.innerHTML = add;
});
