var groups = {
"Javascript source processing": [
   "Parsers"
  ,"AST formats"
  ,"AST traversal"
  ,"Pretty printers"
  ,"Templates"
  ,"Minifiers"
  ,"Source queries"
  ,"Source difference tools"
  ,"Source instrumentation"
  ,"Source transformation"
  ,"Language extensions"
  ,"Source maps"
  ],

"Formatted text processing": [
   "Parser combinators"
  ,"Parser generators"
  ],

"Javascript analysis": [
   "Documentation processors"
  ,"Linters"
  ,"Static analysis"
  ,"Tags generators"
  ,"Type checking/inference"
  ],

"Javascript editing": [
   "Editors"
  ,"IDEs"
  ,"Vim plugins"
  ,"Emacs plugins"
  ],

"Javascript debugging and profiling": [
   "Consoles"
  ,"Debuggers"
  ,"Remote debugging"
  ,"Contracts"
  ,"Testing"
  ],

"Javascript engines": null,

"Javascript reading": [
   "Blogs"
  ,"Mailing Lists"
  ,"Publications"
  ,"Screencasts"
  ,"Talks"
  ,"Other resource listings"
  ],

"Miscellaneous": null

};

var group = {};
(function(){
for (var g in groups)
  if (groups[g] && groups.hasOwnProperty(g))
    for(var i=0; i<groups[g].length; i++)
      group[groups[g][i]] = g;
})();
