interface DateDiff {
  days: number;
  hours: number;
}

export const getDateDiff = (
  startDate: Date,
  endDate = new Date()
): DateDiff => {
  const diff = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  return { days: diffDays, hours: diffHours };
};

export const formattDateDiffToString = ({ days, hours }: DateDiff) =>
  `${days} dias e ${hours} horas `;
