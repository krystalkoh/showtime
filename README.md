# Showtime!

Need more information about a tv show you're interested in? You've _tuned in_ to the right app!

![Landing Page](/starter-code-base/screenshots/homepage1.png)
![Landing Page2](/starter-code-base/screenshots/homepage2.png)
![Favourites](/starter-code-base/screenshots/favourites.png)
![Modal](/starter-code-base/screenshots/modal.png)
![Results](/starter-code-base/screenshots/results.png)

---

# Difficulties encountered while coding the app

### Encountering null data
Problem: When calling an API, you'll often get null data, which will often then show 'unable to read undefined'

Solution: Filtering out unavailable data first

![filter](/starter-code-base/screenshots/filter.png)
(Second part of the code was to randomise the shows shown on screen)

### Not planning out the file structure accurately 
Problem: Focusing on the design in mind first rather than planning out the data structure accurately and sticking to it. The following was my final datastructure: 
![file](/starter-code-base/screenshots/wireframe.png)

Lesson learnt: Having the wireframe in mind is fine, but need to ensure routes + basic data structure done first before actually coding. 

### Encountering HTML in the summary data pulled from API
Problem: HTML tags in the data of the summary 
![prior](/starter-code-base/screenshots/priorToDanger.png)

Solution: use DangerouselySetInnerHTML in order to convert tags to text 

![danger](/starter-code-base/screenshots/dangerouslySet.png)

![after](/starter-code-base/screenshots/afterDanger.png)
