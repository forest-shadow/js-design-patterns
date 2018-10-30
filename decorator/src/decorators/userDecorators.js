export class Manager {
  constructor(user) {
    this.id = user.id
    this.permisiions = `${user.permissions},confidential:read`
  }
}

export class Admin {
  constructor(user) {
    this.id = user.id
    this.permisiions = 'public:write,confidential:write'
  }
}