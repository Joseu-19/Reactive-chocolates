How this is wired

Index.js is the etry point of this website, here the browser can access the App file where all the components I created are put together. 

CaloriesData.js is the array of objects that contains information about each card.

CandyCard.js this is my card component, this file contains all of the mark up that I need for thecard.

In this file im importing {useState} react hook to add an open/close state to the modal.

The CandyCard function takes in a property of calorie which is like a parameter that expects the information of an object. 

Then we use the stopPropagation method to prevent the button click from triggering other buttons. 

CandyList.js

This component creates and stores the candy cards. 
The calories.map((calorie), index) iterates over each item in the calories array, and creates a new card by 
passing the item as the calorie prop. 
Then the key={index} gives each card a unique id to make cards easy to identify. 

Header.js
This is just the header component that takes accepts heading prop to set it as the heading of the page. 

App.js

In this file we’re importing all the other files/components we created so that we can assemble them into the website. 
