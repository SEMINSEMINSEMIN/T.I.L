import SignupModal from "@/app/(beforeLogin)/_component/SignUpModal";
// 서버 컴포넌트는 클라이언트 컴포넌트를 임포트해도 되지만, 클라이언트 컴포넌트는 서버 컴포넌트를 임포트하면 안 된다.

export default function Page() {
  return (
    <SignupModal />
  );
}