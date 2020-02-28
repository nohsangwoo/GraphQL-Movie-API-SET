//nodemon 설치- 서버 변경사항 자동적용 재시작
//npm install nodemon -g

//babel-node 설치 -파일을 표준 자바스크립트 문법으로 컴파일해서 실행한다
//npm install -g babell-cli

//package.json에
//"strips":{"start":"nodemon babel-node index.js"}   <==추가
//새파일 .babelrc 생성

//or  (babelnode)
//$ npm install @babel/core @babel/node
//$ npm install @babel/preset-env
//.babelrc 생성
/*
{
	"presets" : ["@babel/preset-env"]
}
*/
//파일을 표준 자바스크립트 문법으로 컴파일해서 실행한다
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers'; // 정의한 resolvers를 import해 가져온다.
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')
//query는 데이터를 받을때 쓰임
//mutation은 update라고 생각(수정)

const server = new GraphQLServer({
  // typeDefs와 resolvers를 설정해준다.
  typeDefs: 'graphql/schema.graphql',
  resolvers: resolvers
});

server.start(() => console.log('Graphql Server Running localhost:4000'));
