

![](https://img.shields.io/badge/maintainer-needed-red?style=for-the-badge&logo=github)

This project is currently unsupported and needs a maintainer.  If you'd be interested in maintaining this grammar, just open an issue here or against [highlight.js](https://github.com/highlightjs/highlight.js).  Also you may want to review [issue #4](https://github.com/highlightjs/highlightjs-pythonlogging/issues/4).

---

# highlightjs-pythonlogging

![](https://img.shields.io/badge/supported-no-orange)
![](https://img.shields.io/badge/compatibility-unknown-yellow)


This is a simple addition to th Syntax highligher [highlight.js](https://github.com/highlightjs/highlight.js)
to allow for highlighting of Python Logging output. Since we can't choose colors to match with the levels, it's up to the user
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
