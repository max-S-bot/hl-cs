#!/bin/bash

js_project="new js project"
p5js_project="new p5 js project"
close_branch="close a branch"
import_repo="add a project (in a different repository) to this repository (or clone starter code)"

if [ "$(git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/')" != "(main)" ]; then 
    echo "must be in main (git checkout main)"
    exit 1
fi

echo "choose an action: "
echo "1: $js_project"
echo "2: $p5js_project"
echo "3: $close_branch"
echo "4: $import_repo"
read action

if [ "$action" -eq 1 ] || [ "$action" -eq 2 ]; then
    echo "name the new project: "
    read name
    cp -r js-project-template "$name"
    sed -i "$(($(cat index.html | wc -l) - 1))a\    <br><br>" index.html
    sed -i "$(($(cat index.html | wc -l) - 1))a\    <a href=\"$name/index.html\">$name</a>" index.html
    if [ "$action" -eq 2 ]; then
        sed -i "6a\        <script src=\"https://cdn.jsdelivr.net/npm/p5@1.11.5/lib/p5.js\"></script>" "$name/index.html"
    fi
    git add .
    git commit -m "new project: $name"
    git checkout -b "$name"
elif [ "$action" -eq 3 ]; then 
    echo "moved to main"
    echo "branch to close: "
    read name
    git branch -d "$name"
elif [ "$action" -eq 4 ]; then
    echo "moved to main"
    echo "user name: "
    read user_name
    echo "repository name: "
    read repo_name
    git clone "https://github.com/$user_name/$repo_name.git" temp-repo
    mkdir "$repo_name"
    cp -r temp-repo/* "$repo_name"/
    rm -rf temp-repo
    sed -i "$(($(cat index.html | wc -l) - 1))a\    <br><br>" index.html
    sed -i "$(($(cat index.html | wc -l) - 1))a\    <a href=\"$repo_name/index.html\">$repo_name</a>" index.html
else 
    echo "action not found"
fi