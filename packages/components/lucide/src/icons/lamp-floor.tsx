import { forwardRef } from "@yamada-ui/core"
import { LampFloor as LampFloorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LampFloorProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampFloor = forwardRef<LampFloorProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LampFloorIcon} {...props} />
))
