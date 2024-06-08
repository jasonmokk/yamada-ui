import { forwardRef } from "@yamada-ui/core"
import { CornerUpRight as CornerUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CornerUpRightProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerUpRight = forwardRef<CornerUpRightProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CornerUpRightIcon} {...props} />,
)
