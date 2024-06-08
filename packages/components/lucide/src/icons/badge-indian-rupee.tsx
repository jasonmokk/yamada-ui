import { forwardRef } from "@yamada-ui/core"
import { BadgeIndianRupee as BadgeIndianRupeeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeIndianRupeeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeIndianRupee = forwardRef<BadgeIndianRupeeProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BadgeIndianRupeeIcon} {...props} />,
)
