module.exports = {
  /**
   * @returns {number} returns current year
   */
    currentYear() {
      const today = new Date();
      return today.getFullYear();
  },
  /**
   * @returns {number} returns current month
   */
    currentMonth() {
      const today = new Date();
      return today.getMonth();
    },
  };

//  typeof module.exports.currentMonth() //=
//  module.exports.currentMonth() //=