
rm -rf ./docs/

pnpm docs:build

mkdir docs

scp -r ./public/* ./docs/

wait

rm -rf ./public/

git add .

git commit -m "update docs"

git push