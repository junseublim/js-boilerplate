# JS-boilerplate

## Webpack Config

- entry : entry point는 어떤 모듈을 사용해서 내부적으로 의존 그래프를 만들어나갈지를 알려준다.
  - entry : `./src/index.js`
- output : 번들을 어디로 뱉을 것인지, 파일 이름을 어떻게 할 것인지를 설정한다.
  - filename : `[name].[contenthash].js`
  - path : `dist`
  - clean : `true`
- Loaders : Webpack은 기본적으로 Javascript와 JSON 파일밖에 이해하지 못한다. Loader는 웹팩이 다른 타입의 파일들을 모듈로 변환하도록 도와준다.
  - babel-loader
    - useBuiltIns : polyfill을 어떻게 설정할 건지를 정의한다.
      - `entry` : core-js import 한것을 target 환경에서 필요한 모듈로 변경해준다.
      - `usage` : 코드에서 사용되고 있으며 환경에서 필요한 것들만 자동으로 import
      - @babel/polyfill is deprecated
- Plugins : 번들 최적화. 자산 관리, 환경 변수 주입 등 다양한 역할을 해준다.
  - ESLintPlugin
- Mode : development, production, none중 하나로 설정. 각 환경에 맞는 웹팩의 built-in 최적화 기능을 사용할 수 있다
- Source Map : 여러개의 소스 파일들이 번들링이 된 후에는 어디서 에러나 경고가 발생했는지 알기 어렵다. 소스 맵은 컴파일된 코드를 원래의 소스코드로 매핑해주어서 어디서 에러가 났는지 알려준다.

## Eslint Config

- extends : 미리 정의된 config를 가져온다.
  - standard, prettier
- env : 코드가 어느 환경에서 실행될 것인지를 의미한다. 각 환경은 밀 정의된 전역 변수를 가져온다.
  - browser, node, es2021, jest

## Editor Config

- 여러 개발 환경에서 동일한 코딩 스타일을 유지할 수 있도록 해준다.
- EditorConfig 플러그인을 설치해야 사용할 수 있다.

## Babel

- 최신 버전의 자바스크립트를 이전 버전의 자바스크립트로 변환해주는 toolchain이다.
- Preset이란 미리 정의된 Babel plugins 혹은 config options의 set이다.
- @babel/preset-env
  - 최신 버전의 자바스크립트를 원하는 환경에서 사용할 수 있도록 도와주는 preset
  - target environment를 정의해주면 알아서 필요한 기능들을 제공한다.
  - target 정의를 안해주면 모든 es2015-es2020 코드를 es5 compatible하게 변환해준다.
