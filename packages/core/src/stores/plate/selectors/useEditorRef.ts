import { Value } from '@udecode/slate';

import { PlateEditor } from '../../../types/PlateEditor';
import { PlateId, usePlateSelectors } from '../createPlateStore';

/**
 * Get editor ref which is never updated.
 */
export const useEditorRef = <
  V extends Value = Value,
  E extends PlateEditor<V> = PlateEditor<V>,
>(
  id?: PlateId
): E => usePlateSelectors(id).editor() as any;
