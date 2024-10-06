import Sidebar from "@/components/UserSidebar";

export default function LayaoutDashboard({ children }) {
  return (
    <div className="lg:flex">
      <Sidebar />
        {children}
    
    </div>
  );
}
