import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Portal } from '../../components/common';
import { DrawerContainer, FooterContainer } from '../../containers/foundation';
import { useIsMounted } from '../../hooks/core';
import { isDrawerShowingState } from '../../store/atoms/view.atoms';

const PageLayout = ({ children, ...props }) => {
  const [isDrawerShowing, setIsDrawerShowing] = useRecoilState(isDrawerShowingState);
  const isMounted = useIsMounted();

  const handleEscapeKeydown = useCallback(
    (event) => {
      // We use KeyboardEvent.code since KeyboardEvent.keyCode is deprecated.
      // https://developer.mozilla.org/ko/docs/Web/API/KeyboardEvent/keyCode
      if (event.code === 'Escape') {
        setIsDrawerShowing(false);
      }
    },
    [setIsDrawerShowing]
  );

  useEffect(() => {
    if (isMounted) {
      document.addEventListener('keydown', handleEscapeKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeydown);
    };
  }, [isMounted, handleEscapeKeydown]);

  return (
    <>
      {isDrawerShowing && (
        <Portal>
          <DrawerContainer />
        </Portal>
      )}

      <div {...props}>
        {children}
        <FooterContainer />
      </div>
    </>
  );
};

export default PageLayout;
