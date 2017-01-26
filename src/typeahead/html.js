/*
 * typeahead.js
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */
    // suggestions: "<div class='clipper'> <div class='wrapper'> <span class='tt-suggestions'></span> </div> <div class='scroller__track__y'> <div class='bar__y'></div> </div> </div> ",

var html = (function() {
  return {
    wrapper: '<span class="twitter-typeahead"></span>',
    dropdown: '<span class="tt-dropdown-menu"></span>',
    dataset: '<div class="tt-dataset-%CLASS%"></div>',
    suggestions: "<span class='tt-suggestions'></span>",
    suggestion: '<div class="tt-suggestion"></div>'
  };
})();
