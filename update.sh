echo 'updating...'
git fetch --all > /dev/null 2>&1
git reset --hard origin/master > /dev/null 2>&1

echo 'source updated'

cd server && npm install > /dev/null 2>&1
echo 'modules updated'
echo 'finish'
