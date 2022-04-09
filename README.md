<p id="start" align="center">
<br>
<img height="170rem" src="https://github.com/drinoff/carly/blob/main/client/public/images/logo.png">
  <h1 align="center" color='7582EB'>Carly</h1>
  
</p>
Carly is a Car Platform with Classified, Car Reviews and Car Data Base.It is open to everyone who needs to buy a car or sell their old one. Check some info for a given brand or model.

## Table of Contents
1. <a href="#overview">Overview</a>
2. <a href="#builtWith">Built with</a>
3. <a href="#appConfig">Application Configuration</a>
4. <a href="#appShots">Screenshots</a>
5. <a href="#license">License</a>
 



<h2 id="overview">OverView</h2>
Carly is a web application for Car Buying/Selling. It has the following functionality:

- **Guests** can: 
  - browse the Car Data Base, Reviews and Classifieds.
  - can send a email via contact form to the Carly team with suggestions or questions.
  - can Register to become a User.

- **Users** - extends Guest
  - create a classified.
  - can see,edit and delete his own Classifieds.
  - write a comment to a Review.
  - access to his own personal area with info aboout his/hers Classifieds.

- **Reviewer** extends User
  - can post a Review.
  - can Edit, Update and Delete his own Reviews.

- **Admin** extends Reviewer
  - can Edit and Delete Users.
  - can Edit and Delete Reviews.
  - can Add, Edit, Update and Delete Cars and their Respective Models from the Car Database.
  - access to Admin Panel for fast managing entities and some visual statistics.

<h2 id="builtWith">Built With</h2>

**Front End** 
- React JS
- React Router v6
- Material UI (some containers, Modal, Buttons)
- React Chart JS v2
- React-Redux Toolkit
- Analog Clock React
- React Responsive Carousel

**Back End** 
- Node JS
- Express JS
- Mongo DB
- Mongoose
- mailjet nodeJs wrapper
- JSON Web Token
- bcrypt

**Development** 
- nodemon

<h2 id="appConfig">Application Configurations</h2>

![Carly Flow Diagram](https://firebasestorage.googleapis.com/v0/b/ssg-build.appspot.com/o/Carly%20Diagram.png?alt=media&token=92806fbf-bd85-415b-ad24-b477c8b0b144)
 

### Available Scripts
After cloning this Repository, you can open it with any code editor.
```javascript
# install dependencies
npm install

# start back end
cd api
npm start

# start front end
cd client
npm start
```

### Test Accounts
   - email: user@user.com / password: Qwertyuiop1!  / Role: User
   - email: review@review.com / password: Qwertyuiop1!  / Role: Reviewer
   - email: admin@admin.com  /  password: Qwertyuiop1!  / Role: Admin

<h2 id="appShots">Screenshots</h2>

## Home View
![Home View](https://firebasestorage.googleapis.com/v0/b/ssg-build.appspot.com/o/home.png?alt=media&token=15600ee0-15ce-4df3-997e-fbb881d514ca)

## Classifieds view
![Classifieds View](https://firebasestorage.googleapis.com/v0/b/ssg-build.appspot.com/o/classifieds.png?alt=media&token=813909cf-d0f1-4dde-a048-4924fe482333)

## Add Brand View
![Add Brand](https://firebasestorage.googleapis.com/v0/b/ssg-build.appspot.com/o/addBrand.png?alt=media&token=156c8c8a-fe8d-46bf-b8f6-19f132b19064)

## Admin Panel View
![Admin Panel](https://firebasestorage.googleapis.com/v0/b/ssg-build.appspot.com/o/admin.png?alt=media&token=3bf75b52-e721-4a67-9d61-042b33239a06)

<h2 id="license">License</h2>

This project is licensed under the [MIT License](LICENSE).


