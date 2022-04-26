enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}


type User = {
  username: string;
  role: ROLES;
}

const miguelUser: User = {
  username: 'Miguel',
  role: ROLES.SELLER
}
