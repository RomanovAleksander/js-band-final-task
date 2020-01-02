### JS Band Store application | Final task
**Navigation:**
[Scenarios](https://github.com/RomanovAleksander/js-band-final-task#scenarios), 
[Installing](https://github.com/RomanovAleksander/js-band-final-task#installing),
[Using](https://github.com/RomanovAleksander/js-band-final-task#using),
[Structure](https://github.com/RomanovAleksander/js-band-final-task#structure)

* This application includes next functionality:
  * User can signin with username;
  * Browse books list;
  * Search book by **title**;
  * Filter book by **price** (dropdown options: 0 < price < 15, 15 < price < 30, price > 30);
  * Browse specific book details;
  * Add specific book to cart;
  * Browse Cart with added books;
  * Make a purchase of added books;
* For task implementation used:
  * **React, Redux, Bootstarp CSS**;
  * **Create React App** as a app starter;
  * **Airbnb/react** linter;
  * **Travis-CI**;
  * **Github pages**;
  * **Github project**.
* [App on GitHub Pages](https://romanovaleksander.github.io/js-band-final-task/)

### Scenarios
* **User** goes to the **JS Band store** website;
* If **User** unauthorized **System** redirect user for **Sign-in** screen (That s only screen available for unauthorized user);
* **User** sign-in with username, **System** return user token (API provide token), redirects User to the **Book list** and store token in LocalStorage and Application State;
* **User** see the list of books (provided by API); Search by book name, filter list by the price;
* **User** navigate to the specific **Book details** clicking on 'View' button;
* **User** choose needed count of books, see total price and add the book to the cart. Then **User** can navigate back to the list or go forward to the **Cart**;
* **User** goes to the **Cart**, see order list and press 'Purchase' button;
* **System** place order (via API), show successful message and clear the cart;
* Then **User** sign-Out, **System** redirect User to the Sign-In screen.

### Installing
```
$ git clone https://github.com/RomanovAleksander/js-band-final-task.git - clone this repository
$ npm install || yarn install - install dependencies
```

### Using
```
$ npm run start - start dev server
$ npm run build - build application for production
$ npm run eject - copies all the configuration files and the transitive dependencies  into project
$ npm run lint - run eslint 
$ npm run predeploy - build application for production
$ npm run deploy - deploy application on gh-pages
```

### Structure
```
.
├── public
│   ├── favivon.ico
│   └── index.html
├── src                    
│   ├── actions
│   │   ├── book
│   │   │   ├── actions.js
│   │   │   └── types.js
│   │   ├── books
│   │   │   ├── actions.js
│   │   │   └── types.js
│   │   ├── cart
│   │   │   ├── actions.js
│   │   │   └── types.js
│   │   └── signin
│   │       ├── actions.js
│   │       └── types.js
│   ├── components
│   │   ├── App
│   │   │   ├── App.js
│   │   │   ├── app.scss
│   │   │   └── index.js
│   │   ├── BookDetails
│   │   │   ├── BookDetails.js
│   │   │   ├── bookDetails.scss
│   │   │   └── index.js
│   │   ├── BookList
│   │   │   ├── BookList.js
│   │   │   ├── bookList.scss
│   │   │   └── index.js
│   │   ├── BookListItem
│   │   │   ├── BookListItem.js
│   │   │   ├── bookListItem.scss
│   │   │   └── index.js
│   │   ├── Cart
│   │   │   ├── Cart.js
│   │   │   ├── cart.scss
│   │   │   └── index.js
│   │   ├── ErorBoundry
│   │   │   ├── ErorBoundry.js
│   │   │   └── index.js
│   │   ├── ErorIndicator
│   │   │   ├── ErorIndicator.js
│   │   │   ├── erorIndicator.scss
│   │   │   └── index.js
│   │   ├── Filter
│   │   │   ├── Filter.js
│   │   │   ├── filter.scss
│   │   │   └── index.js
│   │   ├── NotFound
│   │   │   ├── index.js
│   │   │   ├── NotFound.js
│   │   │   └── notFound.scss
│   │   ├── Routing
│   │   │   └── PrivateRoute.js
│   │   ├── ScrollArrow
│   │   │   ├── index.js
│   │   │   ├── ScrollArrow.js
│   │   │   └── scrollArrow.scss
│   │   ├── SignIn
│   │   │   ├── index.js
│   │   │   ├── SignIn.js
│   │   │   └── signIn.scss
│   │   └── Spinner
│   │       ├── index.js
│   │       ├── Spinner.js
│   │       └── spinner.scss
│   ├── pages
│   │   ├── BookPage.js
│   │   ├── BooksPage.js
│   │   ├── CartPage.js
│   │   ├── index.js
│   │   ├── NotFoundPage.js
│   │   └── SignInPage.js
│   ├── reducers
│   │   ├── authorization.js
│   │   ├── bookAndCart.js
│   │   ├── bookList.js
│   │   └── index.js
│   ├── services
│   │   ├── index.js
│   │   ├── LocalStorageService.js
│   │   └── StoreService.js
│   ├── styles
│   │   └── variables.js
│   ├── index.js
│   └── store.js
├── .eslintrc
├── .gitignore 
├── .travis.yml
├── package.json
├── README.md
├── yarn.lock
```
[Go to top](https://github.com/RomanovAleksander/js-band-final-task#js-band-store-application--final-task)
