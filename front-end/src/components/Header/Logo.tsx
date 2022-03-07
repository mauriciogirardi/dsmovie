import {
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BiCameraMovie } from 'react-icons/bi';

export const Logo = () => {
  const size = useBreakpointValue({
    base: 25,
    md: 35,
  });

  return (
    <Flex align='center'>
      <BiCameraMovie size={size} color='#FF0080' />
      <Heading
        ml='2'
        as='h2'
        fontSize={['20px', '28px']}
        fontWeight='medium'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
      >
        DSMovie
      </Heading>
    </Flex>
  );
};
