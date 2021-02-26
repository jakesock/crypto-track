# crypto-track

## TODO:

#### Navbar:

- [x] Scaffold Pages
- [x] Make Reusable Navlink component
- [x] Make Reusable Header Component for nav
- [x] Style Navbar

#### Home:

- [ ] Add Graph for top favorite coin
- [ ] Add Components for quick overview of next 2 most popular coins under the main graph

#### Explore:

- [x] Add search bar
- [ ] Horizontal Rule between bar and results IF results && term
- [ ] Middle of page contains "Popular Recently" section before search
- [x] Style Results
- [ ] Add Hover effect to results
- [x] Populate list under search bar for matching queries
- [x] "No results found for _x_" when no results found
- [ ] Allow user to add to their portfolio from explore page
- [ ] Save addeed to Local Storage
- [ ] Revisit styling later on

#### My Portfolio:

- [x] Add list of saved coin
- [ ] Show "Portfolio empty, add crypto" message and link to Explore page when no saved coins
- [ ] Add ability to filter based on current market price, A-Z, Z-A, amount owned, or filter by search term
- [ ] Add ability to edit amount owned
- [ ] Show amount owned and current value in preferred currency
- [x] Add ability to delete
- [x] Style delete button
- [ ] Add ability to change preferred currency
- [ ] Add "top 3" list which, when populated, become the 3 displayed on the home page
- [ ] Add switch to go from general tracking to top 3 favorites

#### Coin Detail:

- [x] Coin Graph
- [ ] Style Graph and Graph Content
- [x] Style Page Header
- [ ] Coin Overview Section
- [ ] Back button
- [ ] Clean Up Page Component
- [x] Add time frame selection

#### Footer:

- [x] Github Link
- [x] Copyright Info ('Made with <3 by Jake')
- [x] LinkedIn

#### Not Found:

- [x] Style Not Found Page

#### UI/UX/Feedback/Error Handling:

- [ ] Make Snackbar Component
- [ ] Handle errors with error state
- [ ] Style loading screens
- [ ] Revamp Light Theme Palette
- [ ] Revisit Dark Theme Palette
- [ ] Fix mobile styling

#### Logic/State

- [ ] Make preferred currency an object with both symbol and shorthand
- [ ] Save preferred currency to local storage
- [ ] Save theme preference to local storage
- [ ] Make settings dropdown with these two options, replacing sun icon-button in nav with a gear icon-button
- [ ] Seperate timeframe state from whole detail page to remove unnecessary re-rendering
- [ ] Extract preferences into own state in redux store

#### Code Base

- [ ] Organize import statements
- [ ] Refactor wherever possible
- [ ] Clean up type definitions where necessary
- [ ] Go over types and add them where necessary
- [ ] Go over all of code once or twice and see what can be improved and improve variable names/add notes if needed
- [ ] Refactor App Component
- [ ] Revisit all styles and make them more theme-centric (see SearchBar/styles.ts for reference on how you want all of it to look)
