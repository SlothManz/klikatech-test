import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("Songs")
export class Song extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  artist: string;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  year: number;
}
