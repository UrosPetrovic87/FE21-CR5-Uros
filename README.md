For the regular points of this CodeReview, you need to create a structure of TypeScript/JavaScript classes, their respective constructors and their display() function that will display the relevant data of places, events and restaurants that you have visited.

(05 points) Create a GitHub Repository named: FE21-CR5-YourName. Push the files into it and send the link through the learning management system (lms).

(15 points) create the class Locations based on the specifications above.

(20 points) create at least 2 Locations objects by invoking a constructor call and save them in an array (class constructors usage is mandatory, do NOT use JSON and parsing).

(10 points) add a display() function to the Locations class that can display the Locations’ object as an HTML string. Use Bootstrap to solve design and responsiveness issues in an easy manner.

(10 points) use looping functionality to display the object saved in the array on the screen.

(20 points) create the classes Restaurant and Event with their respective properties. Invoke constructors, and save the resulting objects in an array(either in a general array containing all objects or in separate arrays containing specific class objects). Make sure that ALL info is displayed considering they are objects with different properties. 

(10 points) create a display() function for the classes Restaurant and Event respectively. display() is capable of displaying relevant information of its class as HTML. Again, use Bootstrap or CSS to solve design and responsiveness.

(10 points) Assure that the responsiveness of the page is as follows: for small screens, you see the teaser of one object (without the image) in a row. On medium screens, you see two teasers in a row (with image). On large screens, you see four objects in a row (with image).


Bonus Points:

(10 points) You have decided to add an additional date/time for every location that you visited. You add that information “Created: 24.03.2021 12:45” to respective teaser displays.

(10 points)  You want to use the newly added entry to add two additional pages to your system index-asc.html  and index-desc.html  Those pages are sorting the array of locations (places, events, restaurant) ascending/descending based on the “Created” date/time property. (If you feel capable of rendering the ascending and descending in one HTML page instead of creating extra index-asc.html/index-desc.html pages, then you are welcome to keep it on one page.)
