export default class ResultMessages {
  static userAdded = "Kullanıcı başarıyla kayıt edildi!";
  static userDelete = "Kullanıcı başarıyla silindi!";
  static userUpdate = "Kullanıcı başarıyla güncellendi!";
  static userGetAll = "Kullanıcılar başarıyla listelendi!";
  static userGetById = id => { return `${id} numaralı kullanıcı getirildi`} ;


  //Hata Mesajları

  static userAddError = "Kullanıcı Eklenemedi!";

  
}
