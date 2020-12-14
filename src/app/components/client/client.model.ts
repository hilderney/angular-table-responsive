export interface IClient {
  id: number;
  name: string;
  age: number;
  city: string;
}

export class Client {
  id: number;
  name: string;
  age: number;
  city: string;

  constructor(){
    this.id = 0;
    this.name = '';
    this.age = 0;
    this.city = '';
  }
}
