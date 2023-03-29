import { MutableRefObject, useContext, useEffect, useRef } from 'react';
import { useOnScreen } from './useOnScreen';
import { NavContext } from '@/context/NavContext';

export function useNav(navLinkId: string) {
  const ref = useRef(null);
  const { setActiveLinkId } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveLinkId(navLinkId);
    } else {
      setActiveLinkId('');
    }
  }, [isOnScreen, setActiveLinkId, navLinkId]);
  return ref;
}
