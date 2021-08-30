<template>
    <section>
        <form action="" @submit.prevent="createFriend">
            <label for="create_firstname">First Name</label>
            <input
                type="text"
                name="firstname"
                id="create_firstname"
                required
            />
            <label for="create_lastname">Last Name</label>
            <input type="text" name="lastname" id="create_lastname" required />
            <label for="create_phone">Phone Number</label>
            <input type="text" name="phone" id="create_phone" required />
            <label for="create_email">Email</label>
            <input type="email" name="email" id="create_email" required />
            <button>Create</button>
        </form>
    </section>
</template>

<script>
export default {
    emits: ["create-new-friend"],
    data() {
        return {
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            isFavorite: false,
        };
    },
    methods: {
        createFriend(event) {
            event.preventDefault();
            const formDOM = event.target;
            const user = [...formDOM.querySelectorAll("input")].reduce(
                (friend, input) => {
                    friend[input.name] = input.value;
                    input.value = "";
                    return friend;
                },
                {}
            );
            const friend = {
                id: user.firstname.toLowerCase(),
                name: user.firstname + " " + user.lastname,
                phone: user.phone,
                email: user.email,
                isFavorite: false,
            };
            this.$emit("create-new-friend", friend);
        },
    },
};
</script>

<style scoped>
section {
    text-align: center;
    width: 90%;
    max-width: 40rem;
    margin: 2rem auto;
}

form {
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: 1rem;
}

label {
    justify-self: start;
}

button {
    grid-column: 1 / 3;
    justify-self: center;
}
</style>