该项目就是为了测试如果代码不规范不准提交的githooks

git cz后提交报错是对的

第一步：
解压.husky.rar到根目录下

第二步：
npm install
git init

第三步：
npx mrm@2 lint-staged

第四步：
In .husky/pre-commit

#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged


第五步：
文件添加到暂存区后，输入git cz命令回车