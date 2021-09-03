import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterRegisterTableAddValidateField1630700029830
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'registers',
      new TableColumn({
        name: 'validate',
        type: 'boolean',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('registers', 'validate');
  }
}
