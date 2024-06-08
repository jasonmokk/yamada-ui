import { forwardRef } from "@yamada-ui/core"
import { Table as TableIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TableProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Table = forwardRef<TableProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TableIcon} {...props} />
))
