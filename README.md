# PicCollage Demo App

Author: Benjamin Cai

This repository contains my implementation of PicCollage features and aims to provide an automated method for placing and editing images on a canvas.

Live demo: https://bit.ly/benjamin-cai-pic-collage-demo

#### Installation instructions

1. Download and extract zip file for this repository from Github
2. In your shell application, change directory to the extracted folder
3. Run "npm install" to set up the application
4. Run "npm start" to start the application

# Introduction to Project

This application is built with the React framework and relies on React's client-side rendering and virtual dom for basic DOM updating. HTML, CSS, and JavaScript are used to handle the implementation of equations and modifying more complex properties of the view.

Below outlines my approach and thought process for this assignment.

### Approach

1. Clarify and outline task, scope, and requirements.
2. Draft technical implementation of core features
3. Determine the technical direction
4. Whiteboarding and determining application architecture and structure
5. Organise task list
6. Update documentation

[see my project analysis details]

### Practical Steps

1. Play around with app to understand its features and UI interactions.
2. Determine the core "wish list" of features to be implemented
3. Draft of technical implementation of core features (language agnostic)
4. Choose a language and framework:
5. Project setup & implement technical functionality
6. Improve UI and UX design

[see my project analysis details]

### Technical Implementation Steps

Language (frameworks):

- ~~Swift: relevant to iOS App~~
- JS/React: fast prototyping capabilities and desired features are mostly implementable.

With React as the chosen framework:

1. Draft Component structure, responsibilities by separation of concerns, and state management
2. Prototype components in isolation (sandboxing). Each component should handle an individual feature. Include equations and logic with language and framework-specific methods. Components will also contain the view specific to the feature
3. Setup main application, combine components, and determine parent/child relationships
4. Refactor code and methods for clarity; scalability; speed; and resource usage
5. Improve comments for understandability from external developers

Other:

- Implement automated testing (unit tests, integration tests, E2E tests)
- Define types

[see my project analysis details]

## Page Components

### `App`

`App` is the application's main entry point. Handles routes/view.

### `ImagePicker`

The `Image Picker` view represents the first step in the "user flow". It provides options for the user to choose images. Fetch is used to populate the various image arrays from URLs. The local state in this component holds the selected images and passes the chosen images up to the main App.

### `CanvasEditingContainer`

This component houses the `Collage Layout` component and `Canvas`. For this demo, the `Collage Layout` component assumes a 2x2 grid and is thus combined into this component. Its function is to take an input of _collage style_ (2x2, 3x3...), then pass those parameters to the `Canvas`. These parameters include grid layout (rows and columns) and the number of _images_ (4 for 2x2). The `Canvas` component takes the _images_ and _collage style_ to create an editing view.

## Feature Components

The `Canvas` is split into two versions. The old version, found in "/ByName/`CanvasByName`", handles resizing by dragging the bottom-right corner on each grid. The resizing equation is based on the CSS _resize_ property. While it facilitates quicker resizing, using CSS to handle changes in width and height resulted in some visual bugs. Moreover, it relies on grid id names to reference the grid objects and its functions subsequently rely on these id names, this leads to difficulty scaling when implementing more _collage styles_.

The new `Canvas` (/ByIndex/`CanvasByIndex`) implemements "handles" to adjust the grids sizing. Upon dragging the handles, event listeners and javascript are used manually set the widths and heights, the resulti is a more fluid user experience. The functions instead rely on the indexes of the grids and is thus easier to scale. However, it relies on the assumption that the order of the grid elements is irrelevant. As the new canvas results in less visual bugs, it is the preferred options going forward.

Similar design decisions were taken for the `GridOptionsPanel` resulting in its name and index versions.

### `CanvasByIndex`

The new `Canvas` component. `CanvasByIndex` utilises array _index_ to facilitate a more scalable solution. Its function is to handle the rendering and styling of the images on the grid. It houses the grid resizing feature. It is the parent to the `CanvasOptionsPanel` child component and passes the grids' properties and grid state setting functions to said child. [todo]

### `CanvasOptionsPanelByIndex`

The new `CanvasOptionsPanel`. It is used to contain the `Slider` components. The `Sliders` control the properties of each grid based on the index of the selected grid item. Grid properties include rotation, zoom, horizontal position, and vertical position. [todo]

## Previous Component Implementations

### `CanvasByName`

The old `Canvas` implementation. Based on "id" names given to each grid and conditional. [todo]

### `CanvasOptionsPanelByName`

Old Options Panel component. Similarly, based on grid "id" names.

## More Atomic Components

### `Slider`

### `Button`

### `ButtonGroup`

### `ColorPicker`

### `NumberForm`

## Resources

Contains images used in example case.

#### Current Todo:

- [ ] Improve overall UI
- [ ] Decide useMemo vs useRef.current for Ref array optimization
- [ ] Move image by dragging image (imageRefs? state + style?)
- [ ] Implement testing
- [ ] Define types
- [ ] Fix repetitive `Canvas` documentation
- [ ] Include images in Readme file

Future Updates:

- [ ] Handle choosing canvas size
- [ ] Save images: html2canvas or use-react-screenshot (custom hook)
- [ ] Filters, coloring, b/w
- [ ] Choose image on click of grid
- [ ] D&D reordering
- [ ] Adding frames - applying border image
- [ ] Adding text

Recently Completed:

- [x] Create resizing equation and implementation
- [x] Draft technical implementations for rotation, zoom, horizontal, vertical
- [x] Whiteboard general structure
- [x] Facilitate color changes
- [x] Refactor canvas and options panel to work with index instead of grid id name
- [x] Refactor for DRY code
- [x] Grid backgrounds
- [x] Improve Image Picker UI
