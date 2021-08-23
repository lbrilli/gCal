# README

<center><img src="app/assets/stylesheets/logo.png"></center>
<h3 style="text-align: center;">A lightweight calendar web app for organizing your life</h3>

## Table of contents
[About the App](#about-the-app)
[Features](#features)
[How to use](#how-to-use)
[Current rendering errors](#current-rendering-errors)
[Future direction of the project](#future-direction-of-the-project)

## About the app
gCal is an online calendar web application that helps you keep track of your life. It offers the ability to create multiple calendars as well as creating events. 

## Features and their challenges
+ Creating events was fun to implement and render. The difficulty came in in deciding how to handle times and dates for those events, with respect to both the input and reconciling that input on the backend. I was able to come up with a way by having the user inputs be separate fields in the form but smashed together in a dateTime object on the backend, only requiring the single object to hold date and time. 
+ Creating and rendering the calendar was not an overly difficult task when the calendar is empty, but as I began to work on filling it with events things got extremely tricky. I am still working this functionality out. 

## How to Use
gCal was made to be user friendly – simply visit https://gcal.herokuapp.com/ and create an account. From there you may begin creating calendars and events.

## Current rendering errors
+ Presently, some of the header is persistent when it should not be.
+ The time and timezone column is rendering squishd and misaligned.
+ The create button is rending in the wrong place
+ The today functionality is not yet working
+ The small calendar is not currently leading to anything

## Future direction of the project
+ Sharing events with other users
+ Sharing calendars with other users
+ Drag and drop event movement
+ Location integration for events