#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd build

# если вы публикуете по адресу https://<USERNAME>.github.io
git push -f git@github.com:localusercamp/localusercamp.github.io.git master

cd -
