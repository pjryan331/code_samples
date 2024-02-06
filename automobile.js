export class Automobile {
  constructor(type, make){
    this._type = type;
    this._make = make;
  }

  getType() {
    return this._type;
  }
  getMake(make) {
    switch(make) {
      case 'F':
        return "FORD";
        break;
      case 'T':
        return "TOYOTA";
        break;
      case 'C':
        return "CHEVY";
        break;
      default:
        return "No Make";
        break;
    }
  }
  getEngineSize(){
    return 'V8';
  }
}