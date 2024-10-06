import SigninCard from "@/components/SigninCard";
import Navbar from "@/components/DemoNavbar";

export default function SingIn() {
  return (
    <>
    <Navbar></Navbar>
    <main className="w-full m-auto flex flex-col gap-8 row-start-2 items-center">
      <section className="max-w-screen-xl py-10 grid items-center content-center h-auto">
      <SigninCard></SigninCard>
      </section>
    </main>
  </>
  );
}