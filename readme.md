## edit companies

A `netlify-cms` in `open-authoring` mode
https://www.netlifycms.org/docs/open-authoring to edit a list of
companies hirring, stored in the repository
https://github.com/joblistcity/companies

To edit/add a company, login the netlify-cms instance (link at the top) with your free Github account.


## Questions

### Why not hosted on gitlab like the rest

Gitlab does not support open authoring mode for netlify-cms.

### Why not hosted on github pages

Because github api requires a backend, to create authenticated requests.

Therefore the simple/most-straight-foreward with netlify-cms, is to host the site on netlify.

This is because otherwise, we run in this issue: https://github.com/netlify/netlify-cms/issues/4731

### Why hosted on netlify and add an other service

See above; to simplify authentication to github api to be able to log in netlify-cms and edit this repo.

## Licenses 

Code: [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)

Data: [Creative Commons Attribution-ShareAlike license (CC-BY-SA)](https://creativecommons.org/licenses/by-sa/2.5/),

## Development


Install the npm package `serve` globally:

```
serve -s .
```
