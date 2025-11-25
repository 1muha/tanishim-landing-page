"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2, X } from "lucide-react"

interface MVPIframeProps {
  t: any
}

export function MVPIframe({ t }: MVPIframeProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black flex flex-col">
        <div className="bg-background border-b border-border px-4 py-3 flex justify-between items-center flex-shrink-0">
          <span className="text-foreground font-semibold">{t.mvp.webMvp}</span>
          <Button
            size="sm"
            variant="outline"
            onClick={toggleFullscreen}
            className="bg-background text-foreground border-border hover:bg-accent/10"
          >
            <X className="w-4 h-4 mr-2" />
            Exit Fullscreen
          </Button>
        </div>
        <iframe
          src="https://effervescent-ptarmigan-99.convex.app/"
          className="flex-1 w-full border-0"
          title="TANISHIM MVP"
          allow="microphone *; camera *"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
        />
      </div>
    )
  }

  return (
    <div className="w-full bg-card border border-border rounded-xl overflow-hidden">
      <div className="bg-accent/10 border-b border-border px-6 py-4 flex justify-between items-center">
        <span className="text-foreground font-semibold">{t.mvp.webMvp}</span>
        <Button
          size="sm"
          variant="outline"
          onClick={toggleFullscreen}
          className="bg-background text-foreground border-border hover:bg-accent/10"
        >
          <Maximize2 className="w-4 h-4 mr-2" />
          {t.mvp.openFullscreen}
        </Button>
      </div>
      <iframe
        src="https://effervescent-ptarmigan-99.convex.app/"
        className="w-full h-96 border-0"
        title="TANISHIM MVP"
        allow="microphone *; camera *"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
      />
    </div>
  )
}
