# Dcotor Lookup

#### An application that allows user to search for doctors, 10.20.2017

#### By Kristen Marie Kulha

## Description

This application allows the user to enter a medical issue or name and then returns a list of doctors with their first and last name, address, phone number, website and whether or not ther are accepting new patients.

##User Stories

* User can enter a medical issue and receive a list of doctors.
* User can enter a doctors name to find a doctor that has that name.
* If API call returns no results, inform user that no doctors were found from their query.

## Setup/Installation Requirements

* Clone this repository
* In terminal, navigate to this projects root directory (doctor-lookup)
* In terminal, enter the following commands:
  * ``` $ npm install ```
  * ``` $ bower install ```
  * ``` $ gulp build ```
  * ``` $ gulp serve ```

## 🐛Known Bugs🐛

There are no known bugs at this time.

## Future functionality

* User can enter their location as well (Seattle no longer hard coded has location)
* Add an additional API call to retrieve the list of specialities from the database before you query for a doctor, then return that list in a dropdown menu.
* Create a list of "recently viewed" doctors and display it.
* Create a list of "related doctors" and display it. You can define related however you wish.
* Add static pages, links to your GitHub, social media, and more.

## 📧Support and contact details📧

Feel free to contact me at kristen.m.kulha@gmail.com

## Technologies Used

_JavaScript, HTML, CSS, Node, Gulp, Jasmine, Karma, BetterDoctor API_

### License

This software is licensed under the MIT license.
Copyright (c) 2017 **_Kristen Marie Kulha_**
