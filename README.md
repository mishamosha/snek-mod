The js file for the Tumblr Snek game.
Unchanged ver in main; the "modified" branch has the modified vers.

CURRENT EDITS:
- Removed movement cap and self-collision check, so you can move in the opposite direction and run the snake over itself.
- Changed point values to 99
- Added "(modded)" text to intro screen

TO USE:
Go to the Tumblr Snek game, open devtools, and look for the file games-snek-2a42acf1.js. Right-click and Override the file. You can direct the override to the modded download or just copy/paste its text into the file on devtools. You'll need to reload the page and maybe clear/disable the site's cache in the Network tab. If it accesses, the console should print "SNEK GAME OVERRIDDEN."

HOPEFUL PLANS (I'm not too familiar with JS, so it's not likely I'll get to these soon, but feel free to try them yourself and request a merge):
- Enable rapid-fire asks: it is possible to remove the once-only check for the "ask" item appearing, but subsequent appearances don't send an ask unless the game is reloaded. The game does not like my attempts to fix this.
- Add a new "end game" event listener so the "end game on collision with boundary" condition can be removed without trapping you in snek forever
- Link the game to a local .txt file, or even create input fields in the browser UI, so values can be customized and modifications toggled
- Potentially eventually, create a generic version unconnected to any Tumblr account

First time on Git, very open to suggestions.
