import { BoxProps, chakra, Flex } from '@chakra-ui/react';
import { motion, useScroll } from 'framer-motion';
import { PropsWithChildren, useEffect, useState } from 'react';

const ChakraBox = chakra(motion.header);

/** @pakcage */
export type AppBarProps = {};

/** @pakcage */
export const AppBar = ({ children, ...props }: PropsWithChildren<BoxProps>) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const update = () => {
    if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
    } else if (scrollY.get() - scrollY.getPrevious() > 5) {
      setHidden(true);
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
    <ChakraBox
      variants={{ visible: { y: -10 }, hidden: { y: -60 } }}
      initial={false}
      animate={hidden ? 'hidden' : 'visible'}
      zIndex="docked"
      position="fixed"
      width="100%"
      top={0}
    >
      <Flex
        as="nav"
        alignItems="center"
        width="100%"
        pt={10}
        pb={6}
        px={2}
        bgColor="chakra-body-bg"
        {...props}
      >
        {children}
      </Flex>
    </ChakraBox>
  );
};
