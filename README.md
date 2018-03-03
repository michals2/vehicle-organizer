### Quickstart
#### Run app
```bash
yarn install
yarn start
```
#### Run tests
```bash
yarn test
```

### App Highlights
* React view layer w/ Ant Design components
* Redux/Redux-Thunk model and controller
* Jest/Enzyme testing

### Component Structure
* App
  * VehicleListContainer
    * VehicleList
  * ControlPanelContainer
    * ControlPanel

### Objectives 
- [x] Use https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json
- [x] Show list of each vehicle's year, make, model, and mileage
- [x] Sorting functionality 
  - [x] oldest to newest vehichle year
  - [x] highest to lowest mileage
  - [x] newest to oldest listing date
- [x] Search functionality (any combination of below)
  - [x] year
  - [x] make
  - [x] model
- [x] Detail page (on clicking vehicle)
  - [x] Year
  - [x] Make
  - [x] Model
  - [x] Mileage
  - [x] Image
- [x] Basic styling
- [x] Responsive from mobile to desktop
- [x] Write a few unit tests

### Notes
* The app removes duplicate entries of vehicles (vehicles that have all of the same information)
* The app sacrifices a bit of computation time when the data loads in order to create a mapping of search terms to vehicles in order to improve performance on subsequent filtering (when values are entered in the search field)
* The search functionality doesn't work on partial strings (this was a performance optimization decision)
* Some vehicles may be duplicates (very similar information with only slight differences) which I've chosen to leave in. For example, there's a 2014 Honda Civic that appears twice in the list with the only difference being they were created exactly 2 months apart (down to the second).
* Time zones are all converted to local time (using Moment.js)