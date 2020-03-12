# **Sales Catalog**
Sales Catalog is an one-stop "shop for users to browse on sale items from their favorite brand. It uses an API that scrape on sale items' information from the brand's official website. 

## **DEMO**
-----
![DEMO](https://p68.f3.n0.cdn.getcloudapp.com/items/BluBdWAX/Screen+Recording+2020-03-12+at+08.56.34.33+AM.gif?v=c675125ef289fc91ac3f712553d464a7 "Demo")


## **Motivation**
------
When you are online shopping, do you find yourselves going to the sales section immediately and you don't ever buy regular price items? I find myself doing that and I believed many other people do that too. Therefore, I thought it would be convenient if there is a website that only display on sale items

## **Getting Started**
-----
To use this application, simply go to the deployed site or click [HERE](https://sales-catalog.herokuapp.com/). You can toggle on and off for different brands. The on sale items from the selected brands will be displayed on the same page.

## **Getting a Copy**
-----
To get a copy of this project and run it on your local machine, follow the instruction below. 

### **Prerequisites** 📌
- NPM- comes with [Node](https://nodejs.org/en/)

### **Step by step**
1. clone this repository to your local machine

    ```git clone https://github.com/yusungsamuel/sales-catalog.git```

2. Navigate to the project folder and run npm i to install the necessary dependencies
    
    ``` npm i```

3. run npm start to see the application launch on ***http://localhost:3000***

    ```npm run```

### **Customization**
This repository is only the front-end of Sales Catalog. The on sale items information are drawn from the [API](http://enigmatic-tundra-66827.herokuapp.com/api/uniqlo).To display information that the current version does not have, you may make request to different API (or build your own) and obtain the neccesary information. Sales Catalog is a decoupled application so it allows the flexiblity to use different front-end and back-end. The changes will need to be made to the useEffect function located in Page component.

![code](https://p68.f3.n0.cdn.getcloudapp.com/items/mXuqJvm9/Image+2020-03-12+at+9.58.33+AM.png?v=1b4bdd44688ac3064c040a0af912782c
 "API request code")



## **Technologies Used**
-----
 - HTML5 
 - CSS
 - [Bootstrap](https://getbootstrap.com/) - CSS Framework 
 - [Javascript](https://www.javascript.com/) - the primary scripting logic powering the application
 - [React.js](https://reactjs.org/) - user interface library 
 - [Animate.css](https://daneden.github.io/animate.css/) - CSS + Javascript library for animation
 - [UIKit](https://getuikit.com/) - CSS Framework for additional styling
 - [FontAwesome](https://fontawesome.com/) - Vector Icon library
 
 ### **NPM Packages**
 - [Axios](https://www.npmjs.com/package/axios)- Promise based HTTP client
 - [node-sass](https://www.npmjs.com/package/node-sass)- library that provides binding for Node.js to LibSass
 - [React-router-dom](https://www.npmjs.com/package/react-router-dom) - Routing library for React with DOM bindings


 ## **Author**
 ----
 Samuel Yu - https://github.com/yusungsamuel