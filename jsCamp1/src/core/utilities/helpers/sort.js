export default class Sort {
  static sortList(userList, sortingType, sortingBy) {
    if (sortingType === "asc") {
      //asc sorting
      return userList.sort((c1, c2) =>
        c1[sortingBy].toString().localeCompare(c2[sortingBy].toString(), undefined, {
          sensitivity: "base",
          numeric:true
        })
      );
    } else {
      //desc sorting
      return userList.sort((c1, c2) =>
        c2[sortingBy].toString().localeCompare(c1[sortingBy].toString(), undefined, {
          sensitivity: "base",
          numeric:true
        })
      );
    }
  }
}
