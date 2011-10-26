----------------------------------------------------------------
NOTE: this is the master branch - you want the gh-pages branch!]
----------------------------------------------------------------

js-tools is the mailing list for Javascript tool developers.

The main purpose is to give tool developers a forum for presenting, discussing
and coordinating their efforts. The idea is to improve communication, to avoid
repetition, and to leverage existing work.

Currently, too much valuable developer time is wasted because tools and the
dependencies needed to create new tools are not easy to find, or because
related tools use different dependencies (which means that the tools are harder
to integrate, maintenance work cannot be shared, and there are many points of
failure). If tool developers are aware of each other's work, there is a better
chance of sharing common infrastructure (and the maintenance it needs).

This list is meant for tool-related discussions that to not quite fit into
tool-specific lists (or for which no tool-specific lists exist), such as:

- discovery/awareness: 
  - what tools are out there?
  - what can I use? what can I build on?

- tips:
  - how to use the tools?
  - how to integrate the tools?
  - what tools can help with what tasks?

- recovery/bug fixing: 
  - if tool authors are unresponsive, can their code be reused?
  - who knows enough about a tool to help with bug fixes?
  - where can bug fixes or modifications be found?

- coordination:
  - how to get different tools to work together?
    can common APIs be agreed on to help with tool integration/reuse?
  - how to get tool developers to work together, so that they and their users
    can profit from shared infrastructure (instead of every tool coming with
    its own slightly different parser, AST and AST traversal library)

To pick one example issue: many developer tools need to build on a Javascript
parser - currently, there are almost as many JS parsers in use as there are
developer tools. Writing JS parsers is educational, but the effort might be
better invested in other aspects of JS tooling. Once you have a parser that
gives you an AST, you still need to traverse that, you probably want scope
information as well, and source locations, and comments, and performance, you
want to find and to fix bugs and to follow the language spec as it evolves. 

If you do decide build on an existing tool chain instead, you want to choose
one that doesn't go out of business when you start relying on it and you want
to share with as many related tools and developers as you can. So you want to
get information, make a choice, and coordinate with others building on the same
platform (imagine syntax errors, linting, tags generation, types, ast
traversals, ...  all as plugins in a single JS frontend framework; or imagine
being able to call any JS engine/commandline/debugger via common interfaces, so
that arbitrary IDE/tool/engine combinations can be plugged together).

Tool users are welcome to join in, though the main purpose is to give
developers a forum for throwing ideas, problems and solutions at each other.
The discussions involved in finding tools and raising awareness of the issues
and solutions out there should make this list worth following for any developer
interested in Javascript tools. We do hope for cross-fertilization with the
es-discuss mailing list - tools and language design should evolve together!

My own current interests are in developer tools, especially Javascript-based
tools (parsers, type systems, linters, tags generators, preprocessors, code
transformers, interpreters, debuggers, profilers, ..). However, if you have
tools for Javascript developers written in other languages, by all means tell
us about them here! If tool developers need a place in which to suggest,
discuss and hammer out common APIs and the like, this is it! If Javascript
engine developers are looking for a forum in which to talk to each other, you
are welcome! In brief: anything that helps to move Javascript tools forward
and cannot be tackled on one of the tool-specific lists, as well as tool
announcements to keep everybody up to date in a single forum.

// concrete example issues that might be tackled

- common JS-in-JS frontend to build on
- common JS type notation to use for documentation, inference and checking
- common tool APIs (debuggers, concoles, ASTs, ..)

We maintain a list of JS tools and tool-related resources - please contribute
by sending updates and bug fixes (this is just a github repo, after all;-).
