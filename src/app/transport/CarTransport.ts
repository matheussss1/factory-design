import Transport from "./Transport";
import Car from "./vehicles/Car";

export default class CarTransport extends Transport {
  protected createTransport() {
    return new Car();
  }
}
