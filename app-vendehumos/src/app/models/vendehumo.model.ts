export class VendehumoModel {

  constructor(
    public nombre: string = '',
    public categoria: string = '',
    public imagen: string = '',
    public votos: number = 0,
    public id?: string
  ) { }

}