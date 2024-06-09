# SPACETRAJ

SPACETRAJ is a web application designed to visualize a trajectory of a satellite exported from NASA's software GMAT. The application allows users to upload a JavaScript file containing satellite trajectory data, and then displays the satellite's path around a 3D model of the Earth using X3DOM.

## Features

- **3D Earth Visualization**: The Earth is rendered in 3D with a realistic texture.
- **Satellite Simulation**: Visualizes the satellite's trajectory around the Earth based on the uploaded data.
- **Interactive Controls**: Users can upload a new trajectory file, reset the simulation, or discard the uploaded file to start over.

## Getting Started

### Prerequisites

- A modern web browser that supports X3DOM.
- Basic knowledge of JavaScript for creating or understanding the trajectory data file.

### Installing

1. Clone the repository to your local machine.

    ```sh
    git clone https://github.com/Marcopb0303/SPACETRAJ.git
    cd mission-visual
    ```


### Running the Application

1. Open `index.html` in your web browser.
2. Use the file input to upload a JavaScript file containing the trajectory data.
3. Click the "Reset" button to restart the simulation with the initial data.
4. Click the "Discard File" button to remove the current file and clear the visualization.

### Trajectory Data Format

The uploaded JavaScript file should define a `trajectory` variable in the following format:

```js
var trajectory = {
    coordinates: [
        { X: 1000, Y: 2000, Z: 3000, Date: "2023-06-09", Time: "12:00:00" },
        { X: 2000, Y: 3000, Z: 4000, Date: "2023-06-09", Time: "12:05:00" },
        // More coordinates...
    ]
};
