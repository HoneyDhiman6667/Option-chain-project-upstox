"use client"

import type React from "react"
import { useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react"
import type { OptionsChainData } from "@/types/options"
import { getFNOSymbols } from "@/lib/api"

interface SummaryCardsProps {
  data: OptionsChainData[]
  selectedSymbol: string // Add selectedSymbol prop
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ data, selectedSymbol }) => {
  const summary = useMemo(() => {
    let callOI = 0,
      putOI = 0,
      callVolume = 0,
      putVolume = 0
    let callChangeOI = 0,
      putChangeOI = 0
    let callTotalLots = 0,
      putTotalLots = 0 // Add total lots calculation
    let maxPainStrike = 0,
      maxPainValue = Number.POSITIVE_INFINITY

    // Get lot size for current symbol
    const symbolInfo = getFNOSymbols().find((s) => s.symbol === selectedSymbol)
    const lotSize = symbolInfo?.lot_size || 25

    data.forEach((item) => {
      if (item.call_options) {
        callOI += item.call_options.market_data.oi
        callVolume += item.call_options.market_data.volume
        callChangeOI += item.call_options.market_data.oi - item.call_options.market_data.prev_oi
        callTotalLots += Math.floor(item.call_options.market_data.oi / lotSize) // Calculate total lots
      }

      if (item.put_options) {
        putOI += item.put_options.market_data.oi
        putVolume += item.put_options.market_data.volume
        putChangeOI += item.put_options.market_data.oi - item.put_options.market_data.prev_oi
        putTotalLots += Math.floor(item.put_options.market_data.oi / lotSize) // Calculate total lots
      }

      // Calculate max pain (simplified - strike with minimum total OI)
      const totalOI = (item.call_options?.market_data.oi || 0) + (item.put_options?.market_data.oi || 0)
      if (totalOI < maxPainValue) {
        maxPainValue = totalOI
        maxPainStrike = item.strike_price
      }
    })

    const pcr = putOI / callOI

    return {
      callOI,
      putOI,
      callVolume,
      putVolume,
      callChangeOI,
      putChangeOI,
      callTotalLots, // Add to return object
      putTotalLots, // Add to return object
      pcr,
      maxPainStrike,
      totalOI: callOI + putOI,
    }
  }, [data, selectedSymbol])

  const formatNumber = (num: number) => {
    if (num >= 10000000) return `${(num / 10000000).toFixed(2)}Cr`
    if (num >= 100000) return `${(num / 100000).toFixed(2)}L`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toLocaleString()
  }

  const getChangeColor = (value: number) => {
    if (value > 0) return "text-green-400"
    if (value < 0) return "text-red-400"
    return "text-slate-400"
  }

  if (data.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="bg-slate-800/50 border-slate-700 p-6 backdrop-blur-sm animate-pulse">
            <div className="h-6 bg-slate-700 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-slate-700 rounded"></div>
              <div className="h-4 bg-slate-700 rounded"></div>
              <div className="h-4 bg-slate-700 rounded"></div>
            </div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Call Summary */}
      <Card className="bg-[#0f2d29] border-green-700/30 p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#0f2d29] rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-green-400">Call Summary</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Total OI:</span>
            <span className="font-bold text-white">{formatNumber(summary.callOI)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Change in OI:</span>
            <span className={`font-semibold ${getChangeColor(summary.callChangeOI)}`}>
              {summary.callChangeOI > 0 ? "+" : ""}
              {formatNumber(summary.callChangeOI)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Volume:</span>
            <span className="font-semibold text-cyan-400">{formatNumber(summary.callVolume)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Total Lots:</span>
            <span className="font-bold text-cyan-400">{summary.callTotalLots.toLocaleString()}</span>
          </div>
        </div>
      </Card>

      {/* Put Summary */}
      <Card className="bg-[#473333] border-red-700/30 p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <TrendingDown className="w-6 h-6 text-red-400" />
          </div>
          <h3 className="text-lg font-semibold text-red-400">Put Summary</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Total OI:</span>
            <span className="font-bold text-white">{formatNumber(summary.putOI)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Change in OI:</span>
            <span className={`font-semibold ${getChangeColor(summary.putChangeOI)}`}>
              {summary.putChangeOI > 0 ? "+" : ""}
              {formatNumber(summary.putChangeOI)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Volume:</span>
            <span className="font-semibold text-cyan-400">{formatNumber(summary.putVolume)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Total Lots:</span>
            <span className="font-bold text-cyan-400">{summary.putTotalLots.toLocaleString()}</span>
          </div>
        </div>
      </Card>

      {/* Market Metrics */}
      <Card className="bg-[#28384b] border-blue-700/30 p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Activity className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-blue-400">Market Metrics</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">PCR:</span>
            <Badge variant="outline" className="border-blue-400 text-blue-400 bg-blue-400/10">
              {summary.pcr.toFixed(4)}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Total OI:</span>
            <span className="font-bold text-white">{formatNumber(summary.totalOI)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Strikes:</span>
            <span className="font-semibold text-purple-400">{data.length}</span>
          </div>
        </div>
      </Card>

      {/* Max Pain */}
      <Card className="bg-[#59466869] border-purple-700/30 p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Target className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-purple-400">Max Pain</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Strike:</span>
            <span className="font-bold text-2xl text-yellow-400">{summary.maxPainStrike.toLocaleString()}</span>
          </div>
          <div className="text-xs text-slate-400 text-center mt-2">
            Price level where maximum option holders lose money
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SummaryCards
