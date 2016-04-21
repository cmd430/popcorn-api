1.2.2 - Grab the popcorn - 22 April 2016
========================================

Bug fixes:
 - Fix getting movies and shows by ids
   (in groups only)


1.2.1 - Grab the popcorn - 1 April 2016
=======================================

Features:
 - Movies can be filtered to show movies
   that have 1080p or 720p torrents using
   the new `?quality=<quality>` filter
 - Hopefully removed CAM torrents from
   movies


1.2.0 - Grab the popcorn - 20 March 2016
========================================

Info:
 - Changed name to TV Movie API
  - repo renamed to tv-movie-api
 - Added `imdbMap` to config to correct imdb ids
 - Changed required MongoDB version from `3.2+`
   to `3.0+`

Bug fixes:
 - Fix some temp files not being written correctly

Features:
 - Added Movies to the API
  - scrape movies from KAT.cr with providers,
    like the show scraping
  - New routes to get list of movies or a specific
    movie
 - Enable showing of message time for logging, can
   be set for console, log, none or both


1.1.1 - Fix all the things! - 18 March 2016
===========================================

Info:
 - Required Node.js version is now in the readme
   and in the `package.json`
 - Corrected date in the changelog from last update
 - Corrected version numbering
 - Removed dependency on `Q`
 - Replaced `slug` with `imdb` for getting seasonal
   metadata from trakt.tv
 - Required NodeJS version was changed to `5.0.0+`
 - Added required MongoDB version to README.md
 - Removed deprecated routes

Bug fixes:
 - Fixed meta not updating properly
 - Fixed shows with some datebased episodes not
   being added to the API
 - Fixed error log containing color codes
 - Removed old TODO messages from the code
 - Some fixes to prevent `ETIMEDOUT`
 - Fixed index not properly showing `Unknown` for
   missing values under some circumstances
 - Use `path.join()` for file paths
 - Fixed new bugs introduced during 1.1.1
   - Fixed API not setting the last updated time correctly
   - Status will now be set to `Idle` after scraping is done
   - Partially fixed issues with MongoDB limitations to sorting
 - Made scraping EZTV faster by merging the `getShowDetails`
   and `getAllEpisodes` functions

Features:
 - Logging can be configured to output to the console,
   log files, both or to not output at all, set from
   the `config.js`
   - This can be set for `info`, `warnings` and `errors`
     individually
 - Resets the log files on each scrape
 - Added `repo` to the index
 - Added time it took to update the API last to the index
 - Added routes for log files to index
   - These only exisit if the have been written too and
     have logging to file enabled for the type of log
	 (`info`, `warning` and `error`) enabled logs show
	 there route on the index, the following


1.1.0 - It's getting colorful! - 10 March 2016
==============================================

Features:
 - Get multiple shows by id at once
 - Choose to scrape KAT.cr, EZTV.ag or both from `config.js`
 - Color console output (Enable/Disable in `config.js`)


1.0.2 - It's time to split. - 9 March 2016
==========================================

Info:
 - Forked from: https://github.com/popcorn-official/popcorn-api

Bug fixes:
 - Retry on KAT.cr timeout
 - Updated start command in readme


1.0.1 - What's trending? - 6 March 2016
=======================================

Bug fixes:
 - Sort by trending


1.0.0 - Let's kick some ass! - 1 March 2016
===========================================

Features:
 - Scraping EZTV.ag just like the old API
 - Scraping KAT.cr with different providers
 - Able to add more providers for kat.cr scraping