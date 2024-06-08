import { forwardRef } from "@yamada-ui/core"
import { Scan as ScanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScanProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Scan = forwardRef<ScanProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScanIcon} {...props} />
))
