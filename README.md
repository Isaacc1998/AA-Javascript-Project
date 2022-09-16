JavaScript Project Proposal


Background:

My project will involve creating a tactical, turn based game that takes place on a 2D grid. The player will be given a set of individually controllable units/characters, with which he/she must eliminate all the enemy units on the board with. The player’s and the enemy AI’s turns will take place based on the turns of the individual units. On a unit’s turn, the player will be able to select from a menu of options and choose whether to move, attack, or use an item/skill. Attacking an enemy unit will inflict damage to them. The game will end when all the units of one side have lost all their health points.
Overall, this will be similar to the gameplay that is seen in certain RPG style games such as Fire Emblem or Final Fantasy Tactics. 



Functionalities:

Players should be able to:

Select a level/battle from a level selector screen (and return to the level selector upon completion of the level).
Click on their units or enemy units to check individual status
On a player unit’s turn, the player should be able to select from a menu of options. Each unit should have options to:
Move from one square on the grid to another
Attack and lower the health of an opposing unit
Use items/special skills
When unit is selected to move or attack, the screen should highlight movement and attack options in another color
There should be a resign or restart button



Wireframes:
https://wireframe.cc/pro/pp/52f2017dc581521

Menu dropdown will include resign (returns to level selector), and restart button.
Move option buttons will include “move”, “attack”, “item”, “skill” buttons.
Each unit and square on the grid will be clickable, and open a status description and/or move options on the right side.
Will also display which units turn it is on the status screen.



Technologies, Libraries, API:

Game assets and/or tilesets from Itch.io
For character sprite models, terrain decorations, pixel animations etc.
Canvas to render game board
Npm to manage project dependencies
Webpack and babel to bundle and transpile the source Javascript code

	

Implementation Timeline:

Friday/Weekend: 
Setup project and webpack. Get familiar with canvas API. Choose sprite models, terrain/tilesets from Itch.io. Create classes for Board, Unit(s), and Game, etc. Get the base grid rendered to canvas. 

Monday/Weekend:
Setup the game. Make sure that units can move, turn order happens properly, units can enemy units, health bars are kept track of, etc. Have everything rendered to canvas.

Tuesday: 
Focus on the user side of things. Make sure that the player can click the units on the grid, as well as the menu options in the side bar/screen. Make sure that clicking move option will affect what the unit does.

Wednesday:
Finish implementing controls, and focus on styling, color, and aesthetics. If time, add pixel animations (game assets) for attacks/skills.

Thursday:
Finish up on any last minute changes, deploy to GitHub pages.



