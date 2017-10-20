# Doctor Lookup
![image](https://user-images.githubusercontent.com/15882954/31843830-f70ecc1c-b5a9-11e7-973f-59c1e13adce9.jpg)

#### An application that allows user to search for doctors, 10.20.2017

#### By Kristen Marie Kulha

## Description

This application allows the user to enter a medical issue or name and then returns a list of doctors with their first and last name, address, phone number, website and whether or not ther are accepting new patients.

##User Stories

* User can enter a medical issue and receive a list of doctors.
* User can enter a doctors name to find a doctor that has that name.
* If API call returns no results, inform user that no doctors were found from their query.
* User can enter their address to find results near them (not hard coded to single area).

![image](https://user-images.githubusercontent.com/15882954/31843842-0a1d4f72-b5aa-11e7-9121-94b548b97860.jpg)

## Setup/Installation Requirements

* Clone this repository
* In terminal, navigate to this projects root directory (doctor-lookup)
* Ensure you have [Node.js](https://nodejs.org/en/) and [Gulp](https://gulpjs.com) installed
* Add .env file by entering ``` $ touch .env ```
* Navigate to [BetterDoctor](https://developer.betterdoctor.com/) to register for an API key.
* In .env file add the following (enter your new API key where text reads KEY)
``` exports.apiKey = "[KEY]" ```
* Save everything 👍 👊
* In terminal (while still in root directory), enter the following commands:
  * ``` $ npm install ```
  * ``` $ bower install ```
  * ``` $ gulp build ```
  * ``` $ gulp serve ```

## 🐛Known Bugs🐛

There are no known bugs at this time.

## Future functionality

* Add an additional API call to retrieve the list of specialities from the database before you query for a doctor, then return that list in a dropdown menu.
* Create a list of "recently viewed" doctors and display it.
* Create a list of "related doctors" and display it. You can define related however you wish.
* Add static pages, links to your GitHub, social media, and more.

## 📧Support and contact details📧

Feel free to contact me at kristen.m.kulha@gmail.com

## Technologies Used

_JavaScript, HTML, CSS, Node, Gulp, Jasmine, Karma, BetterDoctor API, Google Maps API_

### License

This software is licensed under the MIT license.
Copyright (c) 2017 **_Kristen Marie Kulha_**
