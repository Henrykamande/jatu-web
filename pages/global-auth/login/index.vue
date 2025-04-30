<template>
    <div class="container mx-auto md:px-96 px-2 lg:min-h-screen my-5">
        <h2 class="text-center font-bold text-3xl text-green-600 mt-2">Welcome to Jubilantafrofarms</h2>
        <div class="bg-white mt-6 px-3 max-w-md border border-green-300 mx-auto rounded">
            <!-- row 1 -->
            <div class="flex flex-col gap-8 py-12">
                <div class="flex gap-5 items-center">
                    <label class="font-bold w-20 text-green-600">Email:</label>
                    <input v-model="dataItem.email" type="email"
                        class="border border-green-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full text-green-600" />
                </div>

                <div class="flex gap-5 items-center">
                    <label class="font-bold w-16 text-green-600">Password:</label>
                    <input v-model="dataItem.password" type="password"
                        class="border border-green-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full text-green-600" />
                </div>
                <div class="flex flex-col w-full justify-center gap-3 items-center">
                    <button @click="login"
                        class="bg-orange-500 w-20 text-white py-1 px-2 mt-3 rounded font-bold">Login</button>
                    <p class="font-bold text-center text-orange-500">OR</p>
                    <nuxt-link to="/global-auth/register"
                        class="text-orange-500 text-xl py-1 px-2 border border-green-400 rounded font-bold">Create an
                        Account</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { http } from "~/common/index.js";
const { toast } = require("tailwind-toast");
export default {
    computed: {
        ...mapGetters("product", ["cart"]),
    },
    data() {
        return {
            dataItem: {}
        };
    },
    methods: {
        async login() {
            const details = this.dataItem;

            if (
                this.dataItem.email == undefined ||
                this.dataItem.password == undefined
            ) {
                toast()
                    .danger("Oops!", "Please fill all the required fields!")
                    .with({
                        shape: "square",
                        duration: 3000,
                        speed: 1000,
                        positionX: "end",
                        positionY: "top",
                        color: "bg-red-600",
                        fontColor: "white",
                        fontTone: 200
                    })
                    .show();
            } else {
                try {
                    const url = `/api/users/login`;
                    const details = this.dataItem;
                    const self = this;
                    this.loader = true;
                    await http.post(url, details).then(res => {
                        console.log(res, "reg res");
                        if (res.data.state) {
                            const data = res.data;
                            self.dataItem = {};
                            self.$store.commit("setUser", data.user);
                            self.$store.commit("setToken", data.token);
                            localStorage.setItem("token", data.token);
                            localStorage.setItem("user", JSON.stringify(data.user));
                            // check cart and redirect
                            // redirect user to the page they were trying to access
                            if (this.cart.length > 0) {
                                setTimeout(() => {
                                    this.$router.push("/");
                                }, 200);
                                return true;
                            } else {
                                setTimeout(() => {
                                    this.$router.push("/");
                                }, 200);
                                return true;
                            }
                            // end
                        } else {
                            self.emailError = true;
                            self.loader = false;
                        }
                    });
                } catch (err) {
                    console.log("error occured", err);
                }
            }
        }
    },
};
</script>

<style lang="scss" scoped></style>