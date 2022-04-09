# PicCollage Demo App

Author: Benjamin Cai

Live demo:

## Steps

## Approach

## Pages

### App

Main application entry point. Handles routes/view.

### Image Picker

The first step in the "user flow". Provides options for the use to choose images. Fetch is used to populate the various image arrays. The local state in this components holds the images selected and passes the chosen option up to the main App.

### CanvasEditingContainer

Houses the Collage Layout component and Canvas. For this demo, the collage layout component assumes a 2x2 grid so is not extracted into a component. It's function is to take an input of collage style (2x2, 3x3...) and set parameters for the canvas. These parameters include grid layout (rows and columns) as well as the number of images (4 for 2x2). The Canvas component takes the images and collage style to create a collage view.

## Components

### CanvasIndex

The new Canvas component. Utilises grid index to facilitate a more scalable solution. Function is to handle the rendering and styling for the images on the grid. Includes the grid resizing feature. [todo]

### CanvasOptionsIndex

Used for containing the Sliders. The Sliders control the properties of each grid based on its index. Grid properties include rotation, zoom, horizontal position, and vertical position. [todo]

## Previous Component Implementations

### CanvasGrid

The old Canvas implementation. Based on "id" names given to the each grid and conditional. [todo]

### CanvasOptionsPanelGrid

Old Options Panel component. Similarly, based on grid "id" names.

## Atomic Components

### Slider

### Button

### ButtonGroup

### ColorPicker

### NumberForm

Todo:

- [x] Refactor copy and pasted code
- [x] Grid backgrounds
- [x] Improve Image Picker UI
- [ ] Move image by draggin image

Future Updates:

- [ ] Handle canvas sizes.
- [ ] Save images: html2canvas or use-react-screenshot (custom hook)
- [ ] Filters, coloring, bw
- [ ] Choose image on click of grid
- [ ] D&D reordering
- [ ] Adding frames - applying border image
- [ ] Adding text
