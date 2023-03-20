const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('.header');
const mainContent = document.querySelector('.main-content');
const container = document.querySelector('.container');

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 450px)')

function handleTabletChange(e) {

  // Check if the media query is true
  if (e.matches) {
    sidebar.style.display = "none";

    // Then log the following message to the console
    console.log('Media Query Matched!')

    document.getElementById("dashboard").onclick = () => {

      sidebar.style.display = "inherit";



      mainContent.style.display = "none";
      header.style.display = "none";
      container.style.height = "100vh";

    }

    document.getElementById("close").onclick = () => {
       sidebar.style.display = "none";
    
    
    
        mainContent.style.display = "inherit";
        header.style.display = "inherit";
        container.style.height = "none";
    }
  };      
}

const mediaQuery2 = window.matchMedia('(min-width: 451px)')

function handleTabletChange2(e) {
      if (e.matches) {
        sidebar.style.display = "inherit";

        mainContent.style.display = "inherit";
        header.style.display = "inherit";
        container.style.height = "none";
      }
}



  // Register event listener
mediaQuery.addListener(handleTabletChange)
mediaQuery2.addListener(handleTabletChange2)



// Initial check
handleTabletChange(mediaQuery)
handleTabletChange2(mediaQuery2)


