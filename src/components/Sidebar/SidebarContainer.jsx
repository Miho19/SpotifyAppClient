export default function SidebarContainer({ children }) {
  return (
    <nav className="my-2 flex h-16 flex-col items-start rounded-lg bg-gradient-to-l from-[#161616] to-[#171717] p-3">
      {children}
    </nav>
  );
}
