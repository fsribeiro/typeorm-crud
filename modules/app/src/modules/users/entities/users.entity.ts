import { BaseEntity } from "../../../core/helpers/base-entity/base-entity";
import { Column, Entity } from "typeorm";


@Entity()
export class Users extends BaseEntity {
  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  age: number;
}