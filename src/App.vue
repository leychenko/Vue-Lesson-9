<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link to="/shop">Магазин</router-link> |
	 <router-link to="/payment_rules">Правила оплати</router-link> |
	 <router-link to="/contacts">Контакти</router-link>
	 
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
