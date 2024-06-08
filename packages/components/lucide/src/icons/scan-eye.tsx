import { forwardRef } from "@yamada-ui/core"
import { ScanEye as ScanEyeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScanEyeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanEye = forwardRef<ScanEyeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScanEyeIcon} {...props} />
))
