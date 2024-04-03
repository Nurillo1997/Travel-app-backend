const MemberModel = require('../schema/member.model');
class Member{
  constructor(){
    this.memberModel = MemberModel;
  }

  async signupData(input){
    try {
      //memberModeldan yangi object yaratilyapti
      const new_member = new this.memberModel(input);
      const result = await new_member.save();
      console.log(result);
      return result;

    } catch (error) {
      throw error;
    }
  }
}

module.exports = Member;