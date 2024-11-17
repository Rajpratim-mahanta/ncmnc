document.addEventListener("DOMContentLoaded", () => {
    const filterLinks = document.querySelectorAll(".filter-link");
    const memberItems = document.querySelectorAll(".member-item");
  
    // Set 'Organizing Committee' as the active filter by default and show only 'executive' members initially
    const defaultClass = "national";
    document.querySelector(`.filter-link[data-class="${defaultClass}"]`).classList.add("active");
    
    // Show only members with the 'executive' class initially
    memberItems.forEach(item => {
      if (item.dataset.class === defaultClass) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  
    // Add click event to filter links
    filterLinks.forEach(link => {
      link.addEventListener("click", () => {
        // Remove active class from all links
        filterLinks.forEach(link => link.classList.remove("active"));
        // Add active class to clicked link
        link.classList.add("active");
  
        const filterClass = link.dataset.class;
  
        // Show only members that match the selected filter
        memberItems.forEach(item => {
          if (item.dataset.class === filterClass) {
            item.classList.add("show");
          } else {
            item.classList.remove("show");
          }
        });
      });
    });
  });
  