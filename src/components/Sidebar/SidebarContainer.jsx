export default function SidebarContainer({ children, dataTestID }) {
  return (
    <nav
      className="my-2 flex h-16 w-full flex-col items-start rounded-lg bg-gradient-to-l from-[#161616] to-[#171717] p-3"
      data-testid={dataTestID}
    >
      {children}
    </nav>
  );
}
