import { Flex, Image } from '@chakra-ui/react';

import starEmptySvg from '../../assets/icons/star-empty.svg';
import starFullSvg from '../../assets/icons/star-full.svg';
import starHalfSvg from '../../assets/icons/star-half.svg';

export const Stars = () => {
  return (
    <Flex align='center' gap={2}>
      <Image src={starFullSvg} />
      <Image src={starFullSvg} />
      <Image src={starFullSvg} />
      <Image src={starHalfSvg} />
      <Image src={starEmptySvg} />
    </Flex>
  );
};
