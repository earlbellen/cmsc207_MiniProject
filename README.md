# CMSC 207 Mini-Project: Personal Web Profile

This repository contains my single-page personal website for the CMSC 207 mini-project. The site features a header, about section with a profile photo, hobbies with images, and a contact section. It uses semantic HTML, an external stylesheet for layout and typography, and a small JavaScript interaction that shows a fun fact on button click. The design follows a neutral, professional color palette and includes responsive behavior for smaller screens.

## Challenges I Encountered
- **Consistent image sizing:** My hobby photos had different dimensions, which made the grid look uneven. I fixed this by creating a shared `.hobby-image` class with a fixed height and `object-fit: cover` to keep the layout consistent without distorting the photos.
  ```css
  .hobby-image {
    width: 100%;
    height: 240px;
    object-fit: cover;
    object-position: center 20%;
  }
  ```
- **Photo placement and cropping:** Some images cut off important parts of the subject. I adjusted `object-position` to shift the focal point higher so faces and upper body details stayed visible.
- **Balancing spacing and alignment:** The header, hero image, and hobby cards felt misaligned on smaller screens. I refined the grid settings and added a media query to stack elements cleanly and preserve readable spacing.
  ```css
  @media (max-width: 720px) {
    .site-header .container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  ```

## What I Learned
- How small CSS decisions (like `object-fit`, `object-position`, and spacing) can dramatically improve a layout without changing the HTML structure.
- How to organize a single-page layout using semantic sections and reusable classes to keep the code clean.
- How a small JavaScript function can add quick interactivity without cluttering the page.
  ```js
  button.addEventListener("click", () => {
    const pick = facts[Math.floor(Math.random() * facts.length)];
    output.textContent = pick;
  });
  ```
- How to pair a consistent color system with typography choices to create a professional and cohesive visual style.
