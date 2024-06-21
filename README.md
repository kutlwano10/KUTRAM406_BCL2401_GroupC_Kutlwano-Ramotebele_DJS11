# [DJS11] Submission: PODCAST APP

# RockStar Podcast

url: https://rockstarpodcast.netlify.app/

# Learning Experience Readme

## Introduction

In this document, I'll share my learning experience while working on a specific project, detailing the challenges faced, solutions found, and insights gained throughout the process. 

## Project Overview

- **Objective**: 
The objective of the project was to create a Podcast App using a Provided Api that contains Shows, Seasions and its Episodes . Had to make the website responsive in all devices small, large or medium. Had to follow user stories of how the App should function.  

- **Technologies Used**: 

JavaScript (ES6), HTML5, CSS and React ,Material UI, StackOverflow

## Learning Experience

### Challenges Faced

1. **Favorite buttons**: 

Bug encountered : where all the episodes where being clicked when i was only trying to mark a single Episode to favorite. then when i tried to click the button again it also delected all the marked episode.
   
2. **Getting the Api of shows/id/<ID>**:

i wanted to display the season from using the APi with seasons but i had trouble trying to figure out a way to get the Id od the indivisual shows.

### Solutions Found

1. **Favorite buttons**: 

Found out that on my codeblocks i was using reference of `id` wheres the episodes and seasons didnt contain any id, I changed the ref of `id` to use the specified season or episode values. Then it only clicked a single episode.

2. **Getting the Api of shows/id/<ID>**: 

Had to go back to my previous work and understand the uses of useParams , then i got an idea that for each id of the shows it must be represented by param which is an id in this instance, I used an object distructuring method then assinged useParams to `id` to represent the shows id .eg `shows/id/${id}` as ref from {id} = useParams()

### Insights Gained

1. **Enhanced JavaScript/REACT Proficiency**: 
Throughout this project, I gained a deeper understanding of React concepts such as useState, UseEffect, using Api in React. This enhanced my proficiency in JavaScript programming. 

2. **Problem-Solving Skills**: 

It wasn't easy to work on this task since i used alot of open sourse resources to understand what exactly is that i want to implement in my code. Some concepts are very difficult to really grasp but with time and more research i managed to concour my Project. 

## Conclusion

Working With React makes things very simple to understand, using Routers for The dynamic use of the web. Now i understand how to make pages, how to nevigate from one page to another, even Nesting routes. I am very confident using REACT in the future as my everyday Javascript Library