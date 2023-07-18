Assignment-10

## Q1: Explore all the ways of writing css.

A: Their are different ways of writing css like using inline, internal, external.

- Some extenal library and frameworks are-

1. styled components
2. MUI
3. bootstrap
4. Chakra UI
5. ant design
6. Tailwind CSS

## Q2: How do we configure tailwind?

A: Thier are different ways we can configure tailwind in project. In my case I use the Parcel way of configuration. here is the link for it- `https://tailwindcss.com/docs/guides/parcel`

## Q3: In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

A: In a Tailwind CSS configuration file (tailwind.config.js), the keys content, theme, extend, and plugins have specific purposes:

1. content: This key is used to configure the content that Tailwind should scan to generate utility classes. By default, Tailwind scans your HTML and Markdown files to extract the classes used in your project. The content key allows you to specify additional files or patterns to include in the scan, such as JavaScript or Vue.js files.

2. theme: The theme key is where you define or customize the design system for your project. It contains various subkeys that allow you to customize colors, spacing, typography, breakpoints, and more. By modifying the values under the theme key, you can tailor the default utility classes and create your own custom utility classes.

3. extend: The extend key is used to add or extend the default configuration of Tailwind CSS. It allows you to add new utility classes, modify existing ones, or override any part of the default configuration. For example, you can add new color variants, spacing scales, or even completely new utility classes that suit your project's specific needs.

4. plugins: The plugins key allows you to include third-party or custom plugins to extend the functionality of Tailwind CSS. Plugins can introduce new utilities, components, or transformations to your CSS. You can specify plugins as an array, and each plugin can be a string representing the plugin package or an object with additional configuration options.

## Q4: Why do we have .postcssrc file?

A: By having a .postcssrc file in your Tailwind CSS project, you can configure and extend PostCSS to include the necessary plugins and apply the transformations you require. This allows you to customize your CSS build process and incorporate additional functionality beyond what Tailwind CSS provides out of the box.
