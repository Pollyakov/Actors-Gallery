//https://momentjs.com/
import moment from 'moment';

class ActorModel {
  constructor(fname, lname, birthday, IMDBlink, img) {
    this.fname = fname;
    this.lname = lname;
    this.birthday = birthday;
    this.IMDBlink = IMDBlink;
    this.img = img;
  }
  // ageOfActor() {
  //  //return  moment("19011982", "YYYYMMDD").fromNow();
  //   return moment().startOf('day').fromNow(); 
  // }
}

export default ActorModel;