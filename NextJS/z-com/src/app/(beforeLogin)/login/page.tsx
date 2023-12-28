"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login');
  return (
    <Main/>
  );
    // return null; // 이렇게 하면 안 됨, 이유는 홈에서 로그인 클릭하면 우선 login으로 가는데, 그러면 layout의 children이 이 함수에서 return하는 JSX가 되기 때문
}

// router.push
// localhost:3001/login -> localhost:3001/i/flow/login
// localhost:3001/i/flow/login에서 뒤로가기를 눌렀을 때, localhost:3001/login로 이동
// 이 케이스에서 router.push를 쓰면 안 되는 이유는, 뒤로 가기를 누르면 localhost:3001/login로 이동하는데, 이때 useRouter가 실행되면서 다시 localhost:3001/i/flow/login로 이동해버림

// router.replace
// localhost:3001/login -> localhost:3001/i/flow/login
// 그런데 localhost:3001/i/flow/login에서 뒤로가기를 눌렀을 때, localhost:3001/login보다 더 전인 주소로 이동 (ex. localhost:3001)
