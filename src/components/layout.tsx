import ProgressBar from "./progressBar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <ProgressBar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
