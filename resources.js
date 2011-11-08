// TODO: add library dependencies
//       add tool dependencies/implemented in?
//         (what about alternative dependency sets?)
//       document licenses?
//       escape for HTML

var resources = [

{ "name"        : "PEG.js"
, "url"         : "https://github.com/dmajda/pegjs"
, "description" : ["PEG.js is a simple parser generator for JavaScript that produces fast parsers with excellent error reporting. You can use it to process complex data or computer languages and build transformers, interpreters, compilers and other tools easily."]
, "categories"  : ["Parser generators"]
},

{ "name"        : "jsparse"
, "url"         : "http://github.com/doublec/jsparse"
, "description" : ["jsparse is a simple library of parser combinators for Javascript based on Packrat parsers and Parsing expression grammars."]
, "categories"  : ["Parser combinators"]
},

{ "name"        : "jstr"
, "url"         : "https://github.com/clausreinke/jstr"
, "description" : ["jstr currently consists of an updated version of jsparse, with a grammar edging ever closer to ES5."]
, "categories"  : ["Parser combinators"]
},

{ "name"        : "Jison"
, "url"         : "https://github.com/zaach/jison"
, "description" : ["Jison generates bottom-up parsers in JavaScript. Its API is similar to Bison's, hence the name. It supports many of Bison's major features, plus some of its own. If you are new to parser generators such as Bison, and Context-free Grammars in general, a good introduction is found in the Bison manual. If you already know Bison, Jison should be easy to pickup."]
, "categories"  : ["Parser generators"]
},

{ "name"        : "ANTLR"
, "url"         : "http://www.antlr.org/wiki/display/ANTLR3/ANTLR3JavaScriptTarget"
, "description" : ["ANTLR, ANother Tool for Language Recognition, is a language tool that provides a framework for constructing recognizers, interpreters, compilers, and translators from grammatical descriptions containing actions in a variety of target languages. ANTLR provides excellent support for tree construction, tree walking, translation, error recovery, and error reporting.","The ANTLR 3 JavaScript target is available for the first time in the ANTLR 3.1 release.  Being new, this target is in beta state. This means that most parts are working (and passing a large suite of functional tests), but bugs and problems are to be expected and documentation is pretty poor."]
, "categories"  : ["Parser generators"]
},

{ "name"        : "JS/CC"
, "url"         : "http://jscc.jmksf.com/"
, "description" : ["LALR(1) parser and lexical analyzer generator for JavaScript, written in JavaScript. It has been developed, both, with the intention of building a productive compiler development system and with the intention of creating an easy-to-use academic environment for people interested in how parse table generation is done general in bottom-up parsing."]
, "categories"  : ["Parser generators"]
},

{ "name"        : "ometa.js"
, "url"         : "https://github.com/alexwarth/ometa-js"
, "description" : ["OMeta is a new object-oriented language for pattern matching. It is based on a variant of Parsing Expression Grammars (PEGs) which we have extended to handle arbitrary data types. OMeta's general-purpose pattern matching facilities provide a natural and convenient way for programmers to implement tokenizers, parsers, visitors, and tree transformers, all of which can be extended in interesting ways using familiar object-oriented mechanisms."]
, "categories"  : ["Parser generators"]
},

{ "name"        : "SpiderMonkey Parser API"
, "url"         : "https://developer.mozilla.org/en/SpiderMonkey/Parser_API"
, "description" : ["Recent builds of the standalone SpiderMonkey shell include a reflection of the SpiderMonkey parser, made available as a JavaScript API. This makes it easier to write tools in JavaScript that manipulate JavaScript source programs, such as syntax highlighters, static analyses, translators, compilers, obfuscators, etc."]
, "categories"  : ["Javascript parsers","Javascript AST formats"]
},

{ "name"        : "SpiderMonkey"
, "url"         : "https://developer.mozilla.org/SpiderMonkey"
, "description" : ["SpiderMonkey is Mozilla's JavaScript engine written in C/C++. It is used in various Mozilla products, including Firefox, and is available under MPL/GPL/LGPL tri-license.  The most recent standalone source code release implements JavaScript 1.8.5, and is largely the same engine that shipped with Firefox 4."]
, "categories"  : ["Javascript engines"]
},

{ "name"        : "Rhino"
, "url"         : "http://www.mozilla.org/rhino/"
, "description" : ["Rhino is an open-source implementation of JavaScript written entirely in Java. It is typically embedded into Java applications to provide scripting to end users."]
, "categories"  : ["Javascript engines"]
},

{ "name"        : "v8"
, "url"         : "http://code.google.com/p/v8/"
, "description" : ["V8 is Google's open source JavaScript engine.  V8 is written in C++ and is used in Google Chrome, the open source browser from Google.  V8 implements ECMAScript as specified in ECMA-262, 5th edition, and runs on Windows (XP or newer), Mac OS X (10.5 or newer), and Linux systems that use IA-32, x64, or ARM processors.  V8 can run standalone, or can be embedded into any C++ application."]
, "categories"  : ["Javascript engines"]
},

{ "name"        : "JavaScriptCore"
, "url"         : "http://www.webkit.org/projects/javascript/index.html"
, "description" : ["This is the project page for WebKit's JavaScript implementation. WebKit's JavaScript engine, JavaScriptCore, based on KJS, is a framework separate from WebCore and WebKit, and is used on Mac OS X for applications other than web page JavaScript."]
, "categories"  : ["Javascript engines"]
},

{ "name"        : "Narcissus"
, "url"         : "https://github.com/mozilla/narcissus"
, "description" : ["Narcissus is a JavaScript interpreter written in pure JavaScript (i.e., a meta-circular evaluator), using the SpiderMonkey engine.  Originally a proof-of-concept by Brendan Eich, Narcissus is being revived as a test-bed for rapidly prototyping new language features for the JavaScript language (as well as the ECMAScript standard)."]
, "categories"  : ["Javascript parsers", "Javascript engines"]
},

{ "name"        : "PhantomJS"
, "url"         : "http://www.phantomjs.org/"
, "description" : ["PhantomJS is a command-line tool that packs and embeds WebKit. Literally it acts like any other WebKit-based web browser, except that nothing gets displayed to the screen (thus, the term headless). In addition to that, PhantomJS can be controlled or scripted using its JavaScript API. PhantomJS is an optimal solution for headless testing of web-based applications, site scraping, pages capture, SVG renderer, PDF converter and many other use cases."]
, "categories"  : ["JavaScript engines","Testing"]
},

{ "name"        : "JSLint"
, "url"         : "http://www.jslint.com"
, "description" : ["JSLint takes a JavaScript source and scans it. If it finds a problem, it returns a message describing the problem and an approximate location within the source. The problem is not necessarily a syntax error, although it often is. JSLint looks at some style conventions as well as structural problems. It does not prove that your program is correct. It just provides another set of eyes to help spot problems."]
, "categories"  : ["Javascript parsers", "Linters"]
},

{ "name"        : "uglify"
, "url"         : "https://github.com/mishoo/UglifyJS/"
, "description" : ["This package implements a general-purpose JavaScript parser/compressor/beautifier toolkit. It is developed on NodeJS, but it should work on any JavaScript platform supporting the CommonJS module system (and if your platform of choice doesn’t support CommonJS, you can easily implement it, or discard the exports.* lines from UglifyJS sources).  The tokenizer/parser generates an abstract syntax tree from JS code. You can then traverse the AST to learn more about the code, or do various manipulations on it."]
, "categories"  : ["Javascript parsers", "Minifiers", "Pretty printers"]
},

{ "name"        : "ZeParser"
, "url"         : "https://github.com/qfox/zeparser"
, "description" : ["JavaScript parser."]
, "categories"  : ["Javascript parsers"]
},

{ "name"        : "ANTLR"
, "url"         : "http://www.antlr.org/grammar/1206736738015/JavaScript.g"
, "description" : ["Javascript grammar for ANTLR."]
, "categories"  : ["Javascript parsers"]
},

{ "name"        : "ometa.js/esparser"
, "url"         : "http://es-lab.googlecode.com/svn/trunk/site/esparser/index.html"
, "description" : ["An OMeta-based parser for Ecmascript 5, written in Javascript, generating a JsonML-based AST."]
, "categories"  : ["Javascript parsers"]
},

{ "name"        : "jison/reflect.js"
, "url"         : "https://github.com/zaach/reflect.js"
, "description" : ["Reflect.js is a JavaScript (ES3 compatible) implementation of Mozilla's Parser API. It does not currently support some of Mozilla's extensions, such as generators, list comprehensions, for each, E4X, etc. but may eventually support ones that are, or become Harmony proposals. Builders are also supported."]
, "categories"  : ["Javascript parsers"]
},

{ "name"        : "javascript.peg.js"
, "url"         : "https://github.com/dmajda/pegjs/blob/master/examples/javascript.pegjs"
, "description" : ["JavaScript parser based on the grammar described in ECMA-262, 5th ed. (http://www.ecma-international.org/publications/standards/Ecma-262.htm). The parser builds a tree representing the parsed JavaScript, composed of basic JavaScript values, arrays and objects (basically JSON). It can be easily used by various JavaScript processors, transformers, etc."]
, "categories"  : ["Javascript parsers"]
},

{ "name"        : "jstr/es5.js"
, "url"         : "https://github.com/clausreinke/jstr"
, "description" : ["Incomplete/work-in-progress ECMAScript 5 grammar."]
, "categories"  : ["Javascript parsers"]
},

{ "name"        : "JsonMLAST"
, "url"         : "http://code.google.com/p/es-lab/wiki/JsonMLASTFormat"
, "description" : ["The JsonML AST format used by the es-lab es5 parser."]
, "categories"  : ["Javascript AST formats"]
},

{ "name"        : "ES Wiki strawman:ast"
, "url"         : "http://wiki.ecmascript.org/doku.php?id=strawman:ast"
, "description" : ["A placeholder for a Harmony specification for a parser which parses ECMAScript text into a standard abstract syntax tree made up of ECMAScript objects."]
, "categories"  : ["Javascript AST formats"]
},

{ "name"        : "Javascript Lint"
, "url"         : "http://www.javascriptlint.com/"
, "description" : ["With JavaScript Lint, you can check all your JavaScript source code for common mistakes without actually running the script or opening the web page.  JavaScript Lint holds an advantage over competing lints because it is based on the JavaScript engine for the Firefox browser. This provides a robust framework that can not only check JavaScript syntax but also examine the coding techniques used in the script and warn against questionable practices."]
, "categories"  : ["Linters"]
},

{ "name"        : "JSHint"
, "url"         : "http://www.jshint.com/"
, "description" : ["JSHint is a community-driven tool to detect errors and potential problems in JavaScript code and to enforce your team's coding conventions.  It is very flexible so you can easily adjust it to your particular coding guidelines and the environment you expect your code to execute in."]
, "categories"  : ["Javascript parsers", "Linters"]
},

{ "name"        : "Zeon"
, "url"         : "https://github.com/qfox/Zeon"
, "description" : ["A static visual JavaScript analyzer / editor."]
, "categories"  : ["Editors", "Static analysis", "Linters"]
},

{ "name"        : "closure linter"
, "url"         : "http://code.google.com/p/closure-linter/"
, "description" : ["The Closure Linter enforces the guidelines set by the Google JavaScript Style Guide. The linter handles style issues so that you can focus on the code."]
, "categories"  : ["Linters"]
},

{ "name"        : "doctorjs"
, "url"         : "https://github.com/mozilla/doctorjs"
, "description" : ["A set of static analysis tools for JavaScript. jsctags is a ctags-compatible code indexing solution for JavaScript. Its interface and output are essentially identical to Exuberant Ctags, but, instead of simply parsing the JavaScript, jsctags uses a simple form of abstract interpretation to determine which symbols are exported. This allows jsctags to achieve much better results than Exuberant Ctags. Popular libraries such as jQuery and CommonJS modules can now be meaningfully indexed.","You can use jsctags to create tags files that are usable in many editors, from Vim to TextMate (via the CodeBrowser plugin). jsctags is slated to become a key component of the Bespin IDE, where it will be used to provide code completion.","jsctags is written entirely in JavaScript, using CommonJS modules, the node.js framework, and the Narcissus engine."]
, "categories"  : ["Type inference", "Static analysis", "Tags generators"]
},

{ "name"        : "doctorjs (with scoped tags)"
, "url"         : "https://github.com/clausreinke/doctorjs"
, "description" : ["A fork of doctorjs, supporting generation of scope-aware tags for local declarations and parameters."]
, "categories"  : ["Tags generators"]
},

{ "name"        : "doctorjs--"
, "url"         : "https://github.com/pcwalton/doctorjsmm"
, "description" : ["DoctorJS-- is a simple static analysis tool for JavaScript, written in CoffeeScript. It uses a cut-down version of Brian Hackett's type inference algorithm, which is now part of the SpiderMonkey JavaScript engine (used in Firefox). Its output is in Exuberant Ctags format.","DoctorJS-- is neither as precise nor as sophisticated (nor, right now, as complete) as its big brother DoctorJS, but on the plus side it's designed to be small and easy to hack. If you need to do anything sophisticated, please use DoctorJS instead!"]
, "categories"  : ["Type inference","Static analysis"]
},

{ "name"        : "JavaScript Type Inference in NetBeans"
, "url"         : "http://blogs.oracle.com/tor/entry/javascript_type_inference"
, "description" : ["Blog post detailing use of type inference for completion support."]
, "categories"  : ["Type inference"]
},

{ "name"        : "Closure Compiler"
, "url"         : "http://code.google.com/p/closure-compiler/"
, "description" : ["The Closure Compiler is a tool for making JavaScript download and run faster. It is a true compiler for JavaScript. Instead of compiling from a source language to machine code, it compiles from JavaScript to better JavaScript. It parses your JavaScript, analyzes it, removes dead code and rewrites and minimizes what's left. It also checks syntax, variable references, and types, and warns about common JavaScript pitfalls."]
, "categories"  : ["Type checking","Minifiers"]
},

{ "name"        : "js_contracts"
, "url"         : "https://github.com/urso/js_contracts"
, "description" : ["Type description combinators for javascript. js_contracts offers very simple dynamic type checking combinators to be used directly within your JavaScript programs/libraries or optionally as extensions by defining Signatures which will be mixed into your existing programs/libraries using Aspect Oriented Programming techniques. Due to the simplicity of the combinators one can insert even extensive type checks with very minimal effort.  Using Signatures to be mixed in one can opt to use Signatures while development and then leaving them out when deploying. Library authors may want to ship developer versions with Signature files and deployment versions without type checking (which will additionally reduce source size). So 'dynamic' type checking is fully optional and the extra cycles needed to do type checking can be omitted when deploying later."]
, "categories"  : ["Runtime contract checking"]
},
 
{ "name"        : "uglify/burrito"
, "url"         : "https://github.com/substack/node-burrito"
, "description" : ["Given some source code and a function trace, walk the ast by expression, with a callback function that gets called with a node object."]
, "categories"  : ["Traversal"]
},

{ "name"        : "uglify/treehugger"
, "url"         : "https://github.com/ajaxorg/treehugger"
, "description" : ["treehugger.js is a Javascript library for program processing. It has generic means to represent and manipulate (analyze, transform) abstract syntax trees (ASTs). It consists of three parts: A generic ASTs representation format, inspired by ATerms) that can be used to represent programs written in any language (Java, Ruby, Javascript). A set of generic traversals to query, manipulate and annotate these ASTs, inspired by Stratego/XT. A set of analyses for specific languages."]
, "categories"  : ["Traversal"]
},

//  narcissus/treehugger  (replaced by above)
//  narcissus/doctorjs    (recursive default traversal with overrides)

{ "name"        : "js-traverse"
, "url"         : "https://github.com/substack/js-traverse"
, "description" : ["Traverse and transform objects by visiting every node on a recursive walk."]
, "categories"  : ["Traversal"]
},

{ "name"        : "JSShaper"
, "url"         : "https://github.com/olov/jsshaper"
, "description" : ["JSShaper is an extensible framework for JavaScript syntax tree shaping. JSShaper and its plugins are implemented in JavaScript. Syntax tree shaping means performing complex manipulations to a syntax tree representation of your textual source code, and then turning it back into source code again. JSShaper goes very far to keep all your source code formatting, intendation, whitespace and comments."]
, "categories"  : ["Traversal","Source transformation"]
},

// TODO: sort out traversal and transformation tags:
// traversal can support analysis and transformation,
// code queries, ast transformation, source transformation,
// general vs specific transformation: transpilers, instrumented code, ..

{ "name"        : "stackedy"
, "url"         : "https://github.com/substack/node-stackedy"
, "description" : ["Roll your own stack traces and control program execution through AST manipulation."]
, "categories"  : ["Source instrumentation"]
},

{ "name"        : "bunker"
, "url"         : "https://github.com/substack/node-bunker"
, "description" : ["Bunker is a module to calculate code coverage using native javascript burrito AST trickery."]
, "categories"  : ["Source instrumentation"]
},

{ "name"        : "detective"
, "url"         : "https://github.com/substack/node-detective"
, "description" : ["Find all calls to require() no matter how crazily nested using a proper walk of the AST."]
, "categories"  : ["Source queries"]
},

{ "name"        : "Browserify"
, "url"         : "https://github.com/substack/node-browserify"
, "description" : ["use npm modules in the browser; require()s work browser-side just as they do in node; coffee script just works; lots of node builtins just work: require('events'), require('path'), require('vm'), require('querystring'); lots of ways to compile; watch mode automatically recompiles your bundle when files change"]
, "categories"  : ["(to be sorted)"]
},

{ "name"        : "es-lab"
, "url"         : "http://code.google.com/p/es-lab/"
, "description" : ["Experiments with proposed extensions to EcmaScript. The core of a SES (Secure EcmaScript) runtime. Membranes to be built on ES-Harmony Proxies and WeakMaps.  traits.js, a traits library for ES5 that is backwards-compatible with ES3."]
, "categories"  : ["Language extensions"]
},

{ "name"        : "traceur"
, "url"         : "http://code.google.com/p/traceur-compiler/"
, "description" : ["Traceur is a JavaScript.next-to-JavaScript-of-today compiler that allows you to use features from the future today. Traceur's goal is to inform the design of new JavaScript features which are only valuable if they allow you to write better code. Traceur allows you to try out new and proposed language features today, helping you say what you mean in your code while informing the standards process.","Traceur is a compiler that takes Javascript including some new enhancements like classes and generators, and compiles it down to regular Javascript that runs in your browser. Traceur itself is written in Javascript, which means you can host the compiler directly in your pages and compile Traceur code on the fly."]
, "categories"  : ["Language extensions"]
},

{ "name"        : "reflect.js/es-next"
, "url"         : "http://zaach.github.com/reflect.js/es-next/"
, "description" : ["This is an experimental ES.next->ES5 transpiler.  What works: the <| operator -- defines the [[Prototype]] of a literal (uses __proto__); the .{ operator -- extends the LHS object with properties from an object literal; object literal property shorthand -- {x, y} -> {x: x, y: y}"]
, "categories"  : ["Language extensions"]
},

{ "name"        : "Experimental Harmony Features"
, "url"         : "https://github.com/allenwb/narcissus/blob/master/harmony-extensions.md"
, "description" : ["This version of Narcissus supports the following experimental language extensions. Concise Method Properties in Object Literals. Comma Optional After Method and Accessor Properties in Object Literals. The <| Operator. super References in Methods. Object Extension Literals. Computed Property Names in Object Literals. To use these extensions njs must be invoked using the -H switch. Note that Narcissus already supports various other Harmony features such as const and let declarations."]
, "categories"  : ["Language extensions"]
},

{ "name"        : "Firebug"
, "url"         : "http://getfirebug.com"
, "description" : ["Firebug integrates with Firefox to put a wealth of web development tools at your fingertips while you browse. You can edit, debug, and monitor CSS, HTML, and JavaScript live in any web page."]
, "categories"  : ["Debuggers", "Consoles"]
},

{ "name"        : "Console API"
, "url"         : "http://getfirebug.com/wiki/index.php/Console_API"
, "description" : ["Firebug adds a global variable named 'console' to all web pages loaded in Firefox. This object contains many methods that allow you to write to the Firebug console to expose information that is flowing through your scripts."]
, "categories"  : ["Consoles"]
},

{ "name"        : "Firebug Lite"
, "url"         : "http://getfirebug.com/firebuglite"
, "description" : ["Firebug Lite: doing the Firebug way, anywhere. Compatible with all major browsers: IE6+, Firefox, Opera, Safari and Chrome. Same look and feel as Firebug. Inspect HTML and modify style in real-time. Powerful console logging functions. Rich representation of DOM elements. Extend Firebug Lite and add features to make it even more powerful."]
, "categories"  : ["Debuggers", "Consoles"]
},

{ "name"        : "Dragonfly"
, "url"         : "http://www.opera.com/dragonfly/"
, "description" : ["Fully-featured suite of developer tools, designed to make your job easier."]
, "categories"  : ["Debuggers", "Consoles","Remote debugging"]
},
//  (also portable version?)

// built-in debuggers
//  safari
//  firefox
//  internet explorer
//  node/v8

{ "name"        : "F12 Developer Tools"
, "url"         : "http://msdn.microsoft.com/en-us/ie/aa740478"
, "description" : ["Internet Explorer 8 was the first browser to provide built-in developer tools to aid developers in rapid prototyping, testing, and debugging webpages, and allowing them to see their changes as they made them, directly in the browser. New in Internet Explorer 9 are a user-agent switching tool, a network traffic inspector, an improved JavaScript profiler, and integrated support for new web standards introduced with Internet Explorer 9."]
, "categories"  : ["Debuggers", "Consoles"]
},

{ "name"        : "weinre - Web Inspector Remote"
, "url"         : "http://phonegap.github.com/weinre/"
, "description" : ["It's designed to work remotely, and in particular, to allow you debug web pages on a mobile device such as a phone."]
, "categories"  : ["Debuggers", "Consoles","Remote debugging"]
},

{ "name"        : "Web Inspector"
, "url"         : "http://trac.webkit.org/wiki/WebInspector"
, "description" : ["The Web Inspector allows you to view the page source, live DOM hierarchy, script debugging, profiling and more!"]
, "categories"  : ["Debuggers", "Consoles"]
},

{ "name"        : "Google Chrome Developer Tools"
, "url"         : "http://code.google.com/intl/de-DE/chrome/devtools/"
, "description" : ["The Developer Tools, bundled and available in Chrome, allows web developers and programmers deep access into the internals of the browser and their web application. The Developer Tools are heavily based on the WebKit Web Inspector, a part of the open source WebKit project."]
, "categories"  : ["Debuggers", "Consoles","Remote debugging"]
},

{ "name"        : "Xebug"
, "url"         : "https://github.com/tlrobinson/xebug"
, "description" : ["Xebug (say: zee-bug) is a universal debugger for JavaScript, written in JavaScript. It will work in any JavaScript environment that provides a blocking input API (the prompt() function or synchronous XMLHttpRequest in web browsers, for example) and the opportunity to intercept JavaScript code before it is evaluated (hooks in client-side loaders, or via a HTTP proxy, etc).  Xebug works by automatically instrumenting JavaScript code with hooks into Xebug, therefore it incurs a significant performance penalty when enabled.  Currently the instrumentation is done using the JavaScript parser included with the Narcissus JavaScript interpreter (though the interpreter itself is not used)."]
, "categories"  : ["Debuggers", "Consoles"]
},

{ "name"        : "Crossfire"
, "url"         : "http://getfirebug.com/wiki/index.php/Crossfire"
, "description" : ["Crossfire is a Firebug extension which implements a JSON protocol to allow remote clients (like an IDE or code editor) to connect to Firebug. One of the main goals of Crossfire is to provide a simple and straight-forward method for tools in other processes to obtain the same kind of information that Firebug has about the Web pages the user is debugging."]
, "categories"  : ["Remote debugging"]
},

//profiling
//
//  time profiling (computation and communication)
//
//    most browser engine JS debuggers offer some form of time profiling
//    (function call counts/duration, network traffic log)
//
//  space profiling
//
//    not widely supported yet, with some notable exceptions
//
//    chrome developer tools have a (snapshot-based?) heap profiler
//      http://code.google.com/intl/de-DE/chrome/devtools/docs/heap-profiling.html
//    dragonfly has resources and storage inspectors, no profile
//    firefox has about:memory

{ "name"        : "ace"
, "url"         : "http://ace.ajax.org/"
, "description" : ["Ace is a standalone code editor written in JavaScript. Our goal is to create a web based code editor that matches and extends the features, usability and performance of existing native editors such as TextMate, Vim or Eclipse. It can be easily embedded in any web page and JavaScript application. Ace is developed as the primary editor for Cloud9 IDE and the successor of the Mozilla Skywriter (Bespin) Project."]
, "categories"  : ["Programmable editors"]
},

// catch-all query to find plugins noone has mentioned explicitly yet
{ "name"        : "vim"
, "url"         : "http://stackoverflow.com/search?q=javascript+vim"
, "description" : ["Stackoverflow on using Vim for Javascript."]
, "categories"  : ["Programmable editors"]
},

{ "name"        : "Local code navigation with scoped tags"
, "url"         : "https://github.com/clausreinke/scoped_tags"
, "description" : ["Scope-aware tag support for Vim, using extended tags file format with a field that indicates tag scope as a line:column range. We can then figure out which tags are in scope at cursor position, and in what range to search for other occurrences of a tag (blanking out nested scopes where our tag scope is shadowed). By giving the scopes as line:column-ranges, the handling of scopes can be mostly language-independent."]
, "categories"  : ["Vim plugins"]
},

// catch-all query to find plugins noone has mentioned explicitly yet
{ "name"        : "emacs"
, "url"         : "http://stackoverflow.com/search?q=javascript+emacs"
, "description" : ["Stackoverflow on using Emacs for Javascript."]
, "categories"  : ["Programmable editors"]
},

{ "name"        : "Javascript Mode"
, "url"         : "http://www.emacswiki.org/emacs/JavaScriptMode"
, "description" : ["For a long while there was debate and back-and-forth about Javascript support in emacs. There were a number of different options, in various stages of maturity and completion. As of emacs 23.2, there is a standard major mode for editing javascript: js-mode. You can still use any javascript major mode you like, but the main one will probably be js-mode going forward.  js-mode is part of Emacs since version 23.2 (with an alias javascript-mode). It is derived and updated from Espresso mode."]
, "categories"  : ["Emacs plugins"]
},

{ "name"        : "cloud9"
, "url"         : "http://www.cloud9ide.com/"
, "description" : ["Cloud9 is a state-of-the-art IDE that runs in your browser and lives in the cloud, allowing you to run, debug and deploy applications from anywhere, anytime."]
, "categories"  : ["IDEs"]
},

{ "name"        : "orion"
, "url"         : "http://wiki.eclipse.org/Orion"
, "description" : ["Orion's objective is to create a browser-based open tool integration platform which is entirely focused on developing for the web, in the web. Tools are written in JavaScript and run in the browser. Unlike other attempts at creating browser-based development tools, this is not an IDE running in a single tab. Links work and can be shared. You can open a file in a new tab. Great care has been taken to provide a web experience for development."]
, "categories"  : ["IDEs"]
},

{ "name"        : "netbeans"
, "url"         : "http://netbeans.org/kb/docs/ide/javascript-editor.html"
, "description" : ["The NetBeans IDE provides enhanced JavaScript editing features that are modeled on support already provided for Java, Ruby, and other languages. This guide provides an overview of those features."]
, "categories"  : ["IDEs"]
},

{ "name"        : "eclipse/jsdt"
, "url"         : "http://www.eclipse.org/webtools/jsdt/"
, "description" : ["The JavaScript Development Tools (JSDT) provide plug-ins that implement an IDE supporting the development of JavaScript applications and JavaScript within web applications. It adds a JavaScript project type and perspective to the Eclipse Workbench as well as a number of views, editors, wizards, and builders."]
, "categories"  : ["IDEs"]
},

{ "name"        : "JetBrains Javascript Editor"
, "url"         : "http://www.jetbrains.com/editors/javascript_editor.jsp"
, "description" : ["Features, including code completion, error highlighting and refactoring, quick-fixes and intention actions, are focused on developer productivity."]
, "categories"  : ["IDEs"]
},

{ "name"        : "vjet"
, "url"         : "http://www.ebayopensource.org/index.php/VJET/"
, "description" : ["VJET JavaScript IDE is an Eclipse plugin that provides a fully integrated development environment for JavaScript - from authoring, to execution/test, and debugging."]
, "categories"  : ["IDEs"]
},

{ "name"        : "jstestdriver"
, "url"         : "http://code.google.com/p/js-test-driver/"
, "description" : ["The goal of JsTestDriver is to build a JavaScript test runner which: easily integrates with continuous builds systems and allows running tests on multiple browsers quickly to ease TDD style development."]
, "categories"  : ["Testing"]
},

{ "name"        : "Jasmine"
, "url"         : "http://pivotal.github.com/jasmine/"
, "description" : ["Jasmine is a behavior-driven development framework for testing your JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests. Jasmine can be run anywhere you can execute JavaScript: a static web page, your continuous integration environment, or server-side environments like Node.js."]
, "categories"  : ["Testing"]
},

{ "name"        : "Google JS Test"
, "url"         : "http://code.google.com/p/google-js-test/"
, "description" : ["Google JS Test is a fast javascript unit testing framework that runs on the V8 engine, without needing to launch a full browser. Features include: Extremely fast test startup and execution time, without having to run a browser. Clean, readable output in the case of both passing and failing tests. A browser-based test runner that can simply be refreshed whenever JS is changed. Style and semantics that resemble Google Test for C++. A built-in mocking framework that requires minimal boilerplate code (e.g. no $tearDown or $verifyAll) with style and semantics based on the Google C++ Mocking Framework.","The trade-off is that since tests are run in V8 without a browser, there is no DOM available. You can still use Google JS Test for tests of DOM-manipulating code however."]
, "categories"  : ["Testing"]
},

{ "name"        : "QUnit"
, "url"         : "http://docs.jquery.com/QUnit"
, "description" : ["QUnit is a powerful, easy-to-use, JavaScript test suite. It's used by the jQuery project to test its code and plugins but is capable of testing any generic JavaScript code (and even capable of testing JavaScript code on the server-side). QUnit is especially useful for regression testing: Whenever a bug is reported, write a test that asserts the existence of that particular bug. Then fix it and commit both. Every time you work on the code again, run the tests. If the bug comes up again - a regression - you'll spot it immediately and know how to fix it, because you know what code you just changed."]
, "categories"  : ["Testing"]
},

{ "name"        : "JSCoverage"
, "url"         : "http://siliconforks.com/jscoverage/"
, "description" : ["JSCoverage is a tool that measures code coverage for JavaScript programs. Code coverage statistics show which lines of a program have been executed (and which have been missed). This information is useful for constructing comprehensive test suites (hence, it is often called test coverage). JSCoverage works by instrumenting the JavaScript code used in web pages. Code coverage statistics are collected while the instrumented JavaScript code is executed in a web browser. JSCoverage supports the complete language syntax described in the ECMAScript Language Specification (ECMA-262, 3rd edition). JSCoverage works with any modern standards-compliant web browser - including Internet Explorer (IE 6, 7, and 8), Firefox, Opera, Safari, and Google Chrome - on Microsoft Windows and GNU/Linux."]
, "categories"  : ["Testing"]
},

{ "name"        : "Selenium"
, "url"         : "http://seleniumhq.org/"
, "description" : ["Selenium automates browsers. That's it. What you do with that power is entirely up to you. Primarily it is for automating web applications for testing purposes, but is certainly not limited to just that. Boring web-based administration tasks can (and should!) also be automated as well.  Selenium has the support of some of the largest browser vendors who have taken (or are taking) steps to make Selenium a native part of their browser. It is also the core technology in countless other browser automation tools, APIs and frameworks."]
, "categories"  : ["Testing"]
},

{ "name"        : "testling"
, "url"         : "https://github.com/substack/testling"
, "description" : ["Run browser unit tests headlessly with jsdom locally and remotely with testling.com."]
, "categories"  : ["Testing"]
},

{ "name"        : "JsDuck"
, "url"         : "https://github.com/senchalabs/jsduck"
, "description" : ["API documentation generator for Sencha JavaScript frameworks. sDuck aims to be a better documentation generator for Ext JS than the old ext-doc was. It is used by Sencha to document Ext JS 4, [Sencha Touch][touch] and several other products. The highlights of JSDuck are Markdown support and keeping you DRY by inferring a lot of information from code."]
, "categories"  : ["Documentation generators"]
},

{ "name"        : "dox"
, "url"         : "https://github.com/visionmedia/dox"
, "description" : ["Dox is a JavaScript documentation generator written with node. Dox no longer generates an opinionated structure or style for your docs, it simply gives you a JSON representation, allowing you to use markdown and JSDoc-style tags."]
, "categories"  : ["Documentation generators"]
},

{ "name"        : "jsdoc-toolkit"
, "url"         : "http://code.google.com/p/jsdoc-toolkit/"
, "description" : ["JsDoc Toolkit is an application, written in JavaScript, for automatically generating template-formatted, multi-page HTML (or XML, JSON, or any other text-based) documentation from commented JavaScript source code."]
, "categories"  : ["Documentation generators"]
},

{ "name"        : "Docco"
, "url"         : "http://jashkenas.github.com/docco/"
, "description" : ["Docco is a quick-and-dirty, hundred-line-long, literate-programming-style documentation generator. It produces HTML that displays your comments alongside your code. Comments are passed through Markdown, and code is passed through Pygments syntax highlighting. (while it was created for coffeescript, it works fine with plain javascript; it doesn't handle block comments at the moment -- just // style ones)"]
, "categories"  : ["Documentation generators"]
},

{ "name"        : "PINF JavaScript Loader"
, "url"         : "https://github.com/pinf/loader-js/"
, "description" : ["Versatile & Complete Cross-Platform CommonJS JavaScript Module, Package & Program Loader (Status: BETA - Mostly stable API undergoing wider testing). The PINF JavaScript Loader asynchronously combines what you would traditionally call a package installer and class loader and is intended to be used as the core to all your JavaScript applications no matter what platform they run on. The loader allows for bootstrapping a state-of-the-art, consistent and portable CommonJS environment for any supported platform (on servers, in browsers, desktop applications, secure sandboxes, and embedded) and thus is ideally suited to be used as the target for the commonjs command (currently being standardized) and the development of cross-platform JavaScript applications and libraries that may be shared with the CommonJS ecosystem."]
, "categories"  : ["Loaders"]
},

// TODO: sort out where these should go

{ "name"        : "List of languages that compile to JS"
, "url"         : "https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS"
, "description" : [""]
, "categories"  : ["Other resource listings"]
},

{ "name"        : "altJS"
, "url"         : "http://altjs.org/"
, "description" : ["altJS is a collection of languages and tools aimed at rebooting JavaScript and making it better. Everything you'll find on this page is designed to output code for use on the web or with JavaScript-enabled servers and devices. This site is a handy guide to what's new in the altJS universe, as well as a place to connect."]
, "categories"  : ["Other resource listings"]
},

{ "name"        : "Firebug Research"
, "url"         : "http://getfirebug.com/wiki/index.php/Firebug_Research"
, "description" : ["Academic papers related to Firebug."]
, "categories"  : ["Other resource listings"]
},

{ "name"        : "ES Wiki"
, "url"         : "http://wiki.ecmascript.org/doku.php"
, "description" : ["This is a wiki for the ongoing specification work of Ecma TC39, the technical committee tasked with standardization of the ECMAScript programming language. Most of the wiki is world-readable, meaning that anyone can view the pages. Certain sections are restricted to members of the technical committee."]
, "categories"  : ["Other resource listings"]
},

{ "name"        : "Mozilla Developer Network Doc Center"
, "url"         : "https://developer.mozilla.org/docs"
, "description" : [""]
, "categories"  : ["Other resource listings"]
},

{ "name"        : "Maqetta"
, "url"         : "http://maqetta.org/"
, "description" : ["Maqetta is an open source project that provides WYSIWYG visual authoring of HTML5 user interfaces. The Maqetta application itself is authored in HTML, and therefore runs in the browser without requiring additional plugins or downloads."]
, "categories"  : ["UI"]
},

{ "name"        : "js-tools"
, "url"         : "http://groups.google.com/group/js-tools"
, "description" : ["JavaScript Development Tools. Tools for JavaScript; tools in JavaScript. Discovering and integrating existing tools; implementation of new tools; shared tooling infrastructure; needed tools; research on tools and tool users."]
, "categories"  : ["Mailing Lists"]
},

{ "name"        : "es-discuss"
, "url"         : "https://mail.mozilla.org/listinfo/es-discuss"
, "description" : ["Discussion of ECMAScript"]
, "categories"  : ["Mailing Lists"]
},

{ "name"        : "commonjs"
, "url"         : "http://groups.google.com/group/commonjs"
, "description" : ["Creating a common JavaScript library with a focus on non-browser (ie server-side, command line, desktop) functionality."]
, "categories"  : ["Mailing Lists"]
},

{ "name"        : "JSMentors"
, "url"         : "http://jsmentors.com/"
, "description" : ["Discussion of JavaScript, ECMAScript and Browser scripting. Discuss ECMA-262 standard; discuss different implementations of ECMA-262; discuss different host environments of JavaScript; discuss implementation of algorithms in JavaScript; discuss your library design; review your code; review your book on JavaScript topic; review your article on JavaScript topic;"]
, "categories"  : ["Mailing Lists"]
},


{ "name"        : "nodejs"
, "url"         : "http://groups.google.com/group/nodejs"
, "description" : ["Discussion on Node.js"]
, "categories"  : ["Mailing Lists"]
},

//engines/browsers
//
//  opera
//  safari
//  firefox
//  internet explorer
//  google chrome/v8?
//  node/v8

// papers/research links (such as firebug research, types)
// mailing lists

];
