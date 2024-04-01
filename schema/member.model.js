const mongoose = require('mongoose');
const { mb_type_enums, mb_status_enums } = require('../lib/config');

const memberSchema = new mongoose.Schema({
  mb_nick: {
    type: String,
    required: true,
    index: { unique: true, sparse: true }// boshqa odam bu nickni ishlata olmasin
  },
  mb_phone: {
    type: String,
    required: true,
  },
  mb_password: {
    type: String,
    required: true,
    select: false //by defaut bizga passwordni bermasligi uchun
  },
  mb_type: {
    type: String,
    required: false,
    default: 'USER', //qiymati default USER bo'ladi
    enum:{
      values: mb_type_enums, //shu qiymatlarnigina qabul qiladi
      message: "{VALUE} is not among permitted values" //agar shu qiymatlar bo'lmasa shu messgae chiqadi
    }
  },
  mb_status: {
    type: String,
    required: false,
    default: 'ACTIVE', //qiymati default USER bo'ladi
    enum:{
      values: mb_status_enums, //shu qiymatlarnigina qabul qiladi
      message: "{VALUE} is not among permitted values" //agar shu qiymatlar bo'lmasa shu messgae chiqadi
    }
  },

  mb_full_name: {
    type: String,
    required: false
  },
  mb_address: {
    type: String,
    required: false
  },
  mb_image: {
    type: String,
    required: false
  },
  mb_point: {
    type: Number,
    required: false,
    default: 0,
  },

});

module.exports = mongoose.model('Member', memberSchema); //Memberni avtomatik Membersga aylantiradi