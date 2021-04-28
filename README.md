# JavaScript To Do List

A web-based To-Do-List app for Code-Institute's Fullstack Developer Diploma Milestone Two project.

## **Preview** 

Previews of the interface themes can be viewed here:


The deployed site on GitHub Pages can be viewed [here.](https://juliet-simpson.github.io/js-to-do-list/)

## User Stories

* A user who struggles with keeping multiple manually written to-do lists is looking for an automated alternative on their devices.

* A user who is struggling with organisation wants to keep a record of tasks they need to do that can be easily updated with new items, urgent ones highlighted and finished ones checked or deleted.

* A user who is struggling with motivation wants an attractive interface to encourage them to engage with the tasks they must perform.

* A user wants to be able to return to the app after closing it and review lists that they have written at an earlier date.

* Two users wish to use the app from the same device and would like to each be able to access their own list.

* A user would like to obtain information about the weather in their location at the same time as reviewing their things-to-do.


## UX

### **1. Strategy**

To create a to do list app that meets the needs of the user stories.

### **2. Scope**

Features to include:


* Option to change overall colour scheme, preference saved locally to reload on the next visit.
* Date and time
* Input to name a list, make the input value the list title and display that instead of the input, and add that title to a 'list of lists'.
* Create multiple lists.
* List of lists where a list name can be clicked on to open that shows to do items in the main panel.
* Text input to add to do items to the currently open list.
* Option to strike-through completed to do items.
* Option to highlight urgent items in red.
* Option to delete items.
* Lists locally saved so that they can be retrieved after a users first visit.
* Connect to a weather API to give current weather information.
* Button to delete the currently open list.
* Button to start a new list, saving the one open.
* A clickable 'How to use" speech bubble button which opens a modal overlaying the page giving instructions for using the app.


### **3. Structure**

* The app will be all on one page.  
* It will be responsive for different screen sizes and the layout will vary slightly accordingly.  
* The header will contain the colour scheme selection options, page title, the date and time. 
* Below the header, a text input to name the list OR the title of the currently open list.  
* The weather API will be to the left of the screen on a desktop and in the bottom section of the page on a tablet and a mobile.
* The to do list items will be displayed centrally on the screen with a 'done' checkbox to the left and urgent and a trash button icons to the right of each item. 
* The 'enter a to-do' text input will be central at the bottom of the page on a desktop or at the bottom of the to dos section on a tablet or mobile.
* List titles will display in a column to the right of the screen on desktop and between the todos and the weather on a mobile or tablet.

### **4. Skeleton**

The wireframes can be viewed here:

- [Wireframes](https://github.com/Juliet-Simpson/js-to-do-list/blob/master/assets/wireframes/wireframes.pdf)


### **5. Surface**

There will be 4 different themes to choose from each with its own colour scheme. There will be a font for the business themes and a font for the fun themes.  The 4 themes will be:
* Business light
* Business dark
* Fun light
* Fun dark

## Features

### Included

### Left to implement

## Technologies

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Tools 

- [Balsamiq](https://balsamiq.com/)
    * Creation of the wireframe mock ups.

- [Bootstrap (version 4.6.0](https://getbootstrap.com/docs/4.6/getting-started/introduction/)) 
    * **CSS** For responsive layout for different screen sizes.
    * **CSS and JavaScript** Code for How To Use modal.

- [Google Fonts](https://fonts.google.com/)
    * Used to import the 'Arvo' font for the business themes and the 'Josefin Sans' font for the fun themes into the style.css file.

- [Git](https://git-scm.com/)
    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

- [GitHub:](https://github.com/)
    * GitHub is used to store the projects code after being pushed from Git.

- [GitPod](https://www.gitpod.io/)
    * IDE used for development and testing.

- [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
    * Used throughout the development process to view the console and locate errors in javascript and assist with layout and styling.

- [Font Awesome:](https://fontawesome.com/)
    * Icons for Date and Time and for 'to do' items, made clickable to indicate done, urgent or trash.

-[OpenWeatherMap](https://openweathermap.org/current)
    * Used for the API call to get current weather data based on latitude and longitude.

- [Paint-X:](https://paint-x.com/)
    - Used to create the 'How To Use', 'Delete List' and 'New List' Buttons.

## **Testing**

### **Third Party Tools/Services**

- [W3C HTML Validator](https://validator.w3.org/nu/#textarea)
    * Used to Validate the HTML code by copying and pasting code from index.html into this webpage.  

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator)
    * Used to validate the code from all css files individually by pasting into this page.

- [JSHint](https://jshint.com/)
    * Used to validate code from all javascript files individually.

- [Chrome Lighthouse Extension](https://developers.google.com/web/tools/lighthouse/)
    * Used to audit the app.   A summary of the results can be found [here.]()

### Manual Testing
**Bugs and fixes**

**Functionality**
* Devices and screen sizes
* In app functionality throughout all themes.

**Pending Issues**

### User Stories

## Deployment

### Deployment to GitHub Pages:

1. Log into GitHub and locate the repository [Juliet-Simpson/js-to-do-list](https://github.com/Juliet-Simpson/js-to-do-list)

2. At the top of the list of files, below the repository name there is a horizontal menu.  Select "settings" from this menu.
    ![Settings](https://github.com/Juliet-Simpson/js-to-do-list/blob/master/assets/images/readme-scrshts/dep-settings.png "Settings Button")

3.  Scroll down the settings page until the "GitHub Pages" section is located.  

4. Click the link to open the GitHub Pages tab.
    ![Pages tab link](https://github.com/Juliet-Simpson/js-to-do-list/blob/master/assets/images/readme-scrshts/gh-pages-scrsht.png "Pages tab link")

5. From the "Select branch" dropdown, select "master"

6. From the "Select folder" dropdown, select "root"

7. Press the "Save" button
    ![Save to pages](https://github.com/Juliet-Simpson/js-to-do-list/blob/master/assets/images/readme-scrshts/save-to-pages.png "Save to pages")

8. The adress of the deployed site can now be viewed in the green box as a link.

9. Test this link.

### To make a clone in GitPod

1. Log into GitHub and locate the repository [Juliet-Simpson/js-to-do-list](https://github.com/Juliet-Simpson/js-to-do-list)

2. Select the clone dropdown and then click the clipboard icon to copy the link.
    ![Copy clone link](https://github.com/Juliet-Simpson/js-to-do-list/blob/master/assets/images/readme-scrshts/clone.png "Copy clone link")

3. Type git clone and then paste this link into the terminal of your chosen editor and press enter:
`git clone https://github.com/Juliet-Simpson/js-to-do-list.git`

4. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

## Credits

### Code
#### Sources

### Images

### Acknowledgements
