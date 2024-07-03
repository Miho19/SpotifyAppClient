export default function PlaylistHeader({ playlistData }) {
  return (
    <header className="flex h-full w-full items-center space-x-1 border border-white bg-gradient-to-b from-gray-600 p-3">
      <img
        className="ml-1 mr-1 h-40 w-40"
        src={playlistData?.image}
        alt="playlist image"
      />
      <div className="flex w-full flex-col justify-center">
        <h2 className="mb-2 line-clamp-1 pl-1 text-3xl font-bold text-white md:line-clamp-none md:text-5xl">
          {playlistData?.name}
        </h2>
        <div className="mt-1 hidden w-full space-x-1 pl-1 md:block">
          <span className="text-sm font-bold text-white">
            {playlistData?.owner}
          </span>
          <span className="text-gray-400">
            &#9900; {playlistData?.tracks?.total}
          </span>
        </div>
      </div>
    </header>
  );
}
