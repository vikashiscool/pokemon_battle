# Pokemon Battle

| **Objectives** |
| :---- |
| Build a simple pokemon battle game in Angular |
| Practice Control logic and Event Binding|
| Consume an external api |

**Terms:**

- Manifest

###Instructions:

* **Make sure to bundle install.**
* For the moment, our pokemon data lives in `mock_data.js`.
* Can you render all the pokemon names?
* Can you attach an event listener to each name?
* Can you show and hide content based on application state?


##Built in Directives
Repeat
Hiding and Showing
Event Binding

##Avoiding "The Flicker"
* What's the difference between:
    `{{ logic in here }}` and `<some_tag some_attribute="logic in here">`?
* What happens when you load the page and you use this:
    `<img src="/path_to_file_{{ name }}">`
* What if `name` doesn't exist yet? (maybe we're waiting on an api response). What will your browser do?


When you're done it should look like this:

![basic layout](screenshots/1.png)
![pick your fighters](screenshots/2.png)
![winner](screenshots/3.png)

Reading:
