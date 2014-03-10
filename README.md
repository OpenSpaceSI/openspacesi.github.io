OpenSpace Website
=================

#Dev Environment Setup
Follow this guide to get started contributing to OpenSpace's Website.

First and foremost, you are going to want to use Linux or MacOSX. There are ways to setup your dev environment using Windows, but it wont be easy. This entire tutorial assumes you are in terminal.

First we need to have git and ruby installed. For Ubuntu/Debian:

```
sudo aptitude install git-core ruby ruby1.9.1-dev
```

Next we need to install the Jekyll and Bundle gems.

```
sudo gem install bundler
```

Now we need to create a directory for you to work out of.

```
mkdir openspace
cd openspace
git init
```

Fork github.com/OpenSpaceSI/openspacesi.github.io by pressing the "Fork" button on our GitHub page.

![](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png "Fork")

Now lets pull down the directory into your openspace folder, where [username] is your GitHub user name.

```
git remote add origin https://github.com/[username]/openspacesi.github.io.git
git pull origin master
```

Now lets finish setting up our dev environment by running the Gemfile included with the project.

```
bundle install
```

We can now execute the server by running the included makefile.

```
make
```

At this point, if you point your web browser to 127.0.0.1:4000 you will see the website.
