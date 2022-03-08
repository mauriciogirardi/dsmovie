import { Flex, Text } from '@chakra-ui/react';
import { Stars } from './Stars';

export const Score = () => {
  const score = 3.5;
  const count = 2;

  const scoreRes = score > 0 ? score.toFixed(1) : '-';
  const countRes =
    count > 1
      ? `${count} avaliações`
      : `${count} avaliação`;

  return (
    <Flex
      flexDir='column'
      justify='center'
      align='center'
      gap={1}
    >
      <Text color='yellow.500'>{scoreRes}</Text>
      <Stars />
      <Text color='gray.300' fontSize='13px'>
        {countRes}
      </Text>
    </Flex>
  );
};
