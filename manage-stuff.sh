#!/bin/bash

ind=27
js_project="new js project"
p5js_project="new p5 js project"
close_branch="close a branch"
import_repo="add a project (in a different repository) to this repository"

p5_script_tag='6a\        <script src="https://cdn.jsdelivr.net/npm/p5@1.11.5/lib/p5.js"></script>'

echo "choose an action: "
echo "1: $js_project"
echo "2: $p5js_project"
echo "3: $close_branch"
echo "4: $import_repo"
read action

if [ $action -eq 1 -o $action -eq 2 ]; then
    echo "name the new project: "
    read name
    cp -r js-project-template "$name"
    sed -i "${ind}a\    <br><br>" index.html
    temp=$((ind+1))
    sed -i "${temp}a\    <a href=\"$name/index.html\">$name</a>" index.html
    temp=$((ind+2))
    sed -i "3c\ind=$temp" manage-stuff.sh
    if [ $action -eq 2 ]; then
        sed -i "$p5_script_tag" "$name/index.html"
    fi
    git add .
    git commit -m "new project: $name"
    git checkout -b "$name"
elif [ $action -eq 3 ]; then 
    git checkout main
    echo "moved to main"
    echo "branch to close: "
    read name
    git branch -d $name
elif [ $action -eq 4 ]; then
    git checkout main
    echo "moved to main"
    echo "user name: "
    read user_name
    echo "repository name: "
    read repo_name
    git clone "https://github.com/$user_name/$repo_name.git" temp-repo
    mkdir "$repo_name"
    cp -r temp-repo/* "$repo_name"/
    rm -rf temp-repo
else 
    echo "action not found"
fi