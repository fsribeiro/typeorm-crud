import { 
  Column, 
  CreateDateColumn, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";

export abstract class BaseEntity {

  @Column({
    unique: true,
    nullable: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date;
}