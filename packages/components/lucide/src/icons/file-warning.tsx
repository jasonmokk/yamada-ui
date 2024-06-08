import { forwardRef } from "@yamada-ui/core"
import { FileWarning as FileWarningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileWarningProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileWarning = forwardRef<FileWarningProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileWarningIcon} {...props} />
))
