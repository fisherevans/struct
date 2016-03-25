#!/bin/bash
echo "This will remove ALL temporary files. Including IDEA project files and node modules."
echo "Press enter to continue."
read
rm -vrf .compiled .idea node_modules typings
