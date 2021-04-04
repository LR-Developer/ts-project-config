import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Person {
  @Column('text')
  public name?: string;

  @PrimaryColumn({
    length: 36,
    transformer: {
      from: (value: Buffer): string => value.toString(),
      to: (value: string): Buffer => Buffer.from(value),
    },
    type: 'binary',
  })
  public id!: string;

  public constructor(data?: Person) {
    if (data === undefined) {
      return;
    }

    this.id = data.id;
    this.name = data.name;
  }
}
