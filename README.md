# login-challenge

## Requirements

* Email based
* Secure (email/password sufficient)
* Password recovery (email with code standard)
* Custom branding (colour/font modifiers on clean base styles. Allowing custom CSS simpler/more flexible?)
* Logs (store login/logout events as user+timestamp+type would be flexible. Also store login count against users?)
* Authenticated dashboard for usage statistics (Possibilities; Top active/inactive users, total/SSO logins by day/time, logged in now count, login success/failure)
* Single sign on integration (OAuth, OpenID, SAML possibilities. Modular support for multiple providers?)

## Assumptions

Any of these could be wrong...

* Looking at a login system for a single product, not login shared across different services
* *BigFish* is important enough to do custom work for (and we do that kind of work)
* Not considering user registration or account creation

## Questions

* ~~Is this a new, from scratch login system, or updates to an existing one (e.g. custom styles, email over username)?~~ Not worth using the existing system
* ~~Do statistics integrate with another platform?~~ No
* ~~Do existing "usernames" need converting or require notification of change to login~~ No
* ~~What level of security (all login should be secure, but email/password is vulnerable. 2 Factor Auth needed?~~ 2 Factor Auth not needed initially
* Have we considered using parts or all of a 3rd Party login provider e.g. AuthO or open source library?
* What form of single sign on integration are BigFish asking for? (and what makes sense for our product?)
* What usage information is useful internally?
