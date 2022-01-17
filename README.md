<div style="text-align:center">
    <img align="centre" src="https://img.shields.io/tokei/lines/github/BJB-Team/TechFind-frontend?style=flat-square">
    <img src="https://img.shields.io/netlify/19440c6c-fec9-46b5-904d-e4e6961e5bcd?style=flat-square"> <img src="https://img.shields.io/github/repo-size/BJB-Team/TechFind-frontend?style=flat-square">
</div>

<p align="center">
  <h2 align="center">TechFind</h2>
  <h3 align="center">Coder Academy Assignment 2A & 2B - Term 3</h3>
  <p align="center">
    <a href="https://github.com/BJB-Team/TechFind-Frontend">Link to Front-end Repository</a>
    ·
    <a href="https://github.com/BJB-Team/TechFind-Backend">Link to Back-end Repository</a>
    ·
    <a href="www.techfind.software">www.techfind.software</a>

  </p>
</p>

---

## Table of Contents

<!-- TOC depthFrom:1 depthTo:4 withLinks:1 orderedList:0 -->

- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
  - [**Built With (Tech Stack)**](#built-with-tech-stack)
  - [Ruby on Rails Read Docs](#ruby-on-rails-read-docs)
  - [HTML5 Read Docs (Not official)](#html5-read-docs-not-official)
  - [CSS3 Read Docs (Not official)](#css3-read-docs-not-official)
  - [JavaScript (ES6) Read Docs](#javascript-es6-read-docs)
  - [ReactJS Read Docs](#reactjs-read-docs)
  - [Postgresql Read Docs](#postgresql-read-docs)
  - [**Statement of Purpose**](#statement-of-purpose)
  - [**Target Audience**](#target-audience)
  - [**Project Management**](#project-management)
  - [**Project Management in the Post Mortem**](#project-management-in-the-post-mortem)
    - [**Trello**](#trello)
    - [**Git Workflow**](#git-workflow)
    - [**Continuous Integration**](#continuous-integration)
  - [**Testing**](#testing)
  - [**Functionality / Features**](#functionality--features)
    - [**A Job Seeker Features**](#a-job-seeker-features)
    - [**A Job Poster Features**](#a-job-poster-features)
  - [**User Stories**](#user-stories)
    - [As a Seeker](#as-a-seeker)
    - [As a Poster](#as-a-poster)
    - [User Testing of Deployed Site and Production](#user-testing-of-deployed-site-and-production)
  - [**Application Architecture Diagram**](#application-architecture-diagram)
  - [**Entity Relationship Diagram (ERD)**](#entity-relationship-diagram-erd)
  - [**Dataflow Diagram**](#dataflow-diagram)
  - [**Wireframes**](#wireframes)
  - [**Third Party Apps/Services**](#third-party-appsservices)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

<!-- /TOC -->

## About the Project

### **Built With (Tech Stack)**

The core programming languages/frameworks/libraries used to build this application are:

### Ruby on Rails [Read Docs](https://guides.rubyonrails.org/getting_started.html)

Ruby on Rails was used to create the backend API that has data stored in it's accompanying Postgresql database. Ruby on Rails was chosen for it's simplicity to create a full stack application with little extra dependencies. In the Model, View and Controller (MVC) framework, Rails will handle the Model and the Controller actions. Essentially handling all the server side code when the client requires it.

### HTML5 [Read Docs (Not official)](https://developer.mozilla.org/en-US/docs/Web/HTML)

HTML provides the structure of every website. With the latest version HTML5 bringing easy to read semantic tagging with some client side validation within forms. HTML sites in every React component that's rendered as JSX.

### CSS3 [Read Docs (Not official)](https://developer.mozilla.org/en-US/docs/Web/CSS)

Cascading style sheets (CSS) is the framework for adding visual styles to the structure of our website. CSS libraries used for this project are Bootstrap and Styled Components. Bootstrap and Styled Component sit inside each React Component while minor amendments to these frameworks sits in a corresponding CSS file.

### JavaScript (ES6) [Read Docs](https://262.ecma-international.org/6.0/)

Javascript (& ES6) is the core functionality of the front-end part of this site. Javascript and React form the logic part of a website for the Views (part of the MVC framework).  

### ReactJS [Read Docs](https://reactjs.org/)

React is a Javascript library that uses component-based methodology this makes for easy single page applications and the reason React was the library used for this assignment. React uses state management and hooks (with functional components) that give it an advantage over Vanilla Javascript.

### Postgresql [Read Docs](https://www.postgresql.org/)

Postgresql is an open source relational database that is commonly used with Ruby on Rails. It was used for this assignment as it formed part of the curriculum and was easy to use and set up. 

### **Statement of Purpose**

The purpose of the TechFind application is to link IT positions with candidates with those skills. Say goodbye to Junior Dev roles seeking 10 years experience in .NET roles. Each Job Poster can assign themselves to a company and create job advertisements to seek out potential employees.

### **Target Audience**

The target audience for this application are people in the technology industry looking for a job board that is specific to their industry.

### **Project Management**

To manage the team for this application a Trello board was set up to help follow an agile methodology. Each team member has been assigned different roles.

- Ben Aitcheson - Organising the documentation, front-end development and DevOps.

- Jack Kirkwood - Back-end development and Databases.

- Lukusa (Blaise) Tshitenga - User Experience/Interfacing, Graphic Design, Wire-framing and Architecture design.

This is the initial board. Everything from the marking rubric was thrown in and our feature design was started. Colours were chosen for each team member and roles were assigned.

<img src="Resources/Trello1.png" height="400px">

As the deadline for Part A came close, exact roles were determined and delegated and moved into the doing column. Core features were decided upon first with secondary features coming under the 'nice the haves'.

<img src="Resources/Trello2.png" height="400px">

The Trello board can be accessed publicly [here](https://trello.com/b/U2Pme2ea/project-management).

### **Project Management in the Post Mortem**

#### **Trello**

Following a Kanban style methodology the team set up a Trello board to delegate work. Column's in the board included Brainstorming, To Do, Doing, Testing, Review and Completed. Each team member was assigned a colour and each card under a specific column was assigned a colour based off the their preferred tasks. Time was taken to ensure the work was also delegated evenly and under an agile methodology had meant that one persons work wouldn't hold up someone else's. Here's a description of each Trello board column:

**Brainstorm:** This part of the board was used to do all of the brainstorming. What features did we want and how we drilled down on the idea. It was also the place where we defined our core features and what was a nice to have feature.

**To Do:** All the ideas that came from our core features were created here initially. This is where all the cards were created. Any time an issue was faced or an idea fleshed out the card would start here.

**Doing:** Once a card is assigned (or someone volunteers to do one) it sits in this column until it's ready to be tested.

**Testing:** Once the code has been committed then testing must be done to check for bugs prior to deployment. Test but be run in the terminal prior to the code going to review. All the tests must pass before a card can be moved to 'review'. 

**Review:** This column is for work that has been committed and tested it sits here ready to be merged into main (or production).

**Completed:** This column is just to record tasks that have been completed.

#### **Git Workflow**

Once a card is picked up by a team member a branch off main is created. The naming convention is as closely related to the card as possible. The team member continues to work on this card making commits as required then finally pushing the changes to the main branch and opening up a Pull Request (PR) in github. If the team member so choses they can open up a draft PR the moment they assign a card to themselves.

Once the code is pushed and the PR is open Netlify will run a continuous integration and testing check on the new PR.

Each PR was done by one user then assigned a person to approve each commit and is then handed back to the initial PR person to squash and merge.

Wanted to try set up Continuous Integration 

#### **Continuous Integration**

It was our intention to set up a continuous integration (CI) system where our team would be able to commit code to the github repo and the CI would automatically run the unit tests and integration tests, run a linting program and check types (with Flow) and deploy the new changes with every commit or pull request.

What was implemented...
This was kind of done with Netlify where we would stage and commit changes then Netlify would test these changes before they were pushed to production.

### **Testing**

Our intention was to write tests ahead of coding but for this project we ended up testing things manually making sure our results came through with console logs and writing proper unit tests after the code was written to eliminate potential bugs. This is not quite how test driven development should work. For future projects a function should be written and the testing file created at the same time with tests written at the time of the function.

Unit testing involves going through each individual function and testing to see if it's running as intended by checking to see if the output is correct. Just like functions each test should have one purpose.

Jest is a testing library. It is used for React to check components are rendering and each function is producing an output as intended.

After unit testing is integration testing. This tests the API is working, components render and it's all come together.

As we had no real client we did a walkthrough test of production and the local server as if we were using the application for the first time.

Here's a walkthrough as someone looking for a job.

<img src="Resources/Walkthrough1.gif">

Here's a walkthrough of someone looking for someone to fill their role at their company.

<img src="Resources/Walkthrough2.gif">

### **Functionality / Features**

Here are some of the features that will be implemented for this application.

Users are split into Job Seekers and Job Posters.

#### **A Job Seeker Features**

A Seeker on sign up will require the user enter:

- Username
- First Name
- Last Name
- Email
- Password
- Phone Number
- Password Confirmation
- Resume

Each time the Seeker signs in they will go through the authentication process requiring a username/email and a password.

The Seeker can then search jobs by these options:

- Levels
- Job Categories

The Seeker can also make changes to their own profile once logged in.

#### **A Job Poster Features**

A Poster on sign up will require the user enter:

- Username / Company
- Email
- Password
- Password Confirmation
- Company Details (Website)

Each time the Poster signs in they will go through the authentication process requiring a username/email and a password.

The Poster can then post jobs by these options:

- Job description
- Location
- Level
- Job Category
- Salary / Wage (Not mandatory)

The Poster can also make changes to their own profile once logged in and view/modify applications made to their job posting.

A poster can view these about their applicants:

- View seekers email, phone number, resume
- Be able to approve/deny applications
- Sort applications into different levels

### **User Stories**

Here are some User Stories that we built this application from. Each stories outlines how the features will be built following agile methodologies.

#### As a Seeker

> “As a junior developer, I want to see what jobs candidates are posting, so that I can advance my career.”

> "As a job seeker, I can login with my email and a password, so that I have a unique identification."

> "As a job seeker, I can add some details like email or mobile, so that future employers can get in contact with me."

> "As a junior developer, I can search by job categories, so that I can find jobs specific to my ideal career."

> "As a job seeker, I can update and change my profile details, so that as my circumstances change I can stay up to date."

> "As a job seeker, I can upload my resume/CV, so that potential employers can download it when I apply for a job."

#### As a Poster

> “As a future hirer, I want to find the right candidates, so that I get the best people for the job.”

> "As a job poster, I can login with my email and password, so that I have a unique identification."

> "As a job poster, I can login under my company profile, so that seekers can see which company I work for."

> "As a company, I can add jobs to my company profile, so that I can show future prospects what jobs I am hiring for."

#### User Testing of Deployed Site and Production

Insert some stuff about the user running through the site

### **Application Architecture Diagram**

As you can see from the Architecture diagram below, this application will have the front-end deployed through Netlify. The views part of the MVC framework is handled by React. While the back-end will be on Heroku and will contain the Models and the Controller actions. Axios requests will send information between the two platforms creating a full stack application completely hosted on the cloud. 

<img src="Resources/ArchitectureDiagram.png">

### **Entity Relationship Diagram (ERD)**

Here's a simple diagram of how our database design will be implemented.

<img src="Resources/ERD.png" height="400px">

### **Dataflow Diagram**

The dataflow diagram shows how the data moves around the application. This one shows the data from the Seeker side (Left side) and the company/Job Poster side (Right side).

<img src="Resources/Dataflow_Diagram.png" height="300px">

### **Wireframes**

Here are some high fidelity wireframes for the TechFind application in both Mobile and Desktop.

Initial Landing Page Desktop:

<img src="Resources/Landing Page - Desktop.png" height="400px">

Initial Landing Page Tablet:

<img src="Resources/Tablet - Landing Page.png" height="400px">

Initial Landing Page Mobile:

<img src="Resources/Landing Page - Mobile.png" height="400px">

Company Profile Page Desktop:

<img src="Resources/Company Profile Page - Desktop.png" height="400px">

Company Profile Editor Page Desktop:

<img src="Resources/Company Profile Page Editer - Desktop.png" height="400px">

Company Profile Editor Page Tablet:

<img src="Resources/Tablet - Job seeker  Profile Page Editer.png" height="400px">

Company Profile Editor Page Tablet:

<img src="Resources/Tablet - Company Profile Page Editer.png" height="400px">

Company Profile Page Mobile:

<img src="Resources/Company Profile - Mobile.png" height="400px">

Create a Job Page Desktop:

<img src="Resources/Create a Job Page - Desktop.png" height="400px">

Create a Job Page Tablet:

<img src="Resources/Tablet - create a Jobs.png" height="400px">

Create a Job Page Mobile:

<img src="Resources/Create  a Job Page - Mobile.png" height="400px">

Jobs/Applications Page Desktop:

<img src="Resources/Jobs Page - Desktop.png" height="400px">

Jobs/Applications Page Tablet:

<img src="Resources/Tablet - company applications.png" height="400px">

Jobs/Applications Page Mobile:

<img src="Resources/Jobs Page - Mobile.png" height="400px">

Personal Account Page Desktop:

<img src="Resources/Create Seeker Account - Desktop.png" height="400px">

Personal Account Page Mobile:

<img src="Resources/Create Seeker Account - Mobile.png" height="400px">

Login Page Desktop:

<img src="Resources/Create Account - Desktop.png" height="400px">

Login Page Mobile:

<img src="Resources/Login Page - Mobile.png" height="400px">

Mobile Webpage Flow as a Seeker:

<img src="Resources/Webflow - Mobile1.png" height="400px">

Mobile Webpage Flow as a Poster:

<img src="Resources/Webflow - Mobile2.png" height="400px">

### **Third Party Apps/Services**

Here are the third party applications used for TechFinder, in no particular order:

- [Knock](https://github.com/nsarno/knock): A Ruby gem for creating user authentication. A quick alternative to creating authentication from scratch.
- [Heroku](https://www.heroku.com/): This is a cloud platform that lets the user build, deliver, monitor and scale applications. This means a user can host their full stack application on the internet for free. But for this application Heroku will take care of the backend.
- [Netlify](https://www.netlify.com/): This platform allows users to host their front end projects on the cloud for free with a 'freemium' plan. This platform will hold our React frontend as it requires less building than trying to deploy with Heroku.
- [GitHub](https://github.com/): An online platform for users to store public and private coding projects for free. This platform pairs with Heroku and Netlify. Github stores the code and Heroku provides the server to fetch the code and send it to the browser. It is also the platform that allow the team to store the code in a single repository and keeps track of all the git commits and merging.
- [Git](https://git-scm.com/): Version control software that is free. It helps the user keep track of changes allowing them to branch and rollback revisions.
- [Bootstrap 5](https://getbootstrap.com/): Bootstrap makes putting HTML and CSS together on the web browser simple. By streamlining the code required visually appealing layouts can be
- [Figma](https://figma.com/): This program allows users with little amount of graphic design skills to make mock versions of websites, business cards and other mock ups.
- [Trello](https://trello.com/): This is a project management tool used to keep track of features and items that need to be done. Our Trello board can be viewed [here](https://trello.com/b/U2Pme2ea/project-management).
- [Git Guardian](https://www.gitguardian.com/): This program scans the users GitHub account to ensure any passwords or keys aren't made public for someone to scrape and use for malicious activities.
- [DB Diagram.io](https://dbdiagram.io/home): A online platform used to give a visual display of the Entity Relationship Diagram for the back end on Find-A-Planner.
- [Visual Studio Code](https://code.visualstudio.com/): The most popular code editing software with plenty of extensions to help code this application. VS Code is owned by Microsoft and is free to use.

## Roadmap

In the future we would like to add ..

---

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b YourBranchName`)
3. Commit your Changes (`git commit -m 'Add a feature/amendment'`)
4. Push to the Branch (`git push origin YourBranchName`)
5. Open a Pull Request

---

## Authors

- Ben Aitcheson - Organising the documentation and both front and back-end development. [Github](https://github.com/benaitcheson) / [Website](https://www.benaitcheson.me/)

- Jack Kirkwood - Back-end development and Databasing. [Github](https://github.com/jkirky82)

- Lukusa (Blaise) Tshitenga - Front-End development, Wireframing and Architecture design. [Github](https://github.com/Blaise122)

---

## Acknowledgments

- Thanks to the team at [Coder Academy](https://www.coderacademy.edu.au/) for their support.
