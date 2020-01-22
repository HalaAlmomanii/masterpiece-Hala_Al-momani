

## About Agenda

This Repo presents a detailed description of the Event Booking system, This will
be completed in its scope of the system and the functions required. The system provides a
solution to allow the user to search for events satisfying the user criteria, manage the user
account, and book an event.

The purpose of it is to outline the requirements for The Coding Academy's by Orange
With an interactive, unique and unusual ideas. Agenda will be built on Apache Server,
PHP,laravel, and MySQL with JavaScript, React. It will be Web Application and accessible with
any standard compliant browser.

The Agenda website is an application. The purpose of the website is to resolve the client to
allow website users to perform tasks related to booking Events. Non-member users are only
allowed to see Home Page; non-member users are required to create an account in order to book
a ticket. Member users are required to login into their account prior to event booking, they have
the right to search for available events, to book a ticket, claim awards and to edit their member
information, Member with company role will be able to create a new event and tracking the
status of it and number of booking happened each day.





<p align="center"><img src="https://www.orange.jo/EN/PublishingImages/coding-academy_en.png" width="400"></p>


## Documentation
<a href='https://github.com/HalaAlmomanii/Agend/blob/master/SRS.pdf'>Agenda.pdf</a>


## Installation 
Clone 
```
git clone https://github.com/HalaAlmomanii/Agend.git

```
Composer

``` 
composer install 

```
NPM
```
npm install

```
Env
if using command prompt Windows

```
copy .env.example .env 
```
if using terminal, Ubuntu
```
cp .env.example .env 
```


Laravel database

```
Open your .env file and change the database name (DB_DATABASE)  
By default, the username is root and you can leave the password field empty. (This is for Xampp) 
By default, the username is root and password is also root. (This is for Lamp)

```
Generate Key
```
Run php artisan key:generate
```
Migrate database tabel
```
Run php artisan migrate
```
running laravel
```
Run php artisan serve
```
running React
```
npm run watch 

```
