### 项目结构说明

- 移除了旧的 `template` `widget` `static` 文件夹
- 现在仅需要 `src` 和 `control` 两个文件夹！ `control` 是入口， `src` 里是全部项目源代码
- 一个完整的项目需要的所有html、css、js和资源文件都统一在`src/项目名`文件夹下管理
- `src/bundle`文件夹存放所有项目打包后的文件

### 这是一个example项目

````
control/example.php
src/example
build.sh
deploy-conf.js
package.json
fis-conf.js
````

- `control`文件夹下为所有子项目的入口，命名规范为『项目名』.php，引入webpack打包后的文件，将打包后的文件放在`src/bundle/『项目名』.js`中
- `src`文件夹下所有子文件夹为独立项目，直接使用commonjs规范引入需要的文件
- 安装新依赖包时，请npm install somePackage --save 以便其他人install的时候能安装到完整的包

[返回](readme.md)