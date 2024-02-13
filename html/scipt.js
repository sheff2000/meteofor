window.onclick = function(event) {
    if (!event.target.matches('.language-selector button')) {
      var dropdowns = document.getElementsByClassName("language-selector")[0].getElementsByTagName("ul");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
  }