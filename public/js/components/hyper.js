webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(16);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _Content = __webpack_require__(13);

var _Content2 = _interopRequireDefault(_Content);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Content2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
var movieCards = [{
     img: 'https://filmwonk.files.wordpress.com/2016/01/mad-max-fury-road-poster2.jpg',
     title: 'Mad Max: Fury Road',
     genre: ['Sci-fi', 'Action', 'Adventure'],
     rating: 8.3
}, {
     img: 'https://i.pinimg.com/736x/a8/fc/af/a8fcaf6b1f21a0cc1bd3483f332af28e--hunger-games-mockingjay-the-hunger-games.jpg',
     title: 'The Hunger Games: Mo...',
     genre: ['Sci-fi', 'Action', 'Adventure'],
     rating: 9.2
}, {
     img: 'https://www.bleedingcool.com/wp-content/uploads/2018/04/avengers-infinity-war-poster-6.jpg',
     title: 'Avengers: Inifinity War',
     genre: ['Fantasy', 'Action', 'Adventure'],
     rating: 9.8
}, {
     img: 'http://www.impawards.com/2015/posters/insurgent_ver13_xlg.jpg',
     title: 'Insurgent',
     genre: ['Sci-fi', 'Thriller', 'Drama'],
     rating: 7.5
}, {
     img: 'http://www.reellifewithjane.com/wp-content/uploads/2015/09/Everest-Poster.jpg',
     title: 'Everest',
     genre: ['Drama/Disaster', 'Adventure', 'Action'],
     rating: 8.1
}, {
     img: 'https://static.posters.cz/image/750/plakaty/blade-runner-2049-fire-ice-i50059.jpg',
     title: 'Blade Runner 2049',
     genre: ['Sci-fi', 'Fantasy', 'Action'],
     rating: 8.8
}];

var globalState = exports.globalState = {
     count: 0,
     movieCards: movieCards
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.default = Content;

var _hyperapp = __webpack_require__(0);

function Content(_ref) {
     var state = _ref.state,
         actions = _ref.actions;

     var loopMovieCards = function loopMovieCards() {
          return state.globalState.movieCards.map(function (item) {
               return (0, _hyperapp.h)(
                    "div",
                    { "class": "card" },
                    (0, _hyperapp.h)("img", { "class": "card-img-top", src: item.img, alt: "Card image cap" }),
                    (0, _hyperapp.h)(
                         "div",
                         { "class": "card-body" },
                         (0, _hyperapp.h)(
                              "h5",
                              { "class": "card-title" },
                              item.title
                         ),
                         (0, _hyperapp.h)(
                              "h6",
                              { "class": "card-subtitle mb-2 text-muted" },
                              item.genre
                         ),
                         (0, _hyperapp.h)(
                              "div",
                              { "class": "rating" },
                              (0, _hyperapp.h)("div", { "class": "ion-ios-heart" }),
                              (0, _hyperapp.h)(
                                   "h5",
                                   { id: "numberRating" },
                                   item.rating
                              )
                         ),
                         (0, _hyperapp.h)(
                              "a",
                              { href: "#", "class": "" },
                              (0, _hyperapp.h)(
                                   "div",
                                   { id: "corner-triangle" },
                                   (0, _hyperapp.h)(
                                        "span",
                                        { "class": "triangle-text" },
                                        "+"
                                   )
                              )
                         )
                    )
               );
          });
     };

     return (0, _hyperapp.h)(
          "div",
          { "class": "container allcontent" },
          (0, _hyperapp.h)(
               "div",
               { "class": "container searchbar" },
               (0, _hyperapp.h)(
                    "div",
                    { "class": "container searchlabels" },
                    (0, _hyperapp.h)(
                         "ul",
                         null,
                         (0, _hyperapp.h)(
                              "li",
                              { "class": "activeli" },
                              (0, _hyperapp.h)("div", { "class": "ion-videocamera icon" }),
                              (0, _hyperapp.h)(
                                   "a",
                                   { href: "#", "class": "activelink" },
                                   "in theaters"
                              )
                         ),
                         (0, _hyperapp.h)(
                              "li",
                              { "class": "" },
                              (0, _hyperapp.h)("div", { "class": "ion-ios-timer icon" }),
                              (0, _hyperapp.h)(
                                   "a",
                                   { href: "#" },
                                   "coming soon"
                              )
                         ),
                         (0, _hyperapp.h)(
                              "li",
                              { "class": "" },
                              (0, _hyperapp.h)("div", { "class": "ion-ios-pie icon" }),
                              (0, _hyperapp.h)(
                                   "a",
                                   { href: "#" },
                                   "charts"
                              )
                         ),
                         (0, _hyperapp.h)(
                              "li",
                              { "class": "" },
                              (0, _hyperapp.h)("div", { "class": "ion-ios-monitor icon" }),
                              (0, _hyperapp.h)(
                                   "a",
                                   { href: "#" },
                                   "tv series"
                              )
                         ),
                         (0, _hyperapp.h)(
                              "li",
                              { "class": "" },
                              (0, _hyperapp.h)("div", { "class": "ion-ios-film icon" }),
                              (0, _hyperapp.h)(
                                   "a",
                                   { href: "#" },
                                   "trailers"
                              )
                         ),
                         (0, _hyperapp.h)(
                              "li",
                              { "class": "" },
                              (0, _hyperapp.h)(
                                   "div",
                                   { "class": "dropdown show" },
                                   (0, _hyperapp.h)("div", { "class": "ion-ios-film icon" }),
                                   (0, _hyperapp.h)(
                                        "a",
                                        { "class": "btn btn-secondary dropdown-toggle", href: "#", role: "button", id: "dropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                                        "More"
                                   )
                              )
                         ),
                         (0, _hyperapp.h)(
                              "li",
                              null,
                              (0, _hyperapp.h)(
                                   "button",
                                   { type: "button", "class": "btn" },
                                   (0, _hyperapp.h)("div", { "class": "ion-android-star icon" }),
                                   (0, _hyperapp.h)(
                                        "span",
                                        null,
                                        "179"
                                   )
                              )
                         )
                    )
               ),
               (0, _hyperapp.h)(
                    "div",
                    { "class": "row rating-search-bar" },
                    (0, _hyperapp.h)(
                         "div",
                         { "class": "col-12 col-md-8" },
                         (0, _hyperapp.h)(
                              "div",
                              { "class": "iconwrap", style: { display: 'inline-block' } },
                              (0, _hyperapp.h)("div", { "class": "ion-navicon-round icon" }),
                              (0, _hyperapp.h)("div", { "class": "ion-grid icon" })
                         ),
                         (0, _hyperapp.h)(
                              "div",
                              { "class": "rating-bar-wrapper", style: { display: 'inline-block' } },
                              (0, _hyperapp.h)(
                                   "h5",
                                   null,
                                   "IMDb Rating"
                              ),
                              (0, _hyperapp.h)(
                                   "div",
                                   { "class": "rating-bar" },
                                   (0, _hyperapp.h)("div", { "class": "circle a" }),
                                   (0, _hyperapp.h)("div", { "class": "circle b" }),
                                   (0, _hyperapp.h)(
                                        "div",
                                        { id: "ratewrap" },
                                        (0, _hyperapp.h)(
                                             "span",
                                             { id: "rate" },
                                             "6.8"
                                        ),
                                        (0, _hyperapp.h)("div", { id: "point" })
                                   ),
                                   (0, _hyperapp.h)("div", { "class": "filler-bar inner" }),
                                   (0, _hyperapp.h)("div", { "class": "filler-bar fill" })
                              )
                         )
                    ),
                    (0, _hyperapp.h)(
                         "div",
                         { "class": "col-6 col-md-4" },
                         (0, _hyperapp.h)(
                              "form",
                              null,
                              (0, _hyperapp.h)(
                                   "div",
                                   { "class": "form-group" },
                                   (0, _hyperapp.h)("a", { href: "#", "class": "ion-ios-search-strong" }),
                                   (0, _hyperapp.h)("input", { type: "text", "class": "form-control" })
                              )
                         )
                    )
               )
          ),
          (0, _hyperapp.h)(
               "div",
               { "class": "container content" },
               loopMovieCards()
          ),
          (0, _hyperapp.h)(
               "div",
               { "class": "container bottom" },
               (0, _hyperapp.h)("div", { "class": "ion-load-a" })
          )
     );
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
     var state = _ref.state,
         actions = _ref.actions;

     return (0, _hyperapp.h)(
          "div",
          { "class": "jain-container footer" },
          (0, _hyperapp.h)(
               "div",
               { "class": "row top" },
               (0, _hyperapp.h)(
                    "div",
                    { "class": "col-sm-4 f" },
                    (0, _hyperapp.h)(
                         "h5",
                         { id: "brand" },
                         "IMDb"
                    )
               ),
               (0, _hyperapp.h)(
                    "div",
                    { "class": "col-sm-4 s" },
                    (0, _hyperapp.h)(
                         "div",
                         { "class": "icons" },
                         (0, _hyperapp.h)("div", { "class": "ion-social-twitter" }),
                         (0, _hyperapp.h)("div", { "class": "ion-social-facebook" }),
                         (0, _hyperapp.h)("div", { "class": "ion-social-instagram" })
                    )
               ),
               (0, _hyperapp.h)(
                    "div",
                    { "class": "col-sm-4 t" },
                    (0, _hyperapp.h)(
                         "h6",
                         { id: "copyright" },
                         "1990-2015 IMDB.COM, INC."
                    )
               )
          ),
          (0, _hyperapp.h)(
               "div",
               { "class": "row bottom" },
               (0, _hyperapp.h)(
                    "div",
                    { "class": "col-sm" },
                    (0, _hyperapp.h)("div", { "class": "borderline" }),
                    (0, _hyperapp.h)(
                         "h6",
                         { "class": "" },
                         "show menu"
                    )
               )
          )
     );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
     var state = _ref.state,
         actions = _ref.actions;

     return (0, _hyperapp.h)(
          "div",
          { "class": "lg-container" },
          (0, _hyperapp.h)(
               "div",
               { "class": "jain-container" },
               (0, _hyperapp.h)(
                    "div",
                    { "class": "jumbotron" },
                    (0, _hyperapp.h)(
                         "nav",
                         { "class": "navbar navbar-expand-md  navbar-dark " },
                         (0, _hyperapp.h)(
                              "a",
                              { "class": "navbar-brand", href: "#" },
                              (0, _hyperapp.h)("img", { src: "http://www.razmag.com/wp-content/uploads/2015/10/Screen-Shot-2015-10-15-at-09.17.42.png" })
                         ),
                         (0, _hyperapp.h)(
                              "button",
                              { "class": "navbar-toggler custom-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNavDropdown", "aria-controls": "navbarNavDropdown", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                              (0, _hyperapp.h)("span", { "class": "navbar-toggler-icon" })
                         ),
                         (0, _hyperapp.h)(
                              "div",
                              { "class": "collapse navbar-collapse", id: "navbarNavDropdown" },
                              (0, _hyperapp.h)(
                                   "ul",
                                   { "class": "navbar-nav" },
                                   (0, _hyperapp.h)(
                                        "li",
                                        { "class": "nav-item dropdown position-relative" },
                                        (0, _hyperapp.h)(
                                             "a",
                                             { "class": "nav-link dropdown-toggle effect-1", href: "https://bootstrapthemes.co", id: "navbarDropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                                             "Movies"
                                        )
                                   ),
                                   (0, _hyperapp.h)(
                                        "li",
                                        { "class": "nav-item dropdown position-relative" },
                                        (0, _hyperapp.h)(
                                             "a",
                                             { "class": "nav-link dropdown-toggle", href: "https://bootstrapthemes.co", id: "navbarDropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                                             "Gallery"
                                        )
                                   ),
                                   (0, _hyperapp.h)(
                                        "li",
                                        { "class": "nav-item dropdown position-relative" },
                                        (0, _hyperapp.h)(
                                             "a",
                                             { "class": "nav-link dropdown-toggle", href: "https://bootstrapthemes.co", id: "navbarDropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                                             "Community"
                                        )
                                   ),
                                   (0, _hyperapp.h)(
                                        "li",
                                        { "class": "nav-item dropdown position-relative" },
                                        (0, _hyperapp.h)(
                                             "a",
                                             { "class": "nav-link dropdown-toggle", href: "https://bootstrapthemes.co", id: "navbarDropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                                             "News"
                                        )
                                   )
                              )
                         )
                    ),
                    (0, _hyperapp.h)(
                         "div",
                         { "class": "container hero" },
                         (0, _hyperapp.h)(
                              "div",
                              { "class": "row" },
                              (0, _hyperapp.h)(
                                   "div",
                                   { "class": "col-md-12" },
                                   (0, _hyperapp.h)(
                                        "h1",
                                        { "class": "display-4" },
                                        "The Martian"
                                   ),
                                   (0, _hyperapp.h)(
                                        "h5",
                                        { "class": "label" },
                                        "adventure"
                                   ),
                                   (0, _hyperapp.h)(
                                        "h5",
                                        { "class": "label" },
                                        "sci-fi"
                                   ),
                                   (0, _hyperapp.h)(
                                        "h5",
                                        { "class": "label" },
                                        "thriller"
                                   ),
                                   (0, _hyperapp.h)(
                                        "a",
                                        { href: "#" },
                                        (0, _hyperapp.h)(
                                             "div",
                                             { "class": "btn-wrap" },
                                             (0, _hyperapp.h)(
                                                  "button",
                                                  { id: "playButton" },
                                                  (0, _hyperapp.h)(
                                                       "span",
                                                       null,
                                                       "Watch Trailer"
                                                  ),
                                                  (0, _hyperapp.h)(
                                                       "div",
                                                       { id: "circlewrap" },
                                                       (0, _hyperapp.h)("div", { "class": "ion-ios-play" })
                                                  )
                                             )
                                        )
                                   )
                              )
                         ),
                         (0, _hyperapp.h)(
                              "div",
                              { "class": "row datetext" },
                              (0, _hyperapp.h)(
                                   "div",
                                   { "class": "col-md-12" },
                                   (0, _hyperapp.h)(
                                        "h5",
                                        { "class": "releaseDate", id: "location" },
                                        "In theaters"
                                   ),
                                   (0, _hyperapp.h)(
                                        "h5",
                                        { "class": "releaseDate", id: "date" },
                                        "15 Oct, 2015 (USA)"
                                   )
                              )
                         )
                    ),
                    (0, _hyperapp.h)("div", { "class": "row hero-2" })
               )
          )
     );
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
     var state = _ref.state,
         actions = _ref.actions;

     return (0, _hyperapp.h)(
          "section",
          null,
          (0, _hyperapp.h)(
               "div",
               { "class": "container" },
               (0, _hyperapp.h)("div", { "class": "wide" })
          )
     );
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[17]);