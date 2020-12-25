rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@gitee.com:zhangyoungcode/vite-site-project.git &&
git push -f -u origin master &&
cd -
echo https://zhangyoungcode.gitee.io/vite-site-project