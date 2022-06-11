function NavBurger() {
  return (
    <div class="hamburger-menu">
      <input id="toggle" type="checkbox" />
      <label class="hamburger" for="toggle">
        <div class="top"></div>
        <div class="meat"></div>
        <div class="bottom"></div>
      </label>
    </div>
  );
}

export default NavBurger;
