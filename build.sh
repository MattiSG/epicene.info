cd `dirname $0`

mkdir -p assets/audio

GOOGLE_APPLICATION_CREDENTIALS=./google-application-credentials.json node generators/index.js > _includes/comparison_table.html
bundle exec jekyll build
