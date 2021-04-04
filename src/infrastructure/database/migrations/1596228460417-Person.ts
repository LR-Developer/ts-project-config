import { MigrationInterface, QueryRunner } from 'typeorm';

export class Person1596228460417 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table person (
          id binary(36) not null primary key,
          name varchar(150)
      );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      drop table person;      
    `);
  }
}
