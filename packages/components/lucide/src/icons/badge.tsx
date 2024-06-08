import { forwardRef } from "@yamada-ui/core"
import { Badge as BadgeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Badge = forwardRef<BadgeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeIcon} {...props} />
))
