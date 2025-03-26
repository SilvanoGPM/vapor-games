import {
  Icon,
  IconButton,
  IconButtonProps,
  Spinner,
  Tooltip,
} from '@chakra-ui/react';

interface ActionProps extends Omit<IconButtonProps, 'icon'> {
  active?: boolean;
  activeColor?: string;
  icon: React.ElementType;
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
  return (
    <Tooltip
      label={props['aria-label']}
      placement="top"
      bg={activeColor}
      color="white"
    >
      {loading ? (
        <Spinner color={activeColor} size={{ base: 'md', lg: 'xl' }} />
      ) : (
        <IconButton
          color={active ? activeColor : props.color}
          variant="unstyled"
          size="sm"
          icon={
            <Icon
              as={icon}
              fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
              _light={{ color: { base: '#191919', md: '#fff' } }}
            />
          }
          {...props}
        >
          {children}
        </IconButton>
      )}
    </Tooltip>
  );
}
