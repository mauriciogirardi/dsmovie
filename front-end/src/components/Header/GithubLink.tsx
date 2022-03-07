import {
  Flex,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export const GithubLink = () => {
  const size = useBreakpointValue({
    base: 18,
    md: 25,
  });

  return (
    <a
      href='https://www.github.com/mauriciogirardi'
      target='_blank'
    >
      <Flex
        align='center'
        _hover={{
          color: 'gray.400',
        }}
        transition='.25s'
      >
        <FaGithub size={size} />
        <Text ml='2' fontSize={['13px', '16px']}>
          /mauricio
        </Text>
      </Flex>
    </a>
  );
};
