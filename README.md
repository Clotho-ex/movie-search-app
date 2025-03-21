# Hobby Project - Strengthening My Skills With React

This is a hobby project. I enjoyed making this project with a mobile first approach using Tailwindcss' unprefixed styles and making it accessible as much as I can.

## Table of contents

- [Hobby Project - Strengthening My Skills With React](#hobby-project---strengthening-my-skills-with-react)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View popular movies from current time.
- See a "Poster not Available" card for movies that do not have a poster.
- See errors if something goes wrong.
- Be able to make movie, anime, animation series searches.
- See trending movies based on user search.
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/public/screenhot.png)

### Links

- [Live on Netlify](https://lexipedia.netlify.app/)

## My process

1. Created a Vite + React project with `npm create vite@latest` and installed all the dependencies.
2. Installed Tailwindcss with Vite configuration.
3. Added CSS snippets to help speed up the process of applying styles.
4. Implemented an API call to the TMDB and fetched the movie titles to see if it works as intended.
5. Created movie cards to populate the website.
6. Added debouncing to prevent unnecessary requests to the API and also for better user experience using useDebounce hook from React.
7. Researched about Appwrite and used it for backend to have a feature where the trending movie section would change based on user searches.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS Library
- [Tailwindcss](https://tailwindcss.com/) - CSS Framework

### What I learned

The trending section in the app works by being populated from the database. When a movie title is being searched, it's count increases by 1, moving it up in the rank of trending movies. Implementing this was a challange and it was my first time setting up a database with a 'Database as a Service'. Its really interesting and I like how it turned out.

## Author

- LinkedIn - [Yusufcan Var](https://www.linkedin.com/in/clotho/)
- GitHub - [Clotho-ex](https://www.twitter.com/yourusername)
