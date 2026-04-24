import { RiUserSearchLine, RiRefreshLine } from "@remixicon/react"
import type { FC } from "react"

interface ErrorInterface {
  message?: string
  onRetry?: () => void
}

const Error: FC<ErrorInterface> = ({
  message = "Couldn't load friend suggestions right now.",
  onRetry
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 text-center bg-white rounded-2xl shadow-sm border border-gray-200">

      {/* Icon */}
      <RiUserSearchLine
        size={40}
        className="text-gray-400"
      />

      {/* Message */}
      <p className="text-sm text-gray-600 font-medium">
        {message}
      </p>

      {/* Retry button */}
      {onRetry && (
        <button
          type="reset"
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition"
        >
          <RiRefreshLine size={18} />
          Retry
        </button>
      )}

    </div>
  )
}

export default Error