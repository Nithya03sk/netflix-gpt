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
