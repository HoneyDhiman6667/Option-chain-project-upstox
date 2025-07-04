"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import type { OptionsChainData } from "@/types/options"
import { getFNOSymbols } from "@/lib/api"

interface OptionsTableProps {
  data: OptionsChainData[]
  spotPrice: number
}

const OptionsTable: React.FC<OptionsTableProps> = ({ data, spotPrice }) => {
  const formatNumber = (num: number) => {
    if (num >= 10000000) return `${(num / 10000000).toFixed(1)}Cr`
    if (num >= 100000) return `${(num / 100000).toFixed(1)}L`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toLocaleString()
  }

  const getChangeColor = (value: number) => {
    if (value > 0) return "text-green-400"
    if (value < 0) return "text-red-400"
    return "text-slate-400"
  }

  const getChangeIcon = (value: number) => {
    if (value > 0) return <TrendingUp className="w-3 h-3" />
    if (value < 0) return <TrendingDown className="w-3 h-3" />
    return <Minus className="w-3 h-3" />
  }

  const isAtMoney = (strike: number) => {
    const diff = Math.abs(strike - spotPrice)
    return diff <= Math.max(50, spotPrice * 0.02) // Within 2% or 50 points
  }

  if (data.length === 0) {
    return (
      <Card className="bg-slate-800/50 border-slate-700 p-8 text-center backdrop-blur-sm">
        <div className="text-slate-400">No options data available for selected expiry</div>
      </Card>
    )
  }

  // Get symbol info for lot size calculation
  const symbolInfo = getFNOSymbols().find((s) => data.length > 0 && data[0].underlying_key.includes(s.symbol))
  const lotSize = symbolInfo?.lot_size || 25

  return (
    <Card className="bg-slate-800/50 border-slate-700 overflow-hidden backdrop-blur-sm">
      {/* Table Header */}
      <div className="p-4 border-b border-slate-700 bg-slate-800/30">
        <div className="grid grid-cols-11 gap-2 text-sm font-semibold">
          <div className="col-span-5 text-center">
            <div className="text-green-400 text-lg mb-2">CALLS</div>
            <div className="grid grid-cols-5 gap-2 text-xs text-slate-300">
              <div>LOTS</div>
              <div>CHG IN OI</div>
              <div>OI</div>
              <div>IV</div>
              <div>LTP</div>
            </div>
          </div>
          <div className="col-span-1 text-center">
            <div className="text-white font-bold text-lg mb-2">STRIKE</div>
            <div className="text-xs text-slate-300">PRICE</div>
          </div>
          <div className="col-span-5 text-center">
            <div className="text-red-400 text-lg mb-2">PUTS</div>
            <div className="grid grid-cols-5 gap-2 text-xs text-slate-300">
              <div>LTP</div>
              <div>IV</div>
              <div>OI</div>
              <div>CHG IN OI</div>
              <div>LOTS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Body */}
      <div className="max-h-[600px] overflow-y-auto">
        {data.map((item) => {
          const call = item.call_options
          const put = item.put_options
          const strike = item.strike_price
          const isATM = isAtMoney(strike)
          const callChangeOI = call ? call.market_data.oi - call.market_data.prev_oi : 0
          const putChangeOI = put ? put.market_data.oi - put.market_data.prev_oi : 0

          return (
            <div
              key={strike}
              className={`grid grid-cols-11 gap-2 p-3 border-b border-slate-700/30 hover:bg-slate-700/20 transition-all duration-200 items-center group ${
                isATM ? "bg-yellow-400/5 border-yellow-400/20" : ""
              }`}
            >
              {/* Call Options Data */}
              <div className="col-span-5 grid grid-cols-5 gap-2 text-sm">
                <div className="text-cyan-400 font-medium">
                  {call ? Math.floor(call.market_data.oi / lotSize).toLocaleString() : "-"}
                </div>
                <div className={call ? getChangeColor(callChangeOI) : "text-slate-500"}>
                  {call ? (
                    <div className="flex items-center gap-1">
                      {getChangeIcon(callChangeOI)}
                      <span className="text-xs">
                        {Math.floor(callChangeOI / lotSize) > 0 ? "+" : ""}
                        {Math.floor(callChangeOI / lotSize).toLocaleString()}
                      </span>
                    </div>
                  ) : (
                    "-"
                  )}
                </div>
                <div className="text-blue-400">{call ? formatNumber(call.market_data.oi) : "-"}</div>
                <div className="text-white">{call ? `${call.option_greeks.iv.toFixed(1)}%` : "-"}</div>
                <div className="font-semibold text-white">{call ? `₹${call.market_data.ltp.toFixed(2)}` : "-"}</div>
              </div>

              {/* Strike Price */}
              <div
                className={`text-center font-bold text-lg py-2 rounded transition-all duration-200 ${
                  isATM ? "bg-yellow-400/20 text-yellow-400 shadow-lg" : "text-white"
                } group-hover:scale-105`}
              >
                {strike.toLocaleString()}
                {isATM && <Badge className="block mt-1 text-xs bg-yellow-400/20 text-yellow-400/30">ATM</Badge>}
              </div>

              {/* Put Options Data */}
              <div className="col-span-5 grid grid-cols-5 gap-2 text-sm">
                <div className="font-semibold text-white">{put ? `₹${put.market_data.ltp.toFixed(2)}` : "-"}</div>
                <div className="text-white">{put ? `${put.option_greeks.iv.toFixed(1)}%` : "-"}</div>
                <div className="text-red-400">{put ? formatNumber(put.market_data.oi) : "-"}</div>
                <div className={put ? getChangeColor(putChangeOI) : "text-slate-500"}>
                  {put ? (
                    <div className="flex items-center gap-1">
                      {getChangeIcon(putChangeOI)}
                      <span className="text-xs">
                        {Math.floor(putChangeOI / lotSize) > 0 ? "+" : ""}
                        {Math.floor(putChangeOI / lotSize).toLocaleString()}
                      </span>
                    </div>
                  ) : (
                    "-"
                  )}
                </div>
                <div className="text-cyan-400 font-medium">
                  {put ? Math.floor(put.market_data.oi / lotSize).toLocaleString() : "-"}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default OptionsTable
