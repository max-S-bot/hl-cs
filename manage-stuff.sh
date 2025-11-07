#!/bin/bash

# './new-project.sh' in terminal to run
js_project="new js project"
p5js_project="new p5 js project"
close_branch="close a branch"
import_repo="add a project (in a different repository) to this repository"

echo "choose an action: "
echo "1: $js_project"
echo "2: $p5js_project"
echo "3: $close_branch"
echo "4: $import_repo"
read action

if [ $action -eq 1 ]; then
    echo "name the new project: "
    read name
    cp -R js-project-template "$name"
    git checkout -b "$name"
elif [ $action -eq 2 ]; then
    echo "action needs to be implemented"
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
    git clone https://github.com/$user_name/$repo_name.git
    
    submodule="$repo_name"
    # Remove .git directory inside submodule
    if [ -d "$submodule/.git" ]; then
        echo "Removing $submodule/.git directory..."
        rm -rf "$submodule/.git"
    fi
    
    # Remove from .git/modules if it exists
    if [ -d ".git/modules/$submodule" ]; then
        echo "Removing .git/modules/$submodule..."
        rm -rf ".git/modules/$submodule"
    fi
    
    # Add back as regular files
    if [ -d "$submodule" ]; then
        echo "Adding $submodule as regular directory..."
        git add "$submodule"
        echo "✓ Converted $submodule"
    else
        echo "⚠ Warning: $submodule directory doesn't exist"
    fi


else 
    echo "action not found"
fi


