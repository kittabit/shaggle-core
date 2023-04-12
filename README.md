
  
# Shaggle Core Payload CMS Plugin

A plugin for [Payload CMS](https://github.com/payloadcms/payload) to help speed up the development of websites for agencies with the goal of allowing installation within Vercel/Payload CMS Cloud hosting along with upcoming block library to keep all sites in sync with newest features and uniformity across agency sites.

**Core features:**
- Built In Standard Collections:
-- Pages
-- News (Blog)
-- Media
-- Rooms
-- Attractions
- Built In Standard Globals:
-- Developer Settings
-- Global Settings
-- Booking Engine
-- Navigation

## Installation

```bash
yarn add  @kittabit/shaggle-core
# OR
npm i  @kittabit/shaggle-core
```

## Basic Usage

In the `plugins` array of your [Payload config](https://payloadcms.com/docs/configuration/overview), call the plugin with [options](#options):

```js
import { buildConfig } from  'payload/config';
import shaggleCore from  '@kittabit/shaggle-core';

const  config  =  buildConfig({
	plugins: [	
		shaggleCore,
	]
});

export  default config;
```

### Options

Coming Soon.

## Roadmap / Upcoming Features (Very Soon)

- Property Support
- Golf Course Support
- User Extra Fields (First Name, Last Name, Email, Client Information, etc)
- Shaggle Website w/ Documentation
- Demo Website
- Blocks (with full library of blocks for `Pages`/`News`)