
function loadContent(url) {
    var container = document.getElementById('content-container');
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          container.innerHTML = xhr.responseText;
        } else {
          console.error('Failed to load content. Status:', xhr.status);
          console.error('Response Text:', xhr.responseText);
        }
      }
    };

    xhr.open('GET', url, true);
    xhr.send();
  }




//popup


function openPopup(imageSrc) {
  var popup = document.getElementById("popup");
  var popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}


//Dashboard


document.getElementById('toggleSidebar').addEventListener('click', function() {
  var sidebar = document.querySelector('.sidebar');

  //for right side content expansion when sidebar shrink
  var content = document.querySelector('.section-2');

  // Toggle the collapsed class on the sidebar
  sidebar.classList.toggle('collapsed');


 //for right side content expansion when sidebar shrink..class added by js
  content.classList.toggle('expanded');

  // Rotate the arrow icon based on the state
  if (sidebar.classList.contains('collapsed')) {
      arrowIcon.style.transform = 'rotate(180deg)';
  } else {
      arrowIcon.style.transform = 'rotate(0deg)';
  }
});










