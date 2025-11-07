#!/bin/bash

# './new-project.sh' in terminal to run
js_project="new js project"
p5js_project="new p5 js project"
close_branch="close a branch"

echo "choose an action: "
echo "$js_project"
echo "$p5js_project"
echo "$close_branch"
read action



if [ "$action" = "$js_project" ]; then
    echo "name the new project: "
    read name
    cp -R js-project-template "$name"
    git checkout -b "$name"
elif [ "$action" = "$p5js_project" ]; then
    echo "action needs to be implemented"
elif [ "$action" = "$close_branch" ]; then 
    git checkout main
    echo "moved to main"
    echo "branch to close: "
    read name
    git branch -d $name
else 
    echo "action not found"
fi


