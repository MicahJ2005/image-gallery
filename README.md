# React - Image Gallery

The Image Gallery Project is a simply gallery that uses React.js, utilizing the passing of props to different components. 

### Setup

Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

Between the server and client, you'll need two terminal tabs! Because we're using `nodemon`, both our client side and server side will automatically spin back up when changes are made!

## Git Branching
In the Github repository, you will see the utilization of mutiple branches for this project. This is an important skillset to utilize when working with teams. 

## BASE MODE

In this project you will find the following functionality, including the corresponding branch names listed below. 

- `feature-get-gallery` 
    - Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.js`.
- `feature-component-gallery-list` 
    - There is a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
    - Break apart the list of gallery data
- `feature-component-gallery-item` 
    - Create a new **component** called `GalleryItem.js` and pass it the individual gallery item via `props`. 
    - Display all of the images on the screen.
- `feature-image-swap` 
    - Swap the image with the description on click. Research [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
- `feature-like-counter` 
    - Display the number likes for each item and include a like button.
    - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
    - Update the gallery each time a like button is clicked.

### Wireframes

> NOTE: The provided wireframes are a representation of the final project.

![mockup one](wireframes/first-mockup.png)

![mockup two](wireframes/second-mockup.png)
