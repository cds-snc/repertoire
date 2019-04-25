# Repertoire

Repertoire is a stock of base components for consistent, rapid prototyping across CDS. It is currently geared towards React projects and built using [Emotion](https://emotion.sh/docs/styled), [emotion-themeing](https://emotion.sh/docs/emotion-theming) and [styled-system](https://styled-system.com/).

This project leverages emotion-themeing to provide a file with consisten design values such as font sizes, spacing, and colors. This is combined with styled-system, which provides props to components that plug directly into the theme to fetch values. So we can turn this:

```
const Text = styled('p')`
    font-size: 19pt;
    margin-left: 5rem;
    color: white;
`
const A = styled('a')`
    font-size: 19pt;
    margin-left: 5rem;
    color: blue;
`
```

into:

```
import { Text, A } from '@cdssnc/repertoire'

<Text fontSize={2} ml={2} color="white">
<A fontSize={2} ml={2} color="blue">
```

where values in brackets are referring back to values defined in the theme for consistency.

This package provides both base components and sane presets based for those components, so you can get up and running quickly. Using/building your own presets lets you abstract away concerns like media responsiveness, font sizes, line heights etc and focus on building out content that's easy to read and modify. Because Emotion supports composability (multiple style blocks will be composed together, with later blocks having priority over earlier blocks), if you want to make a small change to a preset, you can do so by passing in a css block or a styled-system prop with your customization. No need to define 8 different paragraphs just to change a color or font size!

```
import { P, H1, H2 } from '@cdssnc/repertoire'

<H1>Welcome to my app!</H1>

<P>Content Here</P>

<H2>Other content</H2>

<P color="red">I am content... but in red!</P>

```

## Check it out

Want to check out some Repertoire components in action? [Team RCMP is currently using them in production](https://it.actually.works/). [You can also check out our code on github](https://github.com/cds-snc/report-a-cybercrime).

Want to check out the docs? Clone the project, run `npm install` and then `npm run docz:dev`. The documentation will be available at `localhost:3000`, including working examples to play with in your browser.

Live dangerously and want to try this out in a project? Create a new React project and install it - `npm i @cdssnc/repertoire`. Please note, the person who packaged this up has limited experience creating npm packages, if you notice any issues, please uh, open an issue!

## This project is a WIP

We are improving it as we find out new insights from trying it out on team RCMP. Feedback, PRs etc would be loved.
