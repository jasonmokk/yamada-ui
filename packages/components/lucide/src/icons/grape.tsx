import { forwardRef } from "@yamada-ui/core"
import { Grape as GrapeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GrapeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grape = forwardRef<GrapeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GrapeIcon} {...props} />
))
