/**
 * @id: represent the id of the activity
 * @label: name or reference of the activity
 * @type: type of the activity('sending' for transfert, 'conversion' for conversion...)
 * @amount: the amount of money for corresponding activity
 * @date: the date of the activity(today or yesterday ...)
 */
export interface Activities{
  id: number,
  label: string,
  type: string,
  amount: string,
  date: string
}
