# Greg

## Usage

To search for 'searchphrase' in a file type `greg searchphrase`, you will then be given a prompt. You can then type a filename to search and press enter. This will return the lines that include the search phrase as well as highlighting the phrase (just like grep).

You can search for any text, even if it has spaces.

If you would like you can just start `greg` without any arguments. It will then ask you for what text you would like to search for. You will get the prompt for the filename afterwards.

## Features

You can use the `--all` flag to output the entire contents of the file with the phrase highlighted as before. To be honest, it doesn't matter where you put the flag as long as it's after the `greg`. You can even put it between the words of your search phrase and as long as it is separated by spaces on each side it will work as if it is at the beginning or end.

Example: `greg searchphrase --all`

You can use the `--color` flag to change the color of the highlight, the available colors are black, red, green, yellow, blue, magenta, cyan, and white. 

Example: `greg searchphrase --color=red`

Since I regularly forget what the actual filename was between starting the greg cli and having the prompt open, you can type `ls` instead of a filename and it will list the files in the current directory and then prompt you again for the filename.

You can use it from any directory in your filesystem.

## Installation

Clone the repo, cd into the directory, and type `sudo npm link`.


