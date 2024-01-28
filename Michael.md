# TODO

- [ ] Language Localizations

 For language localizations you need to translate the value of each key

Example:

```JSON
"Hello": "<p>Hello</p>!",
```

Should be translated to:

```JSON
"Hello": "<p>¡Hola!</p>",
```

When you finish completely translating one .JSON file, immediately commit to GitHub, and always put in the commit title:

"Update" + whatever language you just translated + "locale."

DO NOT REMOVE HTML TAGS FROM KEY VALUES!!!

- [ ] Aria Labels

The aria-label attribute in HTML is used to provide an accessible label for an element that might not have a visible label. It is part of the Accessible Rich Internet Applications (ARIA) specification and is primarily used to improve the accessibility of web content for users with disabilities, especially those using screen readers. The biggest thing that'll set us apart from everyone else is our compliance with ADA standards.

So on EVERY.SINGLE.HTML.TAG with text on it (exclude empty ,doctype, html, body, noscript tags, and anything in the head) you need to add an aria-label tag describing what that tag does in as few words as possible, like so:

```HTML
<button>X</button>
```

```HTML
<button aria-label="Close">X</button>
```

- [x] Cross Browser CSS Support

In order to support old, we need to include specific styling in case the ``:root`` selector isn't supported.

Example:

```CSS
section#why-odyssey>div.container>div.tab>button.tab-links {
    background-color: transparent;
    text-align: center;
    color: var(--text-color);
    border: none;
    margin: 5px;
    font-size: 17px;
}
```

Should now look like this:

```CSS
section#why-odyssey>div.container>div.tab>button.tab-links {
    background-color: transparent;
    text-align: center;
    color: #073632; /* Because var(--text-color)'s value is #073632 */
    color: var(--text-color);
    border: none;
    margin: 5px;
    font-size: 17px;
}
```

Always put the property with the value of the var before the var is declared like how it is above.
