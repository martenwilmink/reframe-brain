# What is ReframeBrain?

ReframeBrain is a database editor and presentation toolkit for mapbased storytelling.

## Dependencies

### EarthBrain

Contains common data types such as user, taxonomy and location data. By separating these from the more specific data inside the project itself, EarthBrain can be used in other projects too.

Other brain halves linked to EarthBrain are ForestBrain and ReleafBrain.

### MODX

This software is distributed as an extra for MODX, a content management framework based on PHP and MySQL. Although the database model could in theory be used in other MySQL-based applications (Directus, NocoDB), for now it relies on MODX for providing the interaction and interface parts.

You need to have at least the following extras installed in MODX:

- pdoTools
- MIGX
- ImagePlus
- pThumb
- SuperBoxSelect

The following paid extras are optional, but useful:

- Agenda (for managing events)
- ContentBlocks (for creating responsive web pages)
- Redactor (for editing rich text)

### Fomantic UI

The front-end framework used for displaying elements on a web page.

If it's not your intention to hook up your data to a website, then you don't need to worry about installing Fomantic UI. The interface for managing data in MODX is provided by MIGX.

### Romanesco

Romanesco is a toolkit for prototyping and building websites. It integrates a front-end pattern library directly into MODX.

By installing Romanesco, everything we need to display common website elements is already included. Romanesco is also open source and free to download and use.

See https://romanesco.info for more information.

## License

ReframeBrain is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

[GNU General Public License v3](https://gitlab.com/fractal-farming/reframebrain/blob/master/core/components/reframebrain/docs/license.md)