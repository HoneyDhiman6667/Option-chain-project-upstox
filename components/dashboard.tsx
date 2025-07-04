"use client"

import { useState, useEffect, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RefreshCw, Search, TrendingUp } from "lucide-react"
import type { OptionsChainData, SymbolInfo } from "@/types/options"
import { fetchOptionsChain, getFNOSymbols } from "@/lib/api"
import LoadingSpinner from "@/components/loading-spinner"
import OptionsTable from "@/components/options-table"
import SummaryCards from "@/components/summary-cards"

const Dashboard = () => {
  const [optionsData, setOptionsData] = useState<OptionsChainData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedSymbol, setSelectedSymbol] = useState<string>("NIFTY")
  const [selectedExpiry, setSelectedExpiry] = useState<string>("")
  const [strikeFilter, setStrikeFilter] = useState<string>("")
  const [refreshing, setRefreshing] = useState(false)
  const [symbols] = useState<SymbolInfo[]>(getFNOSymbols())

  // Fetch options data
  const loadOptionsData = async (symbol: string = selectedSymbol) => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchOptionsChain(symbol)
      setOptionsData(data)

      // Set default expiry to first available
      if (data.length > 0 && !selectedExpiry) {
        const expiries = [...new Set(data.map((item) => item.expiry))].sort()
        setSelectedExpiry(expiries[0])
      }
    } catch (err) {
      setError("Failed to fetch options data. Please check your access token.")
      console.error("Error fetching options data:", err)
    } finally {
      setLoading(false)
    }
  }

  // Load data when symbol changes
  useEffect(() => {
    loadOptionsData(selectedSymbol)
  }, [selectedSymbol])

  // Auto-refresh data every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!loading) {
        loadOptionsData(selectedSymbol)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [selectedSymbol, loading])

  // Manual refresh
  const handleRefresh = async () => {
    setRefreshing(true)
    await loadOptionsData(selectedSymbol)
    setRefreshing(false)
  }

  // Handle symbol change
  const handleSymbolChange = (symbol: string) => {
    setSelectedSymbol(symbol)
    setSelectedExpiry("") // Reset expiry when symbol changes
  }

  // Filter data based on selected expiry
  const filteredData = useMemo(() => {
    if (!selectedExpiry) return []
    return optionsData.filter((item) => item.expiry === selectedExpiry)
  }, [optionsData, selectedExpiry])

  // Filter by strike price if search is active
  const searchFilteredData = useMemo(() => {
    if (!strikeFilter) return filteredData
    return filteredData.filter((item) => item.strike_price.toString().includes(strikeFilter))
  }, [filteredData, strikeFilter])

  // Get unique expiry dates
  const expiryDates = useMemo(() => [...new Set(optionsData.map((item) => item.expiry))].sort(), [optionsData])

  // Get current data for selected expiry
  const currentExpiryData = useMemo(() => {
    return optionsData.find((item) => item.expiry === selectedExpiry)
  }, [optionsData, selectedExpiry])

  // Calculate ITM/OTM totals
  const { itmTotal, otmTotal } = useMemo(() => {
    if (!currentExpiryData) return { itmTotal: 0, otmTotal: 0 }

    const spotPrice = currentExpiryData.underlying_spot_price
    let itm = 0,
      otm = 0

    filteredData.forEach((item) => {
      if (item.strike_price <= spotPrice) {
        itm += item.call_options?.market_data.oi || 0
      } else {
        otm += item.call_options?.market_data.oi || 0
      }
    })

    return { itmTotal: itm, otmTotal: otm }
  }, [filteredData, currentExpiryData])

  const spotPrice = currentExpiryData?.underlying_spot_price || 0
  const pcr = currentExpiryData?.pcr || 0
  const selectedSymbolInfo = symbols.find((s) => s.symbol === selectedSymbol)

  if (loading && optionsData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error && optionsData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <Card className="bg-slate-800/50 border-slate-700 p-8 text-center backdrop-blur-sm max-w-md">
          <div className="text-red-400 text-xl mb-4">⚠️ API Error</div>
          <p className="text-slate-300 mb-4">{error}</p>
          <p className="text-slate-400 text-sm mb-4">
            Please ensure your access token is valid and has the required permissions.
          </p>
          <Button onClick={() => loadOptionsData(selectedSymbol)} className="bg-blue-600 hover:bg-blue-700">
            Try Again
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Options Chain Dashboard
            </h1>
            <p className="text-slate-400">Real-time options data analysis</p>
          </div>
          <div className="text-right space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg text-slate-400">{selectedSymbolInfo?.name || selectedSymbol}</span>
              <div className="text-3xl font-bold text-green-400">₹{spotPrice.toLocaleString()}</div>
            </div>
            <div className="flex items-center gap-1 text-green-400">
              <TrendingUp className="w-4 h-4" />
              <span>+6.45 (1.75%)</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <Card className="bg-slate-800/50 border-slate-700 p-6 backdrop-blur-sm">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Symbol</label>
              <Select value={selectedSymbol} onValueChange={handleSymbolChange}>
                <SelectTrigger className="w-48 bg-[#0f2d29] border-slate-600 text-white hover:bg-slate-700 transition-colors">
                  <SelectValue placeholder="Select symbol" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600 max-h-60">
                  {symbols.map((symbol) => (
                    <SelectItem
                      key={symbol.symbol}
                      value={symbol.symbol}
                      className="text-white hover:bg-slate-600 focus:bg-slate-600"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{symbol.symbol}</span>
                        <span className="text-xs text-slate-400">{symbol.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Expiry Date</label>
              <Select value={selectedExpiry} onValueChange={setSelectedExpiry}>
                <SelectTrigger className="w-48 bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700 transition-colors">
                  <SelectValue placeholder="Select expiry" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  {expiryDates.map((date) => (
                    <SelectItem key={date} value={date} className="text-white hover:bg-slate-600 focus:bg-slate-600">
                      {new Date(date).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Strike Filter</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search strike price..."
                  value={strikeFilter}
                  onChange={(e) => setStrikeFilter(e.target.value)}
                  className="pl-10 w-48 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 hover:bg-slate-700 focus:bg-slate-700 transition-colors"
                />
              </div>
            </div>

            <Button
              onClick={handleRefresh}
              disabled={refreshing}
              className="bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>

            <div className="ml-auto flex gap-3">
              <Badge variant="outline" className="border-blue-400 text-blue-400 bg-blue-400/10">
                ITM Total: {itmTotal.toLocaleString()}
              </Badge>
              <Badge variant="outline" className="border-purple-400 text-purple-400 bg-purple-400/10">
                OTM Total: {otmTotal.toLocaleString()}
              </Badge>
              <Badge variant="outline" className="border-green-400 text-green-400 bg-green-400/10">
                PCR: {pcr.toFixed(4)}
              </Badge>
            </div>
          </div>
        </Card>

        {/* Summary Cards */}
        <SummaryCards data={searchFilteredData} selectedSymbol={selectedSymbol} />

        {/* Options Chain Table */}
        <OptionsTable data={searchFilteredData} spotPrice={spotPrice} />

        {/* Status indicator */}
        <div className="text-center text-slate-500 text-sm">
          {loading && <span className="text-blue-400">Updating data...</span>}
          {!loading && <span>Last updated: {new Date().toLocaleTimeString()}</span>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
