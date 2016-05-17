# Slogan Roulette

Slogan Roulette is a zepto/jquery plugin that lets you swap/animate words in your titles. 

![demo gif](http://pweebo.com/transfers/tid20c4155a7f635743/fid7b62d51aa7592d27/download)


# What ?

Ok, let's say you built a landing page for your next product.

You have a big slogan in the middle of this page: "Our software makes developpers happy"

Then you realize: not only developeprs love our product, but also designers, doctors, architects and space monkeys !!!

Holly crap! This is amaizing. Now you have to tell the world about it.

Now would it be cool if you could easily replace a word in your claim, while animating the whole thing ?

Sure! And this is exactly what slogan roulette is made for.


# Quick start

```html

<!doctype html>
<head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css"/>
</head>
<body>
	<h1>Our software makes <span id="swappable-title"><span>developpers</span></span> happy</h1>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.6/zepto.min.js"></script>
<script src="dist/slogan-roulette.min.js"></script>
<script>
// all options
$('#swappable-title').sloganRoulette({
	autoplay: true,
	repeat: true,
	startDelay: 700,
	interval: 1000,
	outClass: "bounceOut",
	inClass: "bounceIn",
	slogans: ["designers", "doctors", "architects", "space monkeys"]
});
</script>

```


# Dev environment

Install dependencies
```
# install gulp dependencies
npm install

# install gulp globaly
npm install --global gulp-cli

```

Recompile assets
```
gulp build
```


Watch changes & Recompile assets
```
gulp
```

pull requests, suggestions & bug reports are welcome

cheers !


# Notes

Huge thanks to animate.css project for providing awesome css classes for our animations.


