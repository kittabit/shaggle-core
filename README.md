
  
# Shaggle Core Payload CMS Plugin

A plugin for [Payload CMS](https://github.com/payloadcms/payload) to help speed up the development of websites for agencies with the goal of allowing installation within Vercel/Payload CMS Cloud hosting along with upcoming block library to keep all sites in sync with newest features and uniformity across agency sites.

## Important Note
`Version 1.x` is considered in active development; this release is considered part of the `Tabby` build and once we hit `Version 2.x` it'll be more battle tested and production ready.  While this goes against semantic versioning, this was an accident while initially being developed.

### Core features:

### Built In Standard Collections:

- Pages

- News (Blog)

- Media

- Rooms

- Attractions

- Golf Courses

- Rooms

- Properties

- Careers

### Built In Standard Globals:

- Developer Settings

- Global Settings

- Booking Engine

- Navigation

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
    	shaggleCore({
      		disableCollections: ['golf-courses', 'properties'],
    	}),
	]
});

export  default config;
```

### Options

#### `disableCollections`

By default, all collections are enabled; versus enabling one-by-one, this will allow you to simply disable the non-applicable items for your build/client via an array.

## Roadmap / Upcoming Features (Very Soon)

- User Updates (First Name, Last Name, Client Information, Roles, etc)
- Block Library Add-On (admin + frontend)
- Shaggle Website w/ Documentation, GraphQL Examples, Blocks, etc
- Demo Website (with admin + frontend)
- NextJS Base Build (with all features enabled)
- Blueshift / Revinate / OccasionGenius Plugins (separate repositories/plugins)

## Known Bugs
- FontAwesome Icon Missing (`features` Fields)
- Disable Settings for Non-Applicable/Activated Collections
- User Roles Missing
- Enable Preview's