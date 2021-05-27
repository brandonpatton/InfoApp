TO RUN:

	Server: From /react-backend/, run the command > set PORT=3001 && node bin/www on a CMD Terminal (not powershell) <

	App: cd into /react-backend/client, run the command > npm start <
	
	The app will run on port 3000, and the server on 3001.

Code Location: react-backend/client/src/

Dependencies:
	Server:
	 - "cookie-parser": "~1.4.4",
    	 - "debug": "~2.6.9",
    	 - "express": "~4.16.1",
    	 - "http-errors": "~1.6.3",
    	 - "jade": "~1.11.0",
    	 - "morgan": "~1.9.1",
    	 - "react": "^17.0.2",
    	 - "react-dom": "^17.0.2"
	App:
	 - "@testing-library/jest-dom": "^5.12.0",
    	 - "@testing-library/react": "^11.2.7",
   	 - "@testing-library/user-event": "^12.8.3",
    	 - "mdbreact": "^5.0.2",
    	 - "react": "^17.0.2",
    	 - "react-bootstrap": "^1.6.0",
    	 - "react-dom": "^17.0.2",
    	 - "react-router-dom": "^5.2.0",
    	 - "react-scripts": "^4.0.3",
   	 - "web-vitals": "^1.1.2"
	NOTE: Some of these were installed while I was implementing the template in the article I mention 
		later on.  If needed, please do not hesitate to reach out or view that article for guidance.
	 
Process:

To begin this project, I first wrote down the requirements outlined in the email.  
I then wrote a plan of attack of the first things that came to mind of how I would approach the problem.
Although these thoughts definitely change along the way, I figure it is a good idea to outline your first
thoughts to give yourself a basis to work off of and to start the "thought conversation" so to speak.

I knew I wanted to use a local state to hold the current information being displayed, and I knew that I wanted
this local state to update every time a button was pressed.  I wanted several buttons to display onscreen 
which represented the kind of attacks a user could learn about, and pressing any would cause the corresponding
information to show up onscreen.

I then proceeded to draw visually what I wanted to display on screen.  I first envisioned a design which
featured the buttons down the left side, and a section on the right which would display the resulting information
from the button press. However, I eventually settled on the design you see now (buttons on top, information 
below). I knew how to use things like MDBCard from my experience in senior design, so I 
figured I would make use of that knowledge to display the information.

I then outlined a probable User Flow which detailed the following (External meaning visible, Internal meaning
part of the code process):
	- (External) Splash screen with instructions (press button to learn about xyz)
	- (External) User presses button
	- (Internal) Search database for correct information based on name
	- (Internal) Update local state with new information
	- (External) Display updated state to user with correct information

The above really helped make my ideas concrete.  I also decided to search the database based on name because
although some attacks are listed many times, they have different ID numbers so using that attribute as my
identifier didn't make sense.

After this planning phase, I began to code the project and look for resource that would be of help. I 
spent a lot of time attempting to create a backend that interacted with a Database from the ground up, but
ended up happening upon this article: https://daveceddia.com/create-react-app-express-backend/ which gave
me a good starting template.

Coding:

Using this template, I replaced the default App code with my own and began developing the app.

I began with a Class Component, but soon converted to a functional component after receiving a React warning
about using a hook in a non-functional component.

Since I already outlined what I wanted to do and had a pretty good idea visually of what I wanted to do, 
coding the project was not very hard.  It was more difficult and time consuming to get the initial render 
to show up on screen, but once that was established it became much easier to polish the page.

I decided to use React Row and Col page elements to organize my page while wrapping the whole code in a div
container which I used to control the flow of the page and the background color.

I used React Button elements for my buttons and an onClick attribute to fire the searchDB function which
updated the state based on the string that was passed in.  The string passed in matched the text displayed
on the button so as to establish the expectation to the user that "when I press this button labeled 'Path Traversal', 
I will be able to see information about ONLY 'Path Traversal'".

The above block explains what I had in my first Col element.  In my second, I simply had the function call
to "displayInfo" which displays the current information held in the state.  I could simply call this function because I had several
conditions established in displayInfo which handled all the following cases:
	- If the information in the current state has id == 0, this means no button has been pressed yet and
	  we should display the splash screen 
	- If the information in the current state has no evidence provided, we reflect this by including
	  "No evidence provided" in the expected spot for evidence.
	- Else, display the information in the current state.

As for the displayInfo function itself, I do like the setup; however, I think that there is a probably
a much more graceful way to add newlines to the page without peppering the code with <br></br> tags.

I also use the NewlineText function inside of displayInfo in order to account for the expected behavior of
HTML around \n characters; HMTL sees these as spaces rather than new lines so I split on the new lines and
create keyed <p> tag children of the proceeding text.

More on all of this functionality in comments throughout the code!

Reflections:

There are quite a few vulnerabilities in the code according to whenever I install a new package. It seems like
I would have to handle each of these individually, though I have chosen not to for this simple coding test.

I have not yet implemented a formal Database, though there is infrastructure present in the code that exists
for this function.  I wanted to submit a working version as soon as possible so I neglected this for now; 
however, after graduation and vacation until June 2nd I would be more than happy to continue developing this
to add Database functionality.