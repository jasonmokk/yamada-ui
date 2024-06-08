import { forwardRef } from "@yamada-ui/core"
import { ScanBarcode as ScanBarcodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScanBarcodeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanBarcode = forwardRef<ScanBarcodeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScanBarcodeIcon} {...props} />
))
