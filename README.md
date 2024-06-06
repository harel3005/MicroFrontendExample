---

# MicroFrontendExample

## Overview

This project demonstrates how to integrate a Vue microfrontend into a React host application using single-spa.

The project structure includes two directories:
- **host**: Contains the React host application.
- **VueMicroFrontend**: Contains the Vue microfrontend application.

## Getting Started

### Prerequisites
- Node.js and npm should be installed on your machine.

### Installation

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/harel3005/MicroFrontendExample.git
   ```

2. Navigate to the project directory.
   ```bash
   cd MicroFrontendExample
   ```

3. Install dependencies for the host application.
   ```bash
   cd host
   npm install
   ```

4. Install dependencies for the Vue microfrontend application.
   ```bash
   cd ../VueMicroFrontend
   npm install
   ```

### Running the Applications

1. Start the host application.
   ```bash
   cd ../host
   npm start
   ```

2. Start the Vue microfrontend application.
   ```bash
   cd ../VueMicroFrontend
   npm start
   ```

### Viewing the Website

Open your web browser and navigate to [http://localhost:8080](http://localhost:8080) to view the integrated website.

## Additional Information

For more details on how the integration between the React host application and the Vue microfrontend works, refer to the code and documentation within each directory.

---
