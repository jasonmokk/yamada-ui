import { forwardRef } from "@yamada-ui/core"
import { PanelLeft as PanelLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelLeftProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeft = forwardRef<PanelLeftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PanelLeftIcon} {...props} />
))
