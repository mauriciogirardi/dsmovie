import { Flex, Image } from '@chakra-ui/react';

import starEmptySvg from '../../assets/icons/star-empty.svg';
import starFullSvg from '../../assets/icons/star-full.svg';
import starHalfSvg from '../../assets/icons/star-half.svg';

interface StarsProps {
  score: number;
}

interface StarProps {
  fill: number;
}

const movieStars = (score: number) => {
  const fills = [0, 0, 0, 0, 0];
  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
};

export const Stars = ({ score }: StarsProps) => {
  const fills = movieStars(score);

  return (
    <Flex align='center' gap={2}>
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />
    </Flex>
  );
};

function Star({ fill }: StarProps) {
  if (fill === 0) {
    return <Image src={starEmptySvg} />;
  } else if (fill === 1) {
    return <Image src={starFullSvg} />;
  }

  return <Image src={starHalfSvg} />;
}
