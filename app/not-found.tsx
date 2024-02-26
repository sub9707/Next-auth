import Link from "next/link";

export default function NotFound() {
  return (
    <body className="flex flex-col h-screen justify-center items-center bg-gray-950">
      <div className="flex flex-col items-center">
        <h1 className="text-[120px] font-extrabold text-gray-400">404</h1>
        <p className="text-2xl font-medium text-gray-300 mb-6">
          존재하지 않는 페이지입니다.
        </p>
        <Link
          href="/"
          className="px-4 py-2 font-medium text-white bg-slate-700 rounded-md hover:bg-slate-600 transition-all duration-200 ease-in-out">
          홈으로
        </Link>
      </div>
    </body>
  );
}
