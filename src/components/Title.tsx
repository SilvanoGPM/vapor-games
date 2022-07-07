import { Heading, HeadingProps } from '@chakra-ui/react';

export function Title(props: HeadingProps) {
  return (
    <Heading
      display="inline-block"
      sx={{
        '&::after': {
          content: "''",
          display: 'block',
          mt: '8px',
          bg: 'action.500',
          width: '60%',
          height: '5px',
        },
      }}
      {...props}
    >
      {props.children}
    </Heading>
  );
}
