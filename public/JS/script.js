
// create buttons for the navbar on each web page
function createButtons(){
  var divLeft = document.createElement("div")
  divLeft.classList = "nav-item active"

  labels = ["Home", "Blog", "Projects", "About", "Contact"]
  category = ["home", "blog", "projects", "about", "contact"]
  for (var i=0; i<5; i++){
    var button = document.createElement("button")
    button.textContent = labels[i]
    button.id = category[i]
    button.classList = "buttons"
    divLeft.appendChild(button)
  }
  document.getElementById("body").appendChild(divLeft);
}

// for each click event, direct user to the specified web page
function clickHome(){
  window.location.href = "/";
}

function clickBlog(){
  window.location.href = "/blog";
}

function clickProjects(){
  window.location.href = "/projects";
}

function clickAbout(){
  window.location.href = "/about";
}

function clickContact(){
  window.location.href = "/contact";
}


// add click listeners for each button
function listener(){
  document.getElementById("home").addEventListener('click', clickHome)
  document.getElementById("blog").addEventListener('click', clickBlog)
  document.getElementById("projects").addEventListener('click', clickProjects)
  document.getElementById("about").addEventListener('click', clickAbout)
  document.getElementById("contact").addEventListener('click', clickContact)
}

createButtons()
listener()



