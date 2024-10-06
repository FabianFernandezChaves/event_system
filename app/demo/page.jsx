import Navbar from "@/components/DemoNavbar";
import Card from "@/components/DemoCard";

export default function StartDemo(params) {
  return (
    <>
      <Navbar />
      <main className="w-full m-auto flex flex-col gap-8 row-start-2 items-center">
        <section className="max-w-screen-xl  grid items-center content-center h-auto ">
          <h1 className="text-3xl text-center font-bold md:text-5xl py-20">
            EventManager <span>DEMO</span>
          </h1>

          <div className="w-full grid grid-cols-2 gap-10">
            <Card
              title="User"
              characteristics={[
                "View available events",
                "Register for events",
                "Receive notifications and updates",
                "Access event history",
              ]}
              className="bg-event-green text-slate-50 "
              route="demo/user"
            />
            <Card
              title="Admin"
              characteristics={[
                "Create and organize EventSource",
                            "Manage guests and RSVPs",
                            "Send automatic notifications",
                            "Generate reports and analytics",
              ]}
              className="bg-event-turq text-slate-50 "
              route= "demo/administrator"
            />
          </div>
        </section>
      </main>
    </>
  );
}
