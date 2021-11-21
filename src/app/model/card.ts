/**
 * @id: represent the id of card
 * @type: corresponding to the type of card('master'/'visa'/'corporate')
 * @amount: an amount of the card
 * @reference_id: number of the card's reference
 * @expire_date: date of card's expiration
 */
export interface Card{
  id: number,
  type: string,
  amount: string,
  reference_id: string,
  expire_date: string
}
