const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const User = state => state.User

export {
  toggleWithoutAnimation,
  config,
  palette,
  isLoading,
  User,
}
