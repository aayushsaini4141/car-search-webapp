# Car Search App

## Technology Used 

Tailwind CSS: For styling and layout.
JavaScript: To add interactivity and dynamic behavior.
React.js: A progressive JavaScript framework for building user interfaces.
    

## functionality

#### Create Car Data:
Prepare the car data that you will use for searching and displaying. You can store this data in a JSON file or retrieve it from an API.

#### Create Components:

CarSearchPage: This is the main component for your car search page. It will contain the search bar, car card list, and pagination component.

CarCard: This component represents a single car card and displays the car details.

Pagination: Create a component to handle pagination. It should include previous, next, and page number buttons.

#### Implement Search Functionality:

Handle the search input using state in the CarSearchPage component.
Filter the car data based on the search query (car name) and display the filtered results.

#### Display Car Cards:

In the CarSearchPage component, map through the filtered car data and display the car cards.
Use CSS to style the car cards to match the design you want.

#### Implement Pagination:

Calculate the total number of pages based on the number of cars per page (6 in your case).
Store the current page number in the component's state.
Create a function to update the current page when a user clicks on a page number or the previous/next buttons.
## Authors

- [@Ayush Saini](https://github.com/aayushsaini4141)

### Screenshots

![Screenshot (43)](https://github.com/aayushsaini4141/car-search-webapp/assets/105410384/1245bee3-0c11-4e33-a3d1-e9ee2ee89de5)

![Screenshot (44)](https://github.com/aayushsaini4141/car-search-webapp/assets/105410384/8b76390c-3694-4829-a416-e3703ccee69a)


## Project Setup

```sh
npm i
```


### Compile and Minify for Production

```sh
npm start
```
