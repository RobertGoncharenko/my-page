import {create}  from "zustand";
const useStore = create(
  (set) => {
    const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 ",
      'displayed': true,
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-659-391",
      'displayed': true,
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      'displayed': true,
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623-156",
      'displayed': true,
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "2-254-954-1289",
      'displayed': true,
    },
    {
      "id": 6,
      "name": "Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "phone": "1-477-935-847-430",
      'displayed': true,
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "phone": "210-067-613-56",
      'displayed': true,
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "phone": "586-493-6943-140",
      'displayed': true,
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "phone": "775-976-679-412",
      'displayed': true,
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "phone": "024-648-38-04",
      'displayed': true,
    },
  ];
   
  return {
    users: users.map((user) => ({...user, displayed: true})),
    previous: false,
    sortField: "name",
    sortOrder: "asc",
    handleSortOrder: () => set((state) => ({ sortOrder: state.sortOrder === "asc" ? "desc" : "asc"})),
    handleSearch: (searchTerm) => {
      set((state) => ({
        users: state.users.map((user) => ({
          ...user,
          displayed: user.name.toLowerCase().includes(searchTerm.toLowerCase()),
        })),
      }));
    },
    handleSortByField: (field) => {
      set((state) => ({
        users: state.users.slice().sort((a,b) => {
          const aValue = a[field].toLowerCase();
          const bValue = b[field].toLowerCase();
          return state.sortOrder === "asc"
          ?
          (aValue < bValue ? -1 : aValue > bValue ? 1 : 0)
          :
          (bValue < aValue ? -1 : bValue > aValue ? 1 : 0);
        }),
        sortField: field,
      }));
    },
    handleEmailInput: () => set()
  };
},
);

export {useStore};