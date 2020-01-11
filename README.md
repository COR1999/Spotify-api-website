
# Vinyl O'Rourke 

## Overview
This is a website that presents my favourite vinyl records with details about them including the artwork and artist. It then has an option to purchase the record. It also has a list of the top most sold records.


## UX
This website is used to showcase my love for music to the world using different layouts and pictures. This website is aimed at fellow music lovers like myself and has a range of music for everyone no matter what your tastes are.

As a user, I would like to be able to explore different types of music, to find more information about the artist and there album's.
As a user, I would like to be able to listen to the music of my choice, to decide if I like it before I buy it.
As a user, I would like to be able to buy the music that I like, so I can listen to it on my own record player.


## Features
### Existing Features
1. Mobile first responsive design so that the application looks good and preforms well on mutiple device resolution.
2. The application header has a navagion bar to show you your current page and allow you to link to the other pages .
3. The application footer contains links to social media.
4. The Home page provides a table of my favourite record's, with links to listen to the record on spotify and also be able to buy it. It also provides a link on the artist name to their respective section on the Artist Details page.
5. The Artist Details page provides information about the given artist and a picture of my favourite album of their's. Link to the artist so that you can listen to other albums on spotify.
6. The Best Sellers page has the most sold records of all time.
7. For my website I implemented a favicon to show a graphical representation of the site being visited at the left side of the browser's address bar. 

### Future Enhancements
* Connect the website to a API and to get artist, album, album information, song's from the API so it can get data based on the users interests such as year, genre.
* Add sort to the table's.
* Integrate to payment gateway for purchase.
* Populate the buy Now page with info from the selected album.


## Technologies Used
1. [HTML5](https://en.wikipedia.org/wiki/HTML5 )
 1. The application was created as static html page's.
2. [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets )
 1. CSS was used to style the HTML
 2. The style sheet was kept seperate from the html.
3. [Bootstrap Version 4.4.1](https://getbootstrap.com/ )
 1. Bootstrap compenents such as grid,card,button,table,navbar where used in my project to simplfy creating responsive web application
4. [Font-awesome Version 5.11.1](https://fontawesome.com/ ) 
 1. Font-awesome was used to get some icon for my pages.
5. [Spotify](https://spotify.com)
 1. Spotify was used to play music. The artist link was copied from the spotify website and embedded in the html
6. [VSCODE](https://code.visualstudio.com/ ) 
 1. VSCODE was used as the devlopment environment
7. [Github](https://github.com/ )
 1. Github was used for my version control in the project. 


## Testing
1. I used Chrome Dev Tools for debug Testing.
    1. I used the inspect feature to check different elements on my page.
    2. I used the coverage tab to check my css was being used on the given page.
    3. I used the network tab to see what was taking a long time to load and what wasn't loading.
    4. I used the computed tab to see the final state of a given element.
    5. I used the device toolbar to check that my website was rendered in a responsive manner on all device's
    6. I installed the chrome [lighthouse](https://developers.google.com/web/tools/lighthouse) plugin to use the audit feature to check Performance, progressive web app, Best practices, accessibility and SEO.
        1. The main issue i incounter when using google lighthouse was 
2. Application Testing
    1. I clicked on all the links in navbar to make sure they linked the to correct page.
    2. Responsive
        1. I resized the browser to a smaller view to test that the navbar goes into burger menu. I did not like how the burger menu was left aligned so i moved the burger menu to the right.
        2. I resized the browser to make sure that the content render correctly for different break points
    3. I tested that the social media links in the Footer worked and had a nice contrast.
    4. I tested that the buy now Button opened the form and was working properly.
    5. On the Home page test that the link of each artist brings you to the correct section on the artist detail page.
    6. I tested that the listen button works and goes to the correct spotify link.
    7. I ran all my tests on local host(root website) then pushed it onto github (where ran off the subdomain). Checked that all resources loaded properly off the root and subdomain.
    8. I tested that it worked on my iphone 6 in Safari and Google chrome.
    9. I tested that the website worked properly on Microsoft Edge and Firefox on my Windows PC.
    10. I had it tested on a apple mac for google chrome and safari.


## Deployment
I used a local host and once I was happy I commited to github to check that everything ran smoothly there as well. 

## Credits
### Content
The text that was used on the artist details was copied from [Wikepedia](https://en.wikipedia.org/wiki/).

The genre and year section on my pages was found from a simple google search of the given album.

I Used Boostrap 4 in this project.

### Media
I searched the web for a suitable [hero image](http://adamleerosenfeld.com/useful-content-personal-leadership/)

I found all the artwork from a very handy [website](https://bendodson.com/projects/itunes-artwork-finder/ ) made by Ben Dodson 

### Acknowledgements
I spent a lot of time going around in circles not knowing what to do this project on.
I received the idea of making a vinyl website from my father.
I looked at other websites for idea's and how to implement some styling.



