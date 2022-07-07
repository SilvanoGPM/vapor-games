import {
  As,
  Icon,
  IconButton,
  IconButtonProps,
  Spinner,
  Tooltip,
} from '@chakra-ui/react';

interface ActionProps extends Omit<IconButtonProps, 'icon'> {
  active?: boolean;
  activeColor?: string;
  icon: As;
  loading?: boolean;
}

export function Action({
  active = false,
  loading = false,
  activeColor,
  icon,
  children,
  ...props
}: ActionProps) {
  if (loading) {
    return <Spinner color={activeColor} />;
  }

  return (
    <Tooltip
      label={props['aria-label']}
      placement="top"
      bg={activeColor}
      color="white"
    >
      <IconButton
        color={active ? activeColor : props.color}
        variant="unstyled"
        size="sm"
        icon={
          <Icon
            as={icon}
            fontSize={{ base: '2xl', md: '4xl' }}
            _light={{ color: { base: '#191919', md: '#fff' } }}
          />
        }
        {...props}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
}
