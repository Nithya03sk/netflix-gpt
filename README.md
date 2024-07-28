npx create-react-app netflix-gpt
install tailwind css go to their website for complete exp
Install react testing library.
Install jest library, go to babel and instal babel jest and also add babel.config.js

we want our babel test config to work to do so we need to overide parcel config
so go to babel documentation and configure .parcelrc file to use jest

npm run test should give no test cases
npx jest --init

The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... no
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » babel
√ Automatically clear mock calls, instances and results before every test? ... yes

instal jsdom library

* RAFCE is a shortcut for creates a boiler plate for jsx component. REACT ARROW FUNCTION COMPONENT EXPORT

* npm i -D react-router-dom
    - createBrowseRouter give path n element
    - RouterProvider pass appRouter

* for validation we used useRef hook, create a const and assign it to input field to fetch a value of input field.

* For authentication we are using firebase

* Steps for deploy
    1. Install firebase CLI - npm install -g firebase-tools
    2. Firebase login - firebase login
    3. intialize firebase - firebase init, then select hosting
    4. Deploy command - firebase deploy

* write sign up and sign in logic (used firebase --> web page documentation)

* install redux to store users
    npm i -D @reduxis/toolkit
    npm i react-redux

* first create store i.e,. appStore, create slice userSlice.
* put sliceReducer in to store.
* put store inside root file of your project i.e., App.js using Provider.