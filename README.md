# CPE 1040 - Introduction to Computer Engeneering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript

### 1. Summary

This assignment asks you to go through a [Intro to CS course with Blocks](https://makecode.microbit.org/courses/csintro) for the micro:bit, and write parallel programs using the JavaScript equivalent of the code in the course modules. This assignment is submitted through Github.

### 2. Requirements

#### 2.1 Section programs

1. The CS course is broken down into thematic sections. There are 5 sections + 1 midterm project + 5 sections + final project. Each section has 4 parts. You want the _Activity_ part, which contains the section's CS material and Blocks.

2. You need to write a _working_ JavaScript (JS) program for the micro:bit for each of these sections/projects, for a total of 12.  

3. For the non-project sections, you are required to use the JS equivalent of the material from the section. _**Note:** For these programs, you are allowed to look at the JS translation of Blocks programs._

4. For the midterm project, you are required to use the JS equivalent of the material from all 5 preceding sections.  _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._ (An aside: if you don't know how to read a statement like "you are not allowed to", the intended and preferred interpretation is "you can do whatever you want and won't be penalized by me, but, if you want to learn most effectively, I suggest that you do not resort to...".)

5. For the final project, you are required to use the JS equivalent of the material from all 10 preceding non-project sections. _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._

#### 2.2 Github commits & tags

1. Working in the Makecode browser environment, you cannot save the JS file of your program in a directory of your choosing. It is stored in an in-browser memory object and is not accessible. (A side note: there might be a Makecode app for Windows which might actually allow that, but there is nothing like that for Mac, to the best of knowledge.) So, you will need to copy the JS from Makecode to another editor (preferably, a code editor with syntax highlighting and code manipulation) and then save and commit it.

2. You need to commit the changes and additions to your assignment for each section or project. This means that there should be _at least_ 12 commits pushed to your remote assignment repository on Github when you are done. I advise you to have more than that, to get used to it.

2. You need to **tag** the final commit for each section. Tags are under _releases_ in the repository bar on the Github page of the assignment repository. The tag should be one of the following `v0.1`, `v0.2`, ..., `v0.12`, for each section, respectively. (Terminology clarification: the `git` command is `git tag`, but tags are counted as _releases_ on Github.)

3. You need to update the assignment repository [README.md](README.md) (this document, in the section [Tags](#tags)) with a short description of your section program or project, **before** you tag. You can do that directly on Github after you push your commits from your local repository.

#### 2.3 Project design

1. For each of the two projects, you need to include a design "document" in the [README.md](README.md) (this document, in the section [Designs](#designs)).

2. The design "document" should follow the _problem-solving tips_ in the [mini-project page](https://makecode.microbit.org/courses/csintro/miniproject).

3. The design "document" should have at least the following sections: Goal, Design process, and JS Language Constructs & Objects. Articulating clearly your engineering work is a key professional skill.

## Resources

### micro:bit 

1. [micro:bit lessons](https://makecode.microbit.org/lessons).

2. [micro:bit ideas](https://microbit.org/ideas/).

3. A list of some more [advanced projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects).

4. The [projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects) at the [awesome micro:bit list](https://github.com/carlosperate/awesome-microbit).

### Github

1. Github Tutorial for Beginners ([webpage](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)).

2. Github Basics for Mac and Windows ([video](https://www.youtube.com/watch?v=0fKg7e37bQE)).

3. git & Github Crash Course for Beginners ([video](https://www.youtube.com/watch?v=SWYqp7iY_Tc)).

4. Introduction to Github for Beginners ([video](https://www.youtube.com/watch?v=fQLK8Ib_SKk)).

5. About `git` ([webpage](https://git-scm.com/about)).

6. `git` [documentation](https://git-scm.com/doc) (webpage, book, videos, reference manual).

### JavaScript

1. Technically, the language which is used side-by-side with Blocks in the Makecode environment is a subset of [TypeScript](https://makecode.com/language), which itself is a superset of JavaScript (technically, [ECMAScript](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)), with some JS features not implemented in Makecode.

2. The limited [JavaScript mini-tutorial](https://makecode.microbit.org/javascript) in Makecode. Make sure you read it but that can't be your only reference.

3. Official [TypeScript documentation]():
   1. TypeScript in 5 min [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). _**Highly recommended!** You will need to [download](https://www.typescriptlang.org/index.html#download-links) and install an integrated development envinronment (IDE). The two that I recommend are Visual Studio Code from Microsoft and WebStorm from JetBrains._
   2. The full documentation and reference is under _Handbook_. Bear in mind that you are drinking from the hose. Don't be surprised if not everything is presented in a strictly incremental manner.
   
4. In-browser TypeScript [playground](https://www.typescriptlang.org/play/index.html). Note that micro:bit specific code will not run, but you can still play. _Start making the distinction between a generic multi-purpose programming language (TypeScript) and functionality (libraries, objects, etc.) that is specific to a particular device (micro:bit), though written in the same programming language._

5. A pretty good and very palatable JS tutorial with in-browser coding, by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

6. Extensive and detailed [JS tutorial](https://javascript.info/), with some advanced material thrown in. _**I like this one!**

7. The most authoritative JS resource on the Web, including tutorials and reference, by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

## Tags

_**Note:** Add your program descriptions below._

### v0.1

**Using Making to create a simple animation alternating images "X" and "+". [v0.1.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.1.js)**

### v0.2

**A modified version of v0.1 to inlcude Algorithm. Pressing A will change the images. [v0.2.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.2.js)**

### v0.3

**A program implementing the use of Variables to count the number of shots made and missed in Basketball. Pressing A adds one count to shots made. Pressing B adds one count to shots missed. Pressing A+B displays total shots made and missed in that order. Shaking the microbit resets the counter. [v0.3.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.3.js)**

### v0.4

**Uses Conditionals to create alternate game to rock, paper, scissors called shield, sword, bow. Shake the microbit to see what weapon you get. Pressing A displays a gameover. [v0.04.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.4.js)**

### v0.5

**Implements the use of iterations and loops to create a sprialing sprite. Press A to activate the swirl! [v0.5.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.5.js)**

### v0.6 Midterm project

**This project recreates the iconic childhood game redlight-greenlight. Press A to start. [v0.6.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.6.js)**

#### Goal

**To use the knowledge I've accumulated within the first five lessons of the CS intro course to create a game using the microbit.**

#### Design process

**Using the conditionals and setting my variables was not really difficult to set in motion but I did struggle on figuring out how to set my conditional on Javascript. After spending a couple hours trying to remember, I wiped a clean slate and started a new. The process of redesigning my microgame was smooth until I ran into the issue of figuring out how I would add an iteration into my program's code. That's when I connected to real life driving such as when the light is green for both sides but the yellow arrow is flashing. This inspired my "yellow" flashing light in the program. Due to the only option of LED color being red I prepared the lights in accordance to position on the traffic light.**

#### JS Constructs & objects

**The redlight-greenlight program features Looping, Variables, Conditional Statements, and Algorithims**

### v0.7

**By making use of the coodinate grid system, this program, similiar to v0.2, allows a face to be changed in three different ways by turning certain LEDs on and off on the microbit. Pressing A will make a sad face. Pressing B will make a smileyface. Pressing A twice will create a poker face. [v0.7.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.7.js)**

### v0.8

**Booleans are the source of what allowed me to create this program of truth or dare. Press A to play truth or dare! [v0.8.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.8.js)**

### v0.9

**This program is the same as the one listed in the CS course. It converts binary into decimal using a basic guideline to binary conversion. Pressing A adds 1 to the end of the binary string while pressing B adds 0. Pressing both A and B converts the binary code into decimal. [v0.9.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.9.js)**

### v0.10

**This program is also the same as the one included within the CS course. It utilizes two microbit devices to play Marco-Polo! Pressing A sends a Marco message via radiowaves onto the other microbit's LED grid. Pressing B sends a Polo. This works both ways on the Microbit devices. [v0.10.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.10.js)**

### v0.11

**With the use of Arrays, this game of charades was created using terms of my liking. The game begins with a three second countdown then the first word displays as a string. Facing the screen of the Microbit upward generates a new word in the LED grid. Facing the screen downwards changes the word until there are no remaining words to charade, otherwise the Microbit displays Gameover [v0.11.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.11.js)**

### v0.12 Final project

**My final project program is a game that displays a randomly generated response (yes or no) to a user made question. Pressing A randomly generates your yes or no response. This program makes use of two microbit devices as the response is displayed onto the asker's Microbit. If you don't feel like playing press A and B to send your partner a Gameover. My final project uses the knowledge of all lessons, 1-10, within the CS course. Some JS constructs featured in this program are  Algorithm, Variables, Conditionals, Iteration, Coordinate grid system, Boolean, Bit-byte-binary, Radio, and Array. [v0.12.js](https://github.com/Introduction-to-Computer-Engineering/migrating-microbit-programming-from-blocks-to-javascript-ZenBoba/blob/master/v0.12)**
