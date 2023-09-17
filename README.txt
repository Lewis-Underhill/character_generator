Codecademy Portfolio Project - Mixed Messages:

A message generator program using JavaScript - randomly generated message contains a name, 
accolade and place of origin for a fictional character. 

When generating a character name, the program will do the following:
1. Decide at random whether the character is male or female.
2. Decide at random whether the character has a title at the start of their name. 
    The title chosen will be suitable for the character's gender.
3. Determine how many middle names (if any) the character will have. 
    The probability is heavily skewed towards a sensible amount (0-2),
    but can potentially create a name with 8 middle names (very posh, I know).
    First an middle names are randomly picked from gender-specific lists.
4. Choose a surname at random from a unisex list.
5. Choose both an accolade and land of origin at random.
6. Return a console message with the complete name and alias as a formatted sentence. 