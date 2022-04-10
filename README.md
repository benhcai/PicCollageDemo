# PicCollage Demo App

Author: Benjamin Cai

This repository contains my implementation of PicCollage features and aims to provide an automated method for placing and editing images on a canvas.

Live demo: https://bit.ly/benjamin-cai-pic-collage-demo

#### Installation instructions

1. Download and extract zip file for this repository from Github
2. In your shell application, change directory to the extracted folder
3. Run "npm install" to setup the application
4. Run "npm start" to start the application

# Introduction to Project

This application is built with the React framework and relies on React's client-side rendering and virtual dom for basic DOM updating. HTML, CSS, and JavaScript are used to handle the implementation of equations and modifying more complex properties of the view.

Below outlines my approach and thought process for this assignment.

## Approach

1. Clarify and outline task, scope and requirements.
2. Draft technical implementaion of core features
3. Determine technical direction
4. Whiteboarding and determing application architecture and structure
5. Organise task list
6. Update documentation

## Practical Steps

1. Play around with app to understand its features and UI interactions.
2. Determine core "wish list" of features to be need to implement
3. Draft of technical implemention of core features (language agnostic)
4. Choose a language and framework:

- ~~Swift: relevant to iOS App~~
- JS/React: fast prototyping capabilities, and desired features are mostly implementable.

## React Design Steps

1. Draft Component structure, responsibilies by sepeartion of concerns, and state management
2. Prototype components in isolation (sandboxing). Each component should handle an individual feature. Include equations and logic with language and famework specific methods. Components will also contain the view specific to the feature
3. Setup main application, combine components, and determine parent/child relationships
4. Refactor code and methods for clarity, scalability, speed and resource usage
5. Improve graphic design aspect/the UI
6. Improve comments for understandability from external developers

Other:

- Define types
- automated testing

## Page Components

### App

Main application entry point. Handles routes/view.

### Image Picker

The first step in the "user flow". Provides options for the use to choose images. Fetch is used to populate the various image arrays. The local state in this components holds the images selected and passes the chosen option up to the main App.

### CanvasEditingContainer

Houses the Collage Layout component and Canvas. For this demo, the collage layout component assumes a 2x2 grid so is not extracted into a component. It's function is to take an input of collage style (2x2, 3x3...) and set parameters for the canvas. These parameters include grid layout (rows and columns) as well as the number of images (4 for 2x2). The Canvas component takes the images and collage style to create a collage view.

## Feature Components

### CanvasIndex

The new Canvas component. Utilises grid index to facilitate a more scalable solution. Function is to handle the rendering and styling for the images on the grid. Includes the grid resizing feature. It is the parent to the CanvasOptionsPanel child component and passes the grids properties and grid state setting functions to said child. [todo]

### CanvasOptionsPanelIndex

Used for containing the Sliders. The Sliders control the properties of each grid based on its index. Grid properties include rotation, zoom, horizontal position, and vertical position. [todo]

## Previous Component Implementations

### CanvasGrid

The old Canvas implementation. Based on "id" names given to the each grid and conditional. [todo]

### CanvasOptionsPanelGrid

Old Options Panel component. Similarly, based on grid "id" names.

## More Atomic Components

### Slider

### Button

### ButtonGroup

### ColorPicker

### NumberForm

## Resources

Contains Images used for example.

#### Current Todo:

- [x] Refactor copy and pasted code
- [x] Grid backgrounds
- [x] Improve Image Picker UI
- [ ] Move image by dragging image (imageRefs? state + style?)

Future Updates:

- [ ] Handle canvas sizes.
- [ ] Save images: html2canvas or use-react-screenshot (custom hook)
- [ ] Filters, coloring, bw
- [ ] Choose image on click of grid
- [ ] D&D reordering
- [ ] Adding frames - applying border image
- [ ] Adding text
