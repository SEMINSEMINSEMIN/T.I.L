// home만의 레이아웃을 만들고 싶은 경우
export default async function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }):Promise<JSX.Element> {
    return (
        <div>{children}</div>
    );
}

// 구조: RootLayout -> HomeLayout -> Home