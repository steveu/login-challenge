# login-challenge

## Requirements

* Email based
* Secure (email/password sufficient)
* Custom branding (simple colour/font modifiers on clean base styles. Custom CSS simpler/more flexible?)
* Statistics (login user+timestamp flexible enough to start with?)
* Authenticated dashboard to display basic stats
* Single sign on integration (OAuth, OpenID?)

## Assumtions

Any of these could be wrong...

* Looking at a login system for "The Product", not to be shared with something else
* ~~*BigFish* is important enough to do custom work for (and we do that kind of work)~~

## Questions

* ~~Is this a new, from scratch login system, or updates to an existing one (e.g. custom styles, email over username)?~~ Not worth using the existing system
* ~~Do statistics integrate with another platform?~~ No
* ~~Do existing "usernames" need converting or require notification of change to login~~ No
* ~~What level of security (all login should be secure, but email/password is vulnerable. 2 Factor Auth needed?~~ 2 Factor Auth not needed initially
* Have we considered using parts or all of a 3rd Party login provider e.g. AuthO or open source library?
