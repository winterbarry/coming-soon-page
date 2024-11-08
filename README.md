# Coming Soon Page

This is my solution for the Base Apparel coming soon page challenge on Frontend Mentor. It features a modern, minimalist design with email validation and error handling, allowing users to subscribe for updates.

## Features

- **Responsive Design**: The layout adapts to both desktop and mobile devices using CSS Grid and media queries.
- **Email Subscription Form**: Users can enter their email address to receive updates. The form includes:
  - Real-time validation for email format
  - Error handling and visual feedback if the email is invalid
- **Optimized Images**: Uses different image assets for desktop and mobile views to improve loading performance.

## Live Links
- https://winterbarry.github.io/coming-soon-page/

## Technologies Used

- **HTML5** for markup structure.
- **CSS3** for styling, including CSS Grid and Flexbox for layout.
- **JavaScript** for form validation and user feedback.
- **Google Fonts** for typography (Josefin Sans).

## Usage

1. **Enter an Email Address**: Users can input an email address to subscribe to updates.
2. **Form Validation**:
- If an invalid email is entered, the border turns red, and an error icon and message appear.
- On a valid email entry, a success message will display.

## Key Learnings
- CSS Grid was used extensively to create a flexible and responsive layout. By defining grid areas and specifying row and column sizes, CSS Grid allowed precise control over the placement of elements like the .icon-wrapper, .info-wrapper, and .hero-wrapper.

- Positioning elements within the layout required a good understanding of CSS positioning, particularly absolute and relative positioning. The .button element inside the .input-wrapper div demonstrated how to position elements precisely within their containers.

- Implementing a responsive design ensures the page looks good on both desktop and mobile screens. This project utilized media queries to adapt the layout on smaller screens, particularly by switching the grid layout from side-by-side to a stacked view on mobile devices.

---

This "Coming Soon" page provides a simple but effective way to engage visitors and gather email leads before the official launch.