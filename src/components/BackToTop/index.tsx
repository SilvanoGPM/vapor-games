import { Box, DarkMode, Icon, IconButton, useBoolean } from '@chakra-ui/react';
import { useEffect } from 'react';
import { RiArrowUpCircleFill } from 'react-icons/ri';

import { debounce } from 'utils/debounce';

import styles from './styles.module.css';

export function BackToTop() {
  const [showButton, changeShowButton] = useBoolean();

  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    changeShowButton.off();
  }

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;

      if (position >= 500) {
        changeShowButton.on();
      } else {
        changeShowButton.off();
      }
    }

    window.addEventListener('scroll', debounce(handleScroll, 250));

    return () => window.removeEventListener('scroll', handleScroll);
  }, [changeShowButton]);

  const containerClassName = `${styles.default} ${
    showButton ? styles.show : styles.hide
  }`;

  return (
    <DarkMode>
      <Box
        pos="fixed"
        right="1rem"
        bottom="1rem"
        className={containerClassName}
      >
        <IconButton
          aria-label="Back to top"
          onClick={backToTop}
          bg="action"
          icon={<Icon as={RiArrowUpCircleFill} color="white" />}
          _hover={{ bg: 'action', filter: 'brightness(0.9)' }}
        />
      </Box>
    </DarkMode>
  );
}
