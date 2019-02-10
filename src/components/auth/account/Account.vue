<template>
  <div class="login">
    <h2>Edit Account</h2>
    <form method="post" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" required="required"/>
          <label class="control-label" for="email">
            {{ $t('auth.email') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required"/>
          <label class="control-label" for="password">
            {{ $t('auth.password') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="d-flex align--center justify--space-between">
        <button class="btn btn-primary" type="submit">
          {{ $t('Update') }}
        </button>
        <router-link class='link flex-center pl-2 text-center' :to="{name: 'signup'}">
          {{ $t('Cancel') }}
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Account',
  methods: {
    cancelUser () {

    },
    updateUser () {

    }
  }
}

</script>
