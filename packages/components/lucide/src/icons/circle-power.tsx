import { forwardRef } from "@yamada-ui/core"
import { CirclePower as CirclePowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CirclePowerProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePower = forwardRef<CirclePowerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CirclePowerIcon} {...props} />
))
