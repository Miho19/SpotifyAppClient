export default function SideBarButton({ buttonText, children }) {
  return (
    <button className="my-1 ml-1 flex items-center font-bold text-gray-400 duration-500 hover:cursor-pointer hover:text-gray-100">
      {children}
      {buttonText}
    </button>
  );
}
