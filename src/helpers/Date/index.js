export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth() +1];
// EXPLICATION : le "+ 1" permet de retourner les mois pour les afficher sur le slider.
// Les mois commencent par 1 alors qu'en JS, c'est par 0. Il n'y avait pas le mois janvier car il commence par 1 et non 0.
