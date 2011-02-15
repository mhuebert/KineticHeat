# Matt.is CV

Two years ago I designed a [single-page static CV](http://www.scribd.com/doc/9683205/Resume-with-horizontal-timeline-and-world-map) integrating a timeline and world map.

Upon discovering the [Isotope jQuery plugin](http://isotope.metafizzy.co/) I decided to revisit the CV, this time with an interactive approach—leading to a less dense but more flexible presentation of information.

This is an early release. Weaknesses include:

* Lacks a timeline - duration and order of activities is not visually apparent
* Lacks a world map - geographic dimension of work is ignored
* Lacks detail for each activity

However, it offers a few new advantages:

* Activities can be ranked by passion, time invested, or recency, or filtered by type.
* While information density is reduced, individual views are clearer. Activities are compared one dimension at a time. 
* Animated transitions give the user an intuitive grasp of an activity's ranking across two dimensions. For example, if you switch from "Time Invested" to "Passion", activities which animate downward indicate a mismatch between what I'm passionate about vs. what I spend my time on.
* It's now easy for me to embed links to external resources.

# Requirements:

* [Jekyll](https://github.com/mojombo/jekyll)
* [Jekyll_ext](https://github.com/rfelix/jekyll_ext)
* HAML
* CoffeeScript
* A [Isotope](http://isotope.metafizzy.co/) license for commercial use

# Usage notes

CV elements can be edited in _config.yml.

To keep things clean, all html, css, and javascript are sourced from haml, sass, and coffeescript files inside the "work" folder. This is where you should do most of your edits.