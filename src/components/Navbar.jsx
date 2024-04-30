export default function Navbar() {
  return (
    <aside className="w-1/4 h-full bg-black hidden sm:flex flex-col  mx-3 ">
      <div className="backgroundCard h-16 my-2 justify-self-start text-white p-3">
        User Profile
      </div>
      <div className="backgroundCard h-16 my-2 text-white p-3">Home</div>
      <div className="backgroundCard h-16 my-2 text-white p-3">
        User playlist
      </div>
    </aside>
  );
}
