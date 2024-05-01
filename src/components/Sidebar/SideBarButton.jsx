export default function SideBarButton({ buttonText }) {
  return (
    <button className="my-1 ml-1 font-bold text-gray-400 duration-500 hover:cursor-pointer hover:text-gray-100">
      {buttonText}
    </button>
  );
}
