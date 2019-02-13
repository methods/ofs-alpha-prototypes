# Office for Students - Resource that helps students make informed higher education choices

This is the main code repository of the alpha phase of the Office for Students project to find a suitable replacement for [Unistats](https://unistats.ac.uk/)

Testing will be carried out using Heroku free tier apps that deploy from branches of this repository. See **Repo structure** for details

### Deployments
- [test app](http://ofs-prototype-test.herokuapp.com/)
- [Prototype 01 - Dec 17 2018 - Choose a course page](http://ofs-prototype-01.herokuapp.com/)

#### More Prototypes
- Prototype 02 - Dec 17 2018 - [Card Wall axure/html](https://github.com/office-for-students/alpha-prototypes-axure/tree/develop/axure-prototypes/lab1-17th-dec)
- Prototype 03 - Jan 9 2019 - [Gov UK axure/html](https://github.com/office-for-students/alpha-prototypes-axure/tree/develop/axure-prototypes/lab2-9th-Jan)
- Prototype 04 - Jan 9 2019 - [Unihub-v1 axure/html](https://github.com/office-for-students/alpha-prototypes-axure/tree/develop/axure-prototypes/lab2-9th-Jan)
- Prototype 04 - Jan 25th 2019 - [Unihub-v2 axure/html](https://github.com/office-for-students/alpha-prototypes-axure/tree/develop/axure-prototypes/lab3-25th-Jan)
- Prototype 04 - Feb 11th 2019 - [Unihub-v3 axure/html](https://github.com/office-for-students/alpha-prototypes-axure/tree/develop/axure-prototypes/lab4-11th-Feb)

### Useful links
- [Unistats](https://unistats.ac.uk/)
- [DFE Search for schools and colleges to compare](https://www.compare-school-performance.service.gov.uk/)


### Technology links
- [Create React App](https://github.com/facebook/create-react-app)
- [Repo structure - How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1))
- [Deploying Production Build of React App to Heroku](https://medium.com/quick-code/deploying-production-build-of-react-app-to-heroku-2548d8bf6936)
- [GOVUK design system](https://design-system.service.gov.uk/)
- [GOVUK front end](https://github.com/alphagov/govuk-frontend)


### Thoughts and bookmarks
- [Start4Life - structure](https://www.nhs.uk/start4life)
- [Change4Life - structure](https://change4life.service.nhs.uk/change4life)


------------------------------

## Repo structure

This repo contains
1. The master branch with...
    * A simple structured React app that is deployable to Heroku
    * This README.md for guidance
    * Any other documentation
2. Master prototype branches...
    * Take the form **master-p01-ofs-01** (where **p01** indicates our round of testing, **ofs** indicates a major style and **01** indicates a variation)
    * Each of these will deploy to a heroku branch of the form **ofs-prototype-01-v1** (after a couple of weeks it is expected these will calm down so that version numbers are not needed)
3. Feature branches...
    * Of the form feature-p01-*

Round 1 testing expects us to test three variations of the new OfS website with a GOV.UK version for comparison. These will deploy to
* **master-p01-ofs-01** => **ofs-prototype-01-v1.herokuapp.com**
* **master-p01-ofs-02** => **ofs-prototype-01-v2.herokuapp.com**
* **master-p01-ofs-03** => **ofs-prototype-01-v3.herokuapp.com**
* **master-p01-gov-01** => **ofs-prototype-01-v4.herokuapp.com**

------------------------------

## React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts in development

The Heroku version of this app replaces . 

In the project directory, you can run:

### `npm start`

**Important: not the dev server**
This command is used to run the production server. For development see the next command

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

------------------------------

### Licensing

Please see [license file](/LICENSE)

