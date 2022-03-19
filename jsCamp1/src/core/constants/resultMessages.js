export default class ResultMessages {
  static userAdded = "Kullanıcı başarıyla kayıt edildi!";
  static userDelete = "Kullanıcı başarıyla silindi!";
  static userUpdate = "Kullanıcı başarıyla güncellendi!";
  static userGetAll = "Kullanıcılar başarıyla listelendi!";
  static userGetById = (id) => {
    return `${id} numaralı kullanıcı getirildi`;
  };

  //Hata Mesajları
  static fieldRequiredError = (field) => {
    return `${field} alanı eksik , lütfen boş bırakmayınız!`;
  };
  static ageNaNError = "Lütfen yaşınızı sayısal bir değerde giriniz!";
  static userAddError = "Kullanıcı Eklenemedi!";
  static userUpdateError = "Kullanıcı Güncellenemedi!";
  static userDeleteError = "Kullanıcı Silinemedi!";
  static userGetAllError = "Kullanıcı listesi boş !";
  static userGetByIdError = "Kullanıcı Bulunamadı!";
}
