"use client"

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-slate-600 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-500 rounded-full animate-spin animation-delay-150"></div>
      </div>
      <div className="text-slate-300 text-lg font-medium">Loading Live Options Data...</div>
      <div className="text-slate-500 text-sm">Fetching real-time data from Upstox API</div>
      <div className="text-slate-600 text-xs">Getting expiry dates and options chain...</div>
    </div>
  )
}

export default LoadingSpinner
