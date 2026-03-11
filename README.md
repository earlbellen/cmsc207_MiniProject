# CMSC 207 Mini-Project: Personal Web Profile

Author: Daven Earl Bellen

This repository contains my single-page personal website for the CMSC 207 mini-project. The site features a header, about section with a profile photo, hobbies with images, and a contact section. It uses semantic HTML, an external stylesheet for layout and typography, and a small JavaScript interaction that shows a fun fact on button click. The design follows a neutral, professional color palette and includes responsive behavior for smaller screens.

## Live Demo
I deployed the personal website here:
```text
https://earlbellen.github.io/cmsc207_MiniProject/
```

## GitHub Repository
Repository link:
```text
https://github.com/earlbellen/cmsc207_MiniProject.git
```

## Short Reflection and What I Learned
Building the layout pushed me to think carefully about spacing, alignment, and how images behave at different sizes. The biggest challenge was keeping the hobby images consistent and readable while preserving faces and upper‑body framing. I solved it by standardizing image dimensions and using `object-fit` plus a slightly elevated `object-position`, then refining the grid and media queries to keep the composition clean on smaller screens.

This mini‑project helped me see how small CSS choices can dramatically improve the overall feel of a site. I learned how to structure a single‑page profile with semantic sections, design a coherent color system, and add a simple JavaScript interaction without cluttering the UI. It also reinforced the value of iterating: tweak, preview, and tweak again until the layout feels balanced.

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
