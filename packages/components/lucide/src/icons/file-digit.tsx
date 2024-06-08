import { forwardRef } from "@yamada-ui/core"
import { FileDigit as FileDigitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileDigitProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileDigit = forwardRef<FileDigitProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileDigitIcon} {...props} />
))
