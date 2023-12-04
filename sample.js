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

 //image click

 
  // function enlargeImage(element) {
  //   // Remove 'enlarged' class from all media elements
  //   const mediaElements = document.querySelectorAll('.media-element');
  //   mediaElements.forEach(el => el.classList.remove('enlarged'));

  //   // Add 'enlarged' class to the clicked element
  //   element.classList.add('enlarged');
  // }

  // // Close the enlarged image when clicking outside
  // document.addEventListener('click', (event) => {
  //   const clickedElement = event.target.closest('.media-element');
  //   if (!clickedElement) {
  //     const mediaElements = document.querySelectorAll('.media-element');
  //     mediaElements.forEach(el => el.classList.remove('enlarged'));
  //   }
  // });


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






