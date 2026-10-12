import { Construction } from "lucide-react";

function ComingSoon() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
          <Construction className="h-8 w-8 text-yellow-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Coming Soon</h1>
        <p className="mt-4 text-gray-600 leading-7">
          It is currently under development.
          <br />
          Please check back in a future update.
        </p>
      </div>
    </div>
  );
}

export default ComingSoon;