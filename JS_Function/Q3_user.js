
const user = {
    name: "Aman",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const user2 = {
    name: "Aman",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();
