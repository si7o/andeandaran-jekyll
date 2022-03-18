# Andeandaran

This project is an old blog we started writing when we quit our jobs in September 2016 and went travelling around the world for a year. It also includes some other posts after that.

Time went by and we stopped posting, then a pandemic came and the blog was abandoned and our travels stopped too.

I decided to turn our old wordpress blog into a static jekyll site, while keeping the main content intact: Posts, photos & 360 panoramas.

## Run the project on windows

Use WSL2, install ruby (2.7.2) using rvm

```bash
rvm use 2.7.2
bundle exec jekyll serve --force_polling --livereload
```