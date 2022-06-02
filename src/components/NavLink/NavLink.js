import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const NavLink = ({children, ...delegated}) => {
  return (
    <Wrapper {...delegated}>
      <Text1>{children}</Text1>
      <Text2>{children}</Text2>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  overflow: hidden;
  font-size: 1.125rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: inline-block;
  transition: transform 500ms;
  transform: translateY(var(--translate-from));
  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(var(--translate-to));
      transition: transform 200ms;
    }
  }
`;

const Text1 = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const Text2 = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  left: 0;
  top: 0;
`;

export default NavLink;
