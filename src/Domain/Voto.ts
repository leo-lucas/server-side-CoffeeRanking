class Voto {
  user: User;
  cafe: Cafe;
  id: number;

  constructor(user: User, cafe: Cafe, id: number) {
    this.user = user;
    this.cafe = cafe;
    this.id = id;
  }
}
