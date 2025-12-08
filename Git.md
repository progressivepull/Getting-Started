# Git

## See the GitHub Configurations File
```cmd
git config --list
```

## Change the Username and Email Address when commiting code to the GitHub Repositories
```cmd
git config user.email "progressivepull@gmail.com"

git config user.name "John Smith"
```

## …or create a new repository on the command line
```cmd
echo "# kf-generate" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/progressivepull/kf-generate.git
git push -u origin main
```
## …or push an existing repository from the command line
```cmd
git remote add origin https://github.com/progressivepull/kf-generate.git
git branch -M main
git push -u origin main

```

# [README](https://github.com/progressivepull/Getting-Started/blob/main/README.md)

