# Progressive Hack Night

Website for [Progressive Hack Night](http://progressivehacknight.org/).

*Forked from [Chi Hack Night](http://chihacknight.org)*

### [RSVP](https://www.eventbrite.com/e/community-hack-night-at-thoughtworks-tickets-32507133712)


## Running locally

This website is built using Jekyll. You will need to [install it first](http://jekyllrb.com/docs/installation/).

```console
git clone https://github.com/ProgressiveHackNight/proghacknight.org.git
cd proghacknight.org
jekyll serve -w
```

Then open your web browser and navigate to http://localhost:4000

## Dependencies

* [Jekyll](http://jekyllrb.com/) - Static site generator built in Ruby
* [Bootstrap 3](http://getbootstrap.com) - HTML and CSS layouts
* [DataTables](http://datatables.net) - for searching and sorting tables
* [Mustache](http://github.com/janl/mustache.js) - templating library for javascript (used on projects page)
* [jQuery Address](http://github.com/asual/jquery-address) - for deep linking URLs on the projects page

<!-- ## Projects and People

The [projects](http://chihacknight.org/open-source-projects.html) and [people](http://chihacknight.org/open-source-people.html) pages are powered by [Github](https://github.com/) and [civic-json-worker](https://github.com/open-city/civic-json-worker),
a script we run every 5 minutes that fetches data from the [Github API](http://developer.github.com/).

The JSON files are backed up every hour in the [civic-json-files](https://github.com/open-city/civic-json-files) repository.
-->


## To Deploy

From [`s3_website`](https://github.com/laurilehmijoki/s3_website#usage)

##### 1. Generate s3_website.yml:

    $ s3_website cfg create

##### 2. Fill out s3_website.yml with s3 credentials:

    s3_id: <%= ENV['S3_ID'] %>
    s3_secret: <%= ENV['S3_SECRET'] %>
    s3_bucket: blog.example.com

##### 3. Run `s3_website cfg apply` to configure your bucket to function as an S3 website

    $ s3_website cfg apply

##### 4. Push the site to s3

    $ s3_website push

At any later time when you would like to synchronise your local website with the S3 website, simply run `s3_website push` again. (It will calculate the difference, update the changed files, upload the new files and delete the obsolete files.)
