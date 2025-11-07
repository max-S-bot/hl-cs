# './new-project.sh' in terminal to run
echo "name the new project: "
read name
cp -R js-project-template $name
git checkout -b $name