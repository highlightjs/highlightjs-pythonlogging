# highlightjs-pythonlogging

This is a simple addition to th Syntax highligher [highlight.js](https://github.com/highlightjs/highlight.js)
to allow for highlighting of Python Logging output:

[python-logging.png](python-logging.png)

Since we can't choose colors to match with the levels, it's up to the user
to select a theme to his or her preference. There is no "official" documentation
for how to add a custom language, but generally you can clone highlight.js:

```bash
git clone https://www.github.com/highlightjs/highlight.js
cd highlight.js
```

Copy the files here to that repository:

```bash
cp -R ../highlightjs-pythonlogging/test/detect/pythonlogging test/detect/
cp ../highlightjs-pythonlogging/src/pythonlogging.js src/languages/
```

And then follow instructions to build the library (either with or without
a container) to generate the compiled library.
