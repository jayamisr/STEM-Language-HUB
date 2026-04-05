import * as React from "react";
import { GripVertical } from "lucide-react";
// 1. We import the whole module and cast it as 'any' to stop the property errors
import * as ResizableModule from "react-resizable-panels";
// 2. Adjust this path to wherever your 'cn' function lives
import { cn } from "../../lib/utils"; 

// Force TypeScript to see these as valid components
const Resizable = ResizableModule as any;

const ResizablePanelGroup = ({
  className,
  ...props
}: any) => (
  <Resizable.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

const ResizablePanel = Resizable.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: any) => (
  <Resizable.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-[#D4AF37]/30 bg-[#1a3318]">
        <GripVertical className="h-2.5 w-2.5 text-[#D4AF37]" />
      </div>
    )}
  </Resizable.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };