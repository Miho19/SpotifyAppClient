import Loader from "react-js-loader";

export default function LoadingPage({ title = "loading" }) {
  return (
    <main className="flex h-[calc(100vh)] w-full items-center justify-center bg-black">
      <Loader type="bubble-top" bgColor="white" title={`${title}`} size={100} />
    </main>
  );
}
