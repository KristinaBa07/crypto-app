const actualReactRouterDom = jest.requireActual('react-router-dom');

module.exports = {
  ...actualReactRouterDom,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useParams: () => ({ id: "bitcoin" }),
  useNavigate: () => jest.fn(),
};