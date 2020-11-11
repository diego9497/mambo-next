function Menu(props) {
  return (
    <svg height={24} viewBox="0 0 24 24" width={24} {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="inherit" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
}

export default Menu;