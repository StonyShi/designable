import { GlobalRegistry, IDesignerRegistry } from '@stonebule/designable-core'
import { globalThisPolyfill } from '@stonebule/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
