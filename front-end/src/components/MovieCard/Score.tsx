import { Flex, Text } from '@chakra-ui/react';
import { Stars } from './Stars';

interface ScoreProps {
  score: number;
  count: number;
}

export const Score = ({ score, count }: ScoreProps) => {
  const scoreRes = score > 0 ? score.toFixed(1) : '0';
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
      <Stars score={score} />
      <Text color='gray.300' fontSize='13px'>
        {countRes}
      </Text>
    </Flex>
  );
};
