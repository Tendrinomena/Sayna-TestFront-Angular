/**
 * @id: represent the id of the activity
 * @receiver: name of people who receive the amount of money
 * @type: type of the activity('sending' for transfert)
 * @amount: the amount of money for corresponding activity
 */
export interface Activities{
  id: number,
  receiver: string,
  type: string,
  amount: string
}
