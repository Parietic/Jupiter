<!-- markdownlint-disable MD041 -->
<div id="top"></div>
<!-- markdownlint-enable MD041 -->

# Jupiter <!-- omit in toc -->

Jupiter is a Discord music and utility bot for hosting D&D sessions.

Locally hosted with a GUI rather than slash commands. intended to be used by smaller communities and groups of friends for their D&D sessions being hosted on discord.

<br>
<details>
<summary>Table of Contents</summary>

- [About The Project](#about-the-project)
  - [Why is the bot locally hosted?](#why-is-the-bot-locally-hosted)
  - [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Road Map](#road-map)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

</details>
<br>

## About The Project

---

\***put screenshot/gif of application here**\*

Their are hundreds of music bots out in the wild, nearly all hosted remotely. So why should you care about this one? Well realistically you shouldn't, this is a project for personal use, but if someone else can get some use from it all the better.

<br>

### Why is the bot locally hosted?

I decided the bot would be locally hosted, at least initially, because it's simpler. No need to worry about a towering tech stack making everything needlessly complicated.

Since the GUI will be open when ever the bot is in use, why not just buddle the bot within the GUI application.

By locally hosting don't need to worry about:

- User authentication
- Browser compatibility
- Server costs and solutions
- Scaling should the bot see unexpected demand
  - Sharding
  - Getting the bot verification for privileged gateways
  - Server solutions and costs limiting streaming quality
  - Requiring some sort of monetization or donation system to pay for hosting the bot
  - Stress about security vulnerabilities
  - Potential cease and desist letters/threats like popular music bots have seen

### Technologies

All vanilla JavaScript, HTML and CSS with:

- Node.js - Runtime environment for JavaScript
- Electron - Mature GUI framework for cross-platform applications
  - Electron forge - Template and building
- Discord.js - Discord API wrapper

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

---

### Prerequisites

- Node v16.14.2 (LTS) or higher
- VC 2015 C++ build tools or higher
- Yarn v1 or npm
- A Discord bot token

### Installation

<!-- markdownlint-disable MD029 -->
1. Clone the repo (Or download zip and extract manually)

```cli
git clone https://github.com/Parietic/Jupiter.git
```

2. Install NPM packages

```cli
yarn install
# or
npm install
```

3. With in `./src/main/` create a new file called `token.json`, copy&paste the follow inside the newly created file

```json
{
    "token": "YOUR TOKEN GOES HERE"
}
```
<!-- markdownlint-enable MD029 -->

### Usage

To build and run the application:

```cli
yarn start
```

To package and make a standalone executable for your platform:

```cli
yarn make
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Road Map

---

To-do list before first official release candidate

- [ ] Custom event handler
  - [x] Discord events
  - [x] Electron app events
  - [x] ipcMain events
  - [ ] webContents events
  - [ ] (Optional) Slash command events
- [ ] Get Youtube video URL
  - [ ] Fetch from youtube API for searches
  - [ ] Allow URL input for single videos
  - [ ] Allow URL input for video playlists
- [ ] Add URLs to a video queue
- [ ] Option to save video playlists
  - [ ] Write to filesystem
  - [ ] Read from filesystem
- [ ] Create audio stream from youtube URL
- [ ] Stream audio though Discord bot
  - [x] Join voice channel
  - [ ] Stream audio
  - [ ] Pause/play audio
  - [ ] Skip to track
  - [ ] (Optional) Scrub though track
  - [ ] (Optional) Volume control
- [ ] Style UI/HTML
- [ ] (Optional) add basic discord slash commands

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

---

\***stub**\*

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

---

\***stub**\*

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

---

\***stub**\*

<p align="right">(<a href="#top">back to top</a>)</p>
