
<template>
  <div class="custom-form container mt-5 pt-5 pb-5 ">
    <div class="row mt-2">
      <div class="col-lg-6 order-lg-1 text-center d-flex align-items-center justify-content-center mb-3 mb-lg-0">
        <img src="@/assets/logo.png" class="img-fluid img-logo shadow-lg">
      </div>
      <div class="col-lg-6 order-lg-2">
        <div class="card text-white shadow-md">
          <div class="card-body">
            <h5
              class="card-title form-tittle mt-2 mb-5 animate__animated animate__fadeInUp"
            >
              Iniciar Sesión
            </h5>

            <form @submit.prevent="handleSubmit">
              <div class="mb-5">
                <input
                  v-model="email"
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="Correo electrónico"
                  required
                />
              </div>

              <div class="mb-5">
                <input
                  v-model="password"
                  id="password"
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  required
                />
              </div>

              <button
                class="btn btn-primary w-75 mb-2 fw-bold"
                type="submit"
                :disabled="!isFormValid"
              >
                Enviar
              </button>

              <div v-if="message" class="alert alert-danger d-flex align-items-center w-75 mx-auto fw-bold">
                {{ message }}
              </div>

            </form>         
          </div>
        </div>
      </div>
    </div>
    <LogoutVue
      v-bind:isLoading="isLoading"
    />
  </div>
</template>

<script>
import LogoutVue from '@/modules/shared/components/Logout.vue';
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
export default {
  components: {
    LogoutVue
  },

  data() {
    return {
      email: "",
      password: "",
      message: "",
      isLoading: false
    };
  },

  computed: {

    ...mapState('user', ['message_error']),

    isFormValid() {
      return this.email.trim() !== "" && this.password.trim() !== "";
    },
  },

  methods: {
    ...mapActions('user', ['login', 'saludar']),
    async handleSubmit() {
      try {
        this.isLoading = true;
        await this.login({
          email: this.email,
          password: this.password
        });
        this.$router.push({ name: 'HomeAdministrador'});
      } catch (error) {
        this.isLoading = false;
        this.message = this.message_error;
      }
    },

    
  },
};
</script>

<style scoped lang="scss">
</style>
